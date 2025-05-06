import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
export default function ChartPanel({ data, options }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    if (canvasRef.current) new Chart(canvasRef.current, { type: 'line', data, options });
  }, [data, options]);
  return <canvas ref={canvasRef} />;
}