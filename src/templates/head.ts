export function head(): string {
    return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Short Link</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
  
      <link href="https://cdn.jsdelivr.net/npm/daisyui@3.6.2/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://cdn.tailwindcss.com"></script>
  
      <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>    
    </head>
  </html>
  `;
}