import Link from 'next/link';
export default function VideoList() {
  const videos = [{ id: '1', title: '课堂视频1' }];
  return (<div style={{padding:'2rem'}}><h1>视频回放</h1><ul>{
    videos.map(v=><li key={v.id}><Link href={`/video/${v.id}`}>{v.title}</Link></li>)
  }</ul></div>);
}