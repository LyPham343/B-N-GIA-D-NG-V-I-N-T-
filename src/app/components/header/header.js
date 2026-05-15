import Image from "next/image";
import styles from "./header.module.css";

export default function Home() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>Trang Chủ</li>
          <li>Sản Phẩm</li>
          <li>Liên Hệ</li>
        </ul>
      </nav>

      <div>
        <Image src="/next.svg" alt="Logo" width={100} height={24} />
      </div>
    </div>
  );
}