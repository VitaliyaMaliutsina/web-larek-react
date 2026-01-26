import styles from "./footer.module.scss";

export const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>App Web larek - {date}</h2>
    </footer>
  );
};
