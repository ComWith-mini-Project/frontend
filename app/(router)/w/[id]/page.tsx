import Link from 'next/link';

export default async function Web({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <div>
      <Link
        href={'/career/profile'}
        className="text-blue-500 hover:underline mb-4"
        style={{ fontSize: '3rem' }}
        title="Go back to profile page"
        aria-label="Go back to profile page"
        tabIndex={0}
        role="link"
        rel="noopener"
      >
        go back
      </Link>
      <h1 style={{ fontSize: '3rem' }}>Web Page {id}</h1>
      <p>This is the web page content.</p>
    </div>
  );
}
