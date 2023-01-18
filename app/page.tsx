import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Sentence from "@/components/Sentence";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl text-center">Dutch Trainer</h1>
      <Sentence />
      <Sentence />
      <Sentence />
      <Sentence />
      <Sentence />
    </main>
  );
}
