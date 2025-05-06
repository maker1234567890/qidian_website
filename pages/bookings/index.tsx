// pages/bookings/index.tsx
import { useState,useEffect } from 'react';
import { db,auth } from '../../firebase';
import { collection,query,where,getDocs } from 'firebase/firestore';
export default function Bookings(){
  const [list,setList]=useState<any[]>([]);
  useEffect(()=>{
    if(!auth.currentUser) return;
    (async()=>{
      const q=query(collection(db,'bookings'),where('userId','==',auth.currentUser.uid));
      const snap=await getDocs(q);
      setList(snap.docs.map(d=>({id:d.id,...d.data()})));
    })();
  },[]);
  return(<div style={{padding:'2rem'}}><h1>我的预约</h1><ul>{
    list.map(b=><li key={b.id}>{b.courseId} @ {b.createdAt.toDate().toLocaleString()}</li>)
  }</ul></div>);}