import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image";

import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image width={90} height={50} src="/logo.svg" alt="Logo" />
      </Link>
    </nav>
  );
}
