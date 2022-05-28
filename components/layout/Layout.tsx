import React, { ReactNode } from 'react'
import Head from "next/head"

import styles from './Layout.module.scss'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

interface MenuItem {
  name: string
  linkTo: string
}

type MenuItems = MenuItem[]

const menuItems: MenuItems = [
  { name: "Home", linkTo: "/" },
  { name: "Events", linkTo: "/events" },
  { name: "Users", linkTo: "/users" },
]

const Layout = ({ children }: LayoutProps) => (
  <div className={styles.pageWrapper}>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <div className={styles.search}></div>
      <nav>
        <ul>
        </ul>
      </nav>
      <div className={styles.user}></div>
    </header>

    <div className={styles.main}>
      <section className={styles.left}></section>
      <section className={styles.center}>{children}</section>
      <section className={styles.right}></section>
    </div>
  </div>
);

export default Layout

