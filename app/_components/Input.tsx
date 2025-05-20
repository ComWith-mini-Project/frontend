import styles from 'styles/component.module.css';

export const InputTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-[1.4rem] min-w-[18rem] text-gray-400">{children}</div>;
};

const Input = ({ title, placeholder }: { title: string; placeholder: string }) => {
  return (
    <div className="flex mt-11">
      <InputTitle>{title}</InputTitle>
      <input className={styles.career_input} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
