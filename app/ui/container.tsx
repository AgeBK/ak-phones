import { ContainerProps } from "@/app/lib/definitions";
import { fetchPhones } from "@/app/lib/data";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";
import styles from "@/app/css/Container.module.css";

export default async function Container({ children }: ContainerProps) {
  const data = await fetchPhones();

  return (
    <div className={styles.container}>
      <Header data={data} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
