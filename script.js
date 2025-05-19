let isDark = false;

function addBlock(type) {
  const preview = document.getElementById("preview");
  let element;

  switch(type) {
    case 'title':
      element = document.createElement('h2');
      element.innerText = 'Novo Título';
      break;
    case 'text':
      element = document.createElement('p');
      element.innerText = 'Escreva um parágrafo aqui...';
      break;
    case 'image':
      element = document.createElement('img');
      element.src = 'https://via.placeholder.com/800x300';
      element.style.maxWidth = '100%';
      element.style.margin = '20px 0';
      break;
    case 'button':
      element = document.createElement('button');
      element.innerText = 'Clique aqui';
      element.style.padding = '10px 20px';
      element.style.margin = '10px 0';
      element.style.border = 'none';
      element.style.background = '#10b981';
      element.style.color = '#fff';
      element.style.borderRadius = '8px';
      break;
    case 'divider':
      element = document.createElement('hr');
      element.style.margin = '30px 0';
      element.style.border = '1px solid var(--text-muted)';
      break;
  }

  if (element && type !== 'divider') {
    element.contentEditable = true;
  }

  if (element) {
    preview.appendChild(element);
    preview.scrollIntoView({ behavior: "smooth", block: "end" });
  }
}

function exportHTML() {
  const preview = document.getElementById("preview").innerHTML;
  const fullHTML = `
  <html>
    <head><meta charset="UTF-8"><title>Sua Página</title></head>
    <body style="font-family: sans-serif; padding: 40px;">
      ${preview}
    </body>
  </html>`;
  const blob = new Blob([fullHTML], { type: 'text/html' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'pagina.html';
  link.click();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark');
  isDark = !isDark;
}
