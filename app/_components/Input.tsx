export const InputTitle = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Input = ({ title, placeholder }: { title: string; placeholder: string }) => {
  return (
    <div className="bg-[#2b2c31] rounded-lg">
      <InputTitle>{title}</InputTitle>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
