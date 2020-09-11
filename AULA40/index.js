const numeros = [1,2,3,4,5,6,7,8,9,10];

//Continue - continua para proxima iteração
//Break - sai do laço

let i = 0;

do {
  let num = numeros[i];


  if ( num === 2) {
    console.log(`Pulei o numero 2..`);
    i++;
    continue;
  }

  console.log(num);

  if (num === 8) {
    console.log(`8 encontrado, saindo...`);
    i++;
    break;
  }

  i++;
} while ( i < numeros.length)

// const numeros = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; numeros.length; i++) {
//   let num = numeros[i];


//   if (num % 2 === 1) {
//     continue;
//   }

//   if ( num === 6) {
//     console.log(`Pulei o numero 6...`);
//     continue;
//   }

//   if (num === 8) {
//     console.log(`8 encontrado, saindo`);
//     break;
//   }

//   console.log(num);
// }