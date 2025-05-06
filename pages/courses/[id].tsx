// pages/courses/[id].tsx
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
import { db,auth } from '../../firebase';
import { doc,getDoc,collection,addDoc} from 'firebase/firestore';
export default function CourseDetail(){
  const {query, push}=useRouter();const [c,setC]=useState<any>(null);
  useEffect(()=>{if(!query.id) return;(async()=>{const snap=await getDoc(doc(db,'courses',query.id as string));if(snap.exists()) setC({id:snap.id,...snap.data()});})();},[query.id]);
  if(!c) return <div>Loading...</div>;
  return(<div style={{padding:'2rem'}}><h1>{c.title}</h1><p>{c.description}</p>
    <button onClick={async()=>{if(!auth.currentUser) return push('/login');await addDoc(collection(db,'bookings'),{courseId:query.id,userId:auth.currentUser.uid,createdAt:new Date()});push('/bookings');}}>预约课程</button></div>); }