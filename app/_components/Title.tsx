export function MainTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-semibold py-[2.2rem] border-b-1 border-gray-600">{children}</h1>
  );
}

export function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-3xl font-medium py-[2.2rem]">{children}</h3>;
}
