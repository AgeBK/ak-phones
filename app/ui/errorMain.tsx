"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Img from "@/app/ui/image";
import styles from "@/app/css/Error.module.css";

export default function ErrorMain({ message }: { message: string }) {
  const pathname = usePathname();
  console.log(`ErrorMain - ${message}`);

  // TODO: needs styling
  // To create error replace samsung filter in appData with this: "samsung": "['Samsung Galaxy A, Samsung Galaxy S, Samsung Galaxy Z']",
  // then goto http://localhost:3000/samsung

  return (
    <section className={styles.container}>
      <Img
        src={"error/sad.webp"}
        alt="An error has occured"
        w={100}
        h={100}
        l="eager"
      />
      <h2 className={styles.hdr}>
        <strong>Whoops!!</strong>
        <div>{message}</div>
      </h2>
      <div>Sorry for the inconvenience</div>
      <Link href={pathname} className={styles.navigate}>
        Reload page
      </Link>
      <Link href="/" className={styles.navigate}>
        Go home
      </Link>
    </section>
  );
}
