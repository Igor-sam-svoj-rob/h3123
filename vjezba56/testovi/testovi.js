const axios = require("axios");

const funkcije = {
  add: (broj1, broj2) => broj1 + broj2,
  isNull: () => null,
  provjeri: (x) => x,
  kreiraj: () => {
    const osoba = { ime: "Ivan", prezime: "Horvat" };
    return osoba;
  },
  fetchOsoba: () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((error) => "greška");
  },
};

module.exports = funkcije;
