"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./navbar.module.css";
import SignIn from "./sign-in";
import { onAuthStateChangedHelper } from "../firebase/firebase";
import { User } from "firebase/auth";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });

    // Cleanups subscription on unmount
    return () => unsubscribe();
  });

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image width={90} height={50} src="/logo.svg" alt="Logo" />
      </Link>
      <SignIn user={user} />
    </nav>
  );
}
