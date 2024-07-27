import Image from "next/image";
import styles from "./page.module.css";
import { Auth } from "@/models";

export default function Home() {
  return (
    <main className={styles.main}>
        <Auth/>
    </main>
  );
}
