// pages/teacher/dashboard.tsx
import dynamic from 'next/dynamic';
const ChartPanel = dynamic(() => import('../../components/ChartPanel'), { ssr: false });
export default function Dashboard(){
  const data={labels:['Mon','Tue','Wed'],datasets:[{label:'活跃学生',data:[10,15,7]}]};
  return(<div style={{padding:'2rem'}}><h1>数据统计</h1><ChartPanel data={data} options={{}}/></div>);}