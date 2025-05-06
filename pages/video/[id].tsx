import { useRouter } from 'next/router';
export default function VideoDetail() {
  const { query } = useRouter();
  return (<div style={{padding:'2rem'}}><h1>视频回放 - {query.id}</h1>
    <video controls style={{width:'100%'}} src="" />
  </div>);
}