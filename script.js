let studants = [
  ['Matheus', 10, 10],
  ['Anna', 8, 7],
  ['Pedro', 3, 6],
  ['Miguel', 4, 8]
];

name1 = studants[0] [0];
name2 = studants[1] [0];
name3 = studants[2] [0];
name4 = studants[3] [0];

let media1 = (studants[0] [1] + studants[0] [2]) / 2;
let media2 = (studants[1] [1] + studants[1] [2]) / 2;
let media3 = (studants[2] [1] + studants[2] [2]) / 2;
let media4 = (studants[3] [1] + studants[3] [2]) / 2;

let names = [name1, name2, name3, name4]
let medias = [media1, media2, media3, media4]

for (let i = 0; i <= (studants.length - 1); i++) {
  if (medias[i] >= 7) {
    alert(`A média do(a) aluno ${names[i]} é ${medias[i]} \nParabéns, ${names[i]}! Você foi aprovado(a) no concurso!`); 
  } else {
    alert(`A média do(a) aluno ${names[i]} é ${medias[i]} \nNão foi dessa vez, ${names[i]}! Tente novamente!`);
  }
}