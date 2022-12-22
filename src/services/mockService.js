const database = [
  {
    id: 1,
    title: "Podolí",
    category: "Czech Republic",
    stock: 7,
    imgurl: "http://dummyimage.com/111x100.png/dddddd/000000",
    detail: "CZ",
    price: 2349.28,
  },
  {
    id: 2,
    title: "Faleula",
    category: "Samoa",
    stock: 7,
    imgurl: "http://dummyimage.com/152x100.png/5fa2dd/ffffff",
    detail: "WS",
    price: 806.76,
  },
  {
    id: 3,
    title: "Kurortnyy",
    category: "Russia",
    stock: 5,
    imgurl: "http://dummyimage.com/199x100.png/dddddd/000000",
    detail: "RU",
    price: 1556.01,
  },
  {
    id: 4,
    title: "Stockholm",
    category: "Sweden",
    stock: 6,
    imgurl: "http://dummyimage.com/215x100.png/cc0000/ffffff",
    detail: "SE",
    price: 1386.07,
  },
  {
    id: 5,
    title: "Rublëvo",
    category: "Russia",
    stock: 3,
    imgurl: "http://dummyimage.com/221x100.png/ff4444/ffffff",
    detail: "RU",
    price: 853.39,
  },
  {
    id: 6,
    title: "Grazhdanka",
    category: "Russia",
    stock: 10,
    imgurl: "http://dummyimage.com/222x100.png/dddddd/000000",
    detail: "RU",
    price: 586.08,
  },
  {
    id: 7,
    title: "Néa Pélla",
    category: "Greece",
    stock: 2,
    imgurl: "http://dummyimage.com/188x100.png/5fa2dd/ffffff",
    detail: "GR",
    price: 1660.25,
  },
  {
    id: 8,
    title: "Gaoling",
    category: "China",
    stock: 10,
    imgurl: "http://dummyimage.com/223x100.png/ff4444/ffffff",
    detail: "CN",
    price: 3172.41,
  },
  {
    id: 9,
    title: "Vicente Guerrero",
    category: "Mexico",
    stock: 7,
    imgurl: "http://dummyimage.com/146x100.png/cc0000/ffffff",
    detail: "MX",
    price: 2619.54,
  },
  {
    id: 10,
    title: "Suzaka",
    category: "Japan",
    stock: 10,
    imgurl: "http://dummyimage.com/197x100.png/ff4444/ffffff",
    detail: "JP",
    price: 1364.2,
  },
];

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(database);
    }, 3000);
  });
};

export default obtenerProductos;
