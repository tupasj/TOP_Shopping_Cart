import { firebaseApp } from "../FirebaseServices/firebaseConfig";
import { getDatabase, ref, set } from "firebase/database";
import { removeSpaces } from "../utils/stringUtils";

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);

const userWriteOrder = (user, orderArray) => {
  let formattedName = removeSpaces(user.displayName);
  const namePath = `users/${formattedName}/userID`;
  const nameFullRef = ref(database, namePath);
  set(nameFullRef, user.uid);
  const orderPath = `users/${formattedName}/orders`;
  const orderFullRef = ref(database, orderPath);
  set(orderFullRef, orderArray);
};

export { database, userWriteOrder };
