import styles from './Button.module.css';

const Button = ({ onClick, children, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
