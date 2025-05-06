// pages/student/index.tsx
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';
export default function StudentHome() {
  const router = useRouter();
  return(<div style={{padding:'2rem'}}><h1>学生端主页</h1>
    <button onClick={()=>{signOut(auth);router.replace('/login');}}>退出登录</button>
    <p><a href="/video">视频回放</a></p>
    <p><a href="/bookings">我的预约</a></p></div>); }