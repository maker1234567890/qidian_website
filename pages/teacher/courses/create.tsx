// pages/teacher/courses/create.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { db,auth } from '../../../firebase';
import { collection,addDoc } from 'firebase/firestore';
export default function CreateCourse(){
  const {push}=useRouter();const [title,setTitle]=useState('');const [description,setDescription]=useState('');
  return(<div style={{padding:'2rem'}}><h1>创建课程</h1>
    <input placeholder="标题" value={title} onChange={e=>setTitle(e.target.value)}/>
    <textarea placeholder="描述" value={description} onChange={e=>setDescription(e.target.value)}/>
    <button onClick={async()=>{if(!auth.currentUser) return push('/login');await addDoc(collection(db,'courses'),{title,description,createdBy:auth.currentUser.uid,createdAt:new Date()});push('/teacher/courses');}}>提交</button>
  </div>);}