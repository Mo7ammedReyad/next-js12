import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC07Gs8L5vxlUmC561PKbxthewA1mrxYDk",
  authDomain: "zylos-test.firebaseapp.com",
  databaseURL: "https://zylos-test-default-rtdb.firebaseio.com",
  projectId: "zylos-test",
  storageBucket: "zylos-test.firebasestorage.app",
  messagingSenderId: "553027007913",
  appId: "1:553027007913:web:2daa37ddf2b2c7c20b00b8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);