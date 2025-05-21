export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`${className} bg-[#2b2c31] px-[2.6rem] rounded-lg`}>{children}</section>
  );
};
