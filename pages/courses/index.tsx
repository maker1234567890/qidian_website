// pages/courses/index.tsx
import { useState,useEffect } from 'react';
import Link from 'next/link';
import { db } from '../../firebase';
import { collection,getDocs } from 'firebase/firestore';
export default function CourseList(){
  const [courses,setCourses]=useState<any[]>([]);
  useEffect(()=>{(async()=>{const snap=await getDocs(collection(db,'courses'));setCourses(snap.docs.map(d=>({id:d.id,...d.data()})));})();},[]);
  return(<div style={{padding:'2rem'}}><h1>课程列表</h1><ul>{
    courses.map(c=><li key={c.id}><Link href={`/courses/${c.id}`}>{c.title}</Link></li>)
  }</ul></div>);}