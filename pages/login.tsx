// pages/login.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../firebase';
import { signInWithPhoneNumber } from 'firebase/auth';
export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState('+86');
  const [code, setCode] = useState('');
  const [userType, setUserType] = useState<'student'|'teacher'|null>(null);
  const [confirmationResult, setConfirmationResult] = useState<any>(null);
  const [step, setStep] = useState<'select'|'verify'>('select');
  const sendCode = async (type:any) => {
    if(!phone) return alert('请输入手机号');
    setUserType(type);
    try {
      const res = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(res);
      setStep('verify');
    } catch(err:any){ alert('发送失败:'+err.message);}
  };
  const verifyCode = async () => {
    try{ await confirmationResult.confirm(code); router.push(`/${userType}`);}catch(err:any){alert('验证失败:'+err.message);}
  };
  return(<div style={{padding:'2rem',textAlign:'center'}}><h1>手机号登录</h1>{
    step==='select'?<>
      <input type="tel" value={phone} onChange={e=>setPhone(e.target.value)} style={{width:200}}/>
      <div><button onClick={()=>sendCode('student')}>学生登录</button>
      <button onClick={()=>sendCode('teacher')}>教师登录</button></div>
    </>:<>
      <p>验证码已发送至{phone}</p>
      <input type="text" value={code} onChange={e=>setCode(e.target.value)} style={{width:100}}/>
      <button onClick={verifyCode}>验证并登录</button>
    </>}
  <div id="recaptcha-container"></div></div>);
}