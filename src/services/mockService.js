const database = [
  {
    id: 1,
    title: "Kurortnyy",
    category: "Russia",
    stock: 2,
    imgurl:
      "https://cdn.britannica.com/32/152132-050-E3740EC3/Mud-bath-spa-Yessentuki-Russia.jpg",
    detail: "RU",
    price: 1556.01,
    discount: 25,
  },
  {
    id: 2,
    title: "Stockholm",
    category: "Sweden",
    stock: 6,
    imgurl: "https://peakvisor.com/photo/SD/Stockholm-County-Sweden.jpg",
    detail: "SE",
    price: 1386.07,
  },
  {
    id: 3,
    title: "Rublëvo",
    category: "Russia",
    stock: 3,
    imgurl:
      "https://q-xx.bstatic.com/xdata/images/hotel/max1000/82232117.jpg?k=da13d50665a0a113e995cc361bd8f96e43f132d1d4760d65a50fcdee5a462e19",
    detail: "RU",
    price: 853.39,
  },
  {
    id: 4,
    title: "Grazhdanka",
    category: "Sweden",
    stock: 10,
    imgurl:
      "https://www.planetware.com/wpimages/2020/02/sweden-in-pictures-beautiful-places-to-photograph.jpg",
    detail: "SE",
    price: 586.08,
    discount: 35,
  },
  {
    id: 5,
    title: "Néa Pélla",
    category: "Greece",
    stock: 2,
    imgurl:
      "https://handluggageonly.co.uk/wp-content/uploads/2015/05/Hand-Luggage-Only-7.jpg",
    detail: "GR",
    price: 1660.25,
  },
  {
    id: 6,
    title: "Vicente Guerrero",
    category: "Mexico",
    stock: 7,
    imgurl:
      "https://static01.nyt.com/images/2022/11/26/travel/15-36hours-mexicocity-1/15-36hours-mexicocity-1-mediumSquareAt3X-v3.jpg",
    detail: "MX",
    price: 2619.54,
  },
];

const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* reject("no hay items"); */
      resolve(database);
    }, 1000);
  });
};

const getCity = (idURL) => {
  return new Promise((resolve, reject) => {
    const reqItem = database.find((item) => {
      return item.id === parseInt(idURL);
    });

    setTimeout(() => {
      if (reqItem) resolve(reqItem);
      else reject("No se encontró el producto");
    }, 1000);
  });
};

const getCityByCategory = (categoryURL) => {
  return new Promise((resolve, reject) => {
    let reqItems = database.filter((item) => item.category === categoryURL);

    setTimeout(() => {
      resolve(reqItems);
    }, 2000);
  });
};

export default obtenerProductos;

export { getCity, getCityByCategory };
