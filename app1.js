const headers = document.querySelector('h1.h2.h3.h4.h5.h6');

for (let i = 0; i <headers.length; i++){
    headers[i].innerText = `Nuevo Encabezado denivel ${i+1}`;
}