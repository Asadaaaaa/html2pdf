# HTML to PDF Converter

This is a simple web application built with Express.js, html-pdf-node, and Cheerio that allows you to convert HTML files to PDF documents. The application loads an HTML file from the 'html/' directory, converts it to a PDF file, and returns the PDF as a response.

## Installation
To install the application, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/<username>/html2pdf.git
```
2. Install the dependencies:
```bash
npm install
```

3. Start the application:
```bash
npm start
```

This will start the server on http://localhost:3001/.

## Usage
To use the application, follow these steps:

1. Place your HTML file in the 'html/' directory.
2. Replace any image references in your HTML file with base64-encoded data URLs.
```css
<img src="path/to/image.jpg" />
```
3. becomes:
```css
<img src="data:image/*;base64,<base64-encoded-data>" />
```

4. You can use the following command to convert an image to a base64-encoded data URL:
```bash
base64 path/to/image.jpg
```

4. Visit http://localhost:3001/ in your browser.

## License
This application is licensed under the MIT License. See the LICENSE file for more information.

## Credits
This application was built with the following libraries:

Express.js - https://expressjs.com/
html-pdf-node - https://www.npmjs.com/package/html-pdf-node
Cheerio - https://cheerio.js.org/
