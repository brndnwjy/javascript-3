const cekHariKerja = (hari) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hariKerja = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = hariKerja.find((item) => {
        return item == hari.toLowerCase();
      });

      if (cek) {
        resolve(`${cek} adalah hari kerja`);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

const panggilFungsi = async (hari) => {
  try {
    const hasil = await cekHariKerja(hari);
    console.log(hasil);
  } catch (error) {
    console.log(error);
  }
};

const hari = "Senin";
panggilFungsi(hari);
