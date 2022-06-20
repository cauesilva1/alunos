let listaDeAlunos = ["icaro", "caue", "giovana", "william", "juan"];

let numeroDeAlunos = listaDeAlunos.length;

for (let numero = 0; numero < listaDeAlunos.length; numero++) {
  if (numero == 0) {
    console.log("o numero é ZERO");
  } else if (numero % 2 == 0) {
    console.log(`o numero ${numero} é PAR`);
  } else if (numero % 2 == 1) {
    console.log("esse numero é IMPAR");
  }
}
