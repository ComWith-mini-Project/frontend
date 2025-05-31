export function MainTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-[3rem]">
      <h1 className="text-[2.4rem] font-[700] py-[3.1rem] border-b-1 border-gray-700">
        {children}
      </h1>
    </div>
  );
}

export function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[1.8rem] font-[600]">{children}</h3>;
}
