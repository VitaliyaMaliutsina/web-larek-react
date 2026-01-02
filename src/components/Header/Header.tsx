import styles from "./header.module.scss";

type Props = {};
export const Header = (props: Props) => {
  const {} = props;

  return (
    <header className={styles.header}>
      <div className={styles.wrapperContent}>
        <a href="/">
          <img src="./logo.svg" alt="" className={styles.logo} />
        </a>

        <button className={styles.basket}>
          <span className={styles.basketCount}>0</span>
        </button>
      </div>
    </header>
  );
};
