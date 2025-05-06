// pages/teacher/index.tsx
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';
export default function TeacherHome() {
  const router = useRouter();
  return(<div style={{padding:'2rem'}}><h1>教师端主页</h1>
    <button onClick={()=>{signOut(auth);router.replace('/login');}}>退出登录</button>
    <p><a href="/teacher/courses">管理课程</a></p>
    <p><a href="/teacher/dashboard">数据统计</a></p></div>); }