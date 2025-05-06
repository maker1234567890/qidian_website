// pages/teacher/courses/index.tsx
import { useState,useEffect } from 'react';
import Link from 'next/link';
import { db,auth } from '../../../firebase';
import { collection,query,where,getDocs } from 'firebase/firestore';
export default function TeacherCourses(){
  const [courses,setCourses]=useState<any[]>([]);
  useEffect(()=>{if(!auth.currentUser) return;(async()=>{const q=query(collection(db,'courses'),where('createdBy','==',auth.currentUser.uid));const snap=await getDocs(q);setCourses(snap.docs.map(d=>({id:d.id,...d.data()})));})();},[]);
  return(<div style={{padding:'2rem'}}><h1>我的课程</h1><Link href="/teacher/courses/create"><a>创建课程</a></Link><ul>{
    courses.map(c=><li key={c.id}><Link href={`/courses/${c.id}`}>{c.title}</Link></li>)
  }</ul></div>);}