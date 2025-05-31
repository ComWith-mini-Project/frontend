export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <section className={`${className} bg-[#2b2c31] rounded-lg`}>{children}</section>;
};

export const Contents = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${className} p-[4rem] pb-[5.4rem]`}>{children}</div>;
};
