const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVocalesDigitos(cadena) {
  const vocales = "aeiouAEIOU";
  let numVocales = 0;
  let numDigitos = 0;

  for (let i = 0; i < cadena.length; i++) {
    const char = cadena[i];
    if (vocales.includes(char)) {
      numVocales++;
    } else if (char >= '0' && char <= '9') {
      numDigitos++;
    }
  }
  return { numVocales, numDigitos };
}

function solicitarCadena() {
  rl.question('Ingresa una cadena de texto: ', (cadena) => {
    while (cadena.trim() === "") {
      console.log("La cadena no puede estar vacía. Inténtalo de nuevo.");
      rl.question('Ingresa una cadena de texto: ', (nuevaCadena) => {
        cadena = nuevaCadena;
      });
    }

    const resultado = contarVocalesDigitos(cadena);
    console.log(`Número de vocales: ${resultado.numVocales}`);
    console.log(`Número de dígitos: ${resultado.numDigitos}`);
    rl.close(); 
  });
}

solicitarCadena();