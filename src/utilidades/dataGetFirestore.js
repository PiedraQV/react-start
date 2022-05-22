import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, setDoc, doc, addDoc} from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyCE5a_Wz_dUsNZON8y2HtHzl7myeFWsjo0",
  authDomain: "react-fractal-store.firebaseapp.com",
  projectId: "react-fractal-store",
  storageBucket: "react-fractal-store.appspot.com",
  messagingSenderId: "563553381150",
  appId: "1:563553381150:web:51f2c44c9aeaa4e552770f",
  measurementId: "G-ZZ8R68QWHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);  

export default firestoreDB;

export async function getAllItems() {

    const inventario = collection(firestoreDB, 'Merca');
    const fractaSt = await getDocs(inventario);

    return fractaSt.docs.map(doc => doc.data());
}