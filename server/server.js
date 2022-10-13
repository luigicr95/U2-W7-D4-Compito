const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/hello", (req, res) => {
  res.send([
    {
      id: 1,
      cover: "../images/Bends.jpg",
      titolo: "The Bends",
      autore: "Radiohead",
      dataDiUscita: "1995",
      casaDiscografica: "EMI",
    },
    {
      id: 2,
      cover: "../images/Banquet.jpg",
      titolo: "Beggars Banquet",
      autore: "The Rolling Stones",
      dataDiUscita: "1968",
      casaDiscografica: "Decca Records",
    },
    {
      id: 3,
      cover: "../images/Radici.jpg",
      titolo: "Radici",
      autore: "Francesco Guccini",
      dataDiUscita: "1972",
      casaDiscografica: "Columbia Graphophone Company",
    },
    {
      id: 4,
      cover: "../images/Darkside.jpg",
      titolo: "The Dark Side of the Moon",
      autore: "Pink Floyd",
      dataDiUscita: "1973",
      casaDiscografica: "Capitol Records",
    },
    {
      id: 5,
      cover: "../images/Zero.jpg",
      titolo: "0",
      autore: "Low Roar",
      dataDiUscita: "2014",
      casaDiscografica: "Tonequake Records",
    },
    {
      id: 6,
      cover: "../images/Loretape.jpg",
      titolo: "LORETAPE",
      autore: "Morgan no Rarity",
      dataDiUscita: "2021",
      casaDiscografica: "Indipendente",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
