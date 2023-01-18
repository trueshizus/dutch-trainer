import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Sentence from "@/components/Sentence";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Dutch Trainer</h1>
      <Sentence />
    </main>
  );
}
