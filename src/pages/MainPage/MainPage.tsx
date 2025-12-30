import styles from "./mainPage.module.scss";

import { Gallery } from "../../components/Gallery/Gallery.tsx";

type Props = {};
export const MainPage = (props: Props) => {
  const {} = props;

  return (
    <main className={styles.container}>
      <Gallery />
    </main>
  );
};
