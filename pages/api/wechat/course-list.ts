import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: "qidian-933c5",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default async function handler(req:any, res:any) {
  const snap = await getDocs(collection(db, 'courses'));
  const courses = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.status(200).json({ courses });
}