import Express from 'express';
import html2pdf from 'html-pdf-node';
import FS from 'fs-extra';
import { load } from 'cheerio';

const api = Express();

api.get('/', async (req, res) => {
  try {
    const file = FS.readFileSync(process.cwd() + '/html/index.html');
    let html = Buffer.from(file).toString('utf8');
    const $ = load(html);
    
    $('img').each((i, el) => {
      const imgFile = FS.readFileSync(process.cwd() + '/html/img/' + $('img')[i].attribs.src);
      const base64img = Buffer.from(imgFile).toString('base64');
      $('img')[i].attribs.src = 'data:image/*;base64, ' + base64img;
    });
    
    let content = { content: $.html() };

    const pdf = await html2pdf.generatePdf(content, { format: 'A4' });
    res.setHeader('Content-Type', 'application/pdf');
    return res.send(pdf);
  } catch(err) {
    console.log(err)
    return res.send('something wrong')
  }
  
});

api.listen(3001)

console.log('PDF Preview Run on http://localhost:3001/')