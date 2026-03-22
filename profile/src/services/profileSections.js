import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

export async function getProfileSections() {
  const snap = await getDocs(collection(db, "profileSections"));

  const sections = snap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const desiredOrder = ["tcs", "capgemini", "msc", "bsc", "early"];

  sections.sort(
    (a, b) => desiredOrder.indexOf(a.id) - desiredOrder.indexOf(b.id)
  );

  return sections;
}