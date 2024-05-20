'use client'

import Link from 'next/link';
import styles from './Header.module.css';
import Router from 'next/router';
import { usePathname } from 'next/navigation';


export default function Header() {
    const path = usePathname();
    console.log(path);

    return (
        <header className={styles.header}>
            <Link href="/">
                <h3 className={styles.title}>CinemaGuide</h3>
            </Link>
            <Link href="/">
                <p className={path == '/' ? styles.active : styles.item}>Главная</p>
            </Link>
            <Link href="/genres">
                <p className={styles.item}>Жанры</p>
            </Link>
            <form>
                <input type="text" placeholder="Поиск" className={styles.input} />
            </form>
            <p className={styles.item}>Войти</p>
        </header>
    )
}