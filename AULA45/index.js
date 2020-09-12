function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Esperando isntãncia de Date')
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12:  false
  });
}

try {
  const data = new Date('01-01-1970 10:11:12');
  const hora = retornaHora(data);
  console.log(hora);
} catch (e) {
  //tratar erro!
} finally {
  console.log('Tenha um bom dia...')
}

// try {
//   //console.log(a)
//   console.log('Abri um arquivos!');
//   console.log('Manipulei o arquivo');
//   console.log('Fechei o arquivo!');

//   try {
//     console.log(b)
//   } catch (e) {
//     console.log('Deu erro!')
//   } finally {
//     console.log('Tambem sou FINALLY!')
//   }

// } catch (e){
//   console.log('Tratando o erro!')
// } finally {
//   console.log('FINALLY: Eu sempre vou executar!!!');
// }