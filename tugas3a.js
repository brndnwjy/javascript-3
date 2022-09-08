const angkaPrima = (bil) => {
  return new Promise((resolve, reject) => {
    let divider = 0;

    for (let i = 1; i <= bil; i++) {
      if (bil % i == 0) {
        divider++;
      }
    }

    divider == 2 ? resolve(bil) : reject(bil);
  });
};

const angka = 373;
angkaPrima(angka)
  .then((res) => {
    console.log(`${res} merupakan angka prima`);
  })
  .catch((err) => {
    console.log(`${err} bukan angka prima`);
  });
