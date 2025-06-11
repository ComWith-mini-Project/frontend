import { useRouter } from 'next/router';

export default function Web() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1 style={{ fontSize: '3rem' }}>Web Page {id}</h1>
      <p>This is the web page content.</p>
    </div>
  );
}
