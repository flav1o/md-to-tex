export const renderHtmlContent = (
  printStyles: string,
  printContent: string
) => {
  return `
    <html>
        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
        integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0" crossorigin="anonymous">
            <head>
            <style>
                ${printStyles}
            </style>
            </head>
            <body>
            <div id="print-content">
                ${printContent}
            </div>
            </body>
      </html>
    `;
};
