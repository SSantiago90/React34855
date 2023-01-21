import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
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
  // obtener todos los "documentos"  de Firestore
  // 1-> una referencia a nuestra colección (products)
  const productsRef = collection(db, "products");
  // 2-> obtenemos todos los docs de "products" (getDocs)
  const snapshot = await getDocs(productsRef);

  /*  console.log("---->", snapshot.docs[0].id) */
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

export default db;
