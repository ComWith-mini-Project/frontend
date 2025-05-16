const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <section className={`${className} bg-[#2b2c31] px-[2.4rem] rounded-lg`}>{children}</section>
  );
};

export default Container;
