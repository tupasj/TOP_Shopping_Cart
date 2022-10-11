import { firebaseApp } from "../FirebaseServices/firebaseConfig";
import { getDatabase, ref, get, set } from "firebase/database";
import { auth } from "./firebaseAuth";
import { removeSpaces } from "../utils/stringUtils";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

const userWriteOrder = (user, orderArray) => {
  if (auth.currentUser) {
    let formattedName = removeSpaces(user.displayName);
    const namePath = `users/${formattedName}/userID`;
    const nameFullRef = ref(database, namePath);
    set(nameFullRef, user.uid);
    const orderPath = `users/${formattedName}/orders`;
    const orderFullRef = ref(database, orderPath);
    set(orderFullRef, orderArray);
  }
};

const readUserOrders = async () => {
  console.log("get database data");
  const user = auth.currentUser;
  const formattedName = removeSpaces(user.displayName);
  const orderPath = `users/${formattedName}/orders`;
  const orderFullRef = ref(database, orderPath);
  const snapshot = await get(orderFullRef);
  try {
    if (snapshot.exists()) {
      const userOrders = snapshot.val()
      return userOrders;
    } else {
      console.log("No data available");
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export { database, userWriteOrder, readUserOrders };
