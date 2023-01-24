import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  addDoc,
  Firestore,
  writeBatch,
} from "firebase/firestore"; // SDK -> Soft Dev Kit

const firebaseConfig = {
  apiKey: "AIzaSyCrPcF49Pod_iwrVTF-sV_pzRuc6VUX0Wo",
  authDomain: "react34855.firebaseapp.com",
  projectId: "react34855",
  storageBucket: "react34855.appspot.com",
  messagingSenderId: "288433679043",
  appId: "1:288433679043:web:bc2b2f07556e2d67429076",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function obtenerProductos() {
  const productsRef = collection(db, "products");
  const q = query(productsRef, orderBy("index"));
  const snapshot = await getDocs(q);

  const cities = snapshot.docs.map((elem) => {
    let city = elem.data();
    city.id = elem.id;
    return city;
  });

  /*   const cities = snapshot.docs.map((elem) => ({...elem.data(), id: elem.id}) );
   */
  return cities;
}

export async function getCity(idUrl) {
  const productsRef = collection(db, "products");
  const docRef = doc(productsRef, idUrl);
  /* getDoc() */
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };
}

export async function getCityByCategory(categoryUrl) {
  const productsRef = collection(db, "products");

  // Create a query against the collection.
  const q = query(productsRef, where("category", "==", categoryUrl));

  const snapshot = await getDocs(q);

  const cities = snapshot.docs.map((elem) => {
    let city = elem.data();
    city.id = elem.id;
    return city;
  });

  return cities;
}

export async function getCityByKeyowrd(keyword) {
  const productsRef = collection(db, "products");

  // Coincidencia 100%
  const q = query(productsRef, where("title", "==", keyword));

  const snapshot = await getDocs(q);

  const cities = snapshot.docs.map((elem) => {
    let city = elem.data();
    city.id = elem.id;
    return city;
  });

  return cities;
}

export async function createOrder(order) {
  const orderRef = collection(db, "order");

  /*  addDoc(orderRef, order).then((respuesta) => {
    console.log(respuesta);
    console.log(respuesta.id);
  }); */

  // 1- obtener de Firebase todos los productos del carrito
  // 2- Controlar que ningun producto excede el stock
  // 3- Update/actualizar todos los productos en Firebase
  // 4- Creamos la orden

  let respuesta = await addDoc(orderRef, order);
  console.log(respuesta, respuesta.id);

  return respuesta.id;
}

export async function exportArray() {
  const products = [
    {
      id: 1,
      title: "Kurortnyy",
      category: "Russia",
      stock: 5,
      imgurl:
        "https://cdn.britannica.com/32/152132-050-E3740EC3/Mud-bath-spa-Yessentuki-Russia.jpg",
      detail: "RU",
      price: 1556.01,
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

  // for ... of
  // products.forEach( item => )
  for (let item of products) {
    item.index = item.id;
    delete item.id;
    addDoc(collection(db, "products"), item).then((respuesta) =>
      console.log("item creado: ", respuesta.id)
    );
  }
}

export async function exportArrayWithBatch() {
  const products = [
    {
      id: 1,
      title: "Kurortnyy",
      category: "Russia",
      stock: 5,
      imgurl:
        "https://cdn.britannica.com/32/152132-050-E3740EC3/Mud-bath-spa-Yessentuki-Russia.jpg",
      detail: "RU",
      price: 1556.01,
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
  const batch = writeBatch(db);

  for (let item of products) {
    item.index = item.id;
    delete item.id;

    const collectionRef = collection(db, "products");
    const newDoc = doc(collectionRef);

    batch.set(newDoc, item);
  }

  batch.commit().then(() => console.log("batch listo"));
}

export default db;
