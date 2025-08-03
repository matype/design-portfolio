import Head from "next/head"
import Link from "next/link"
import styles from "/styles/layout.module.css"

const name = "Masaaki Morishita"
export const siteTitle = "VUG by Masaaki Morishita"
export const domain = "localhost:3000"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Morishitter (Masaaki Morishita) のウェブサイト" />
        <meta property="og:image" content={`${domain}/og-image.png`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1 className={home ? styles.homeTitle : styles.detailTitle}>
            <Link href="/" className={styles.titleLink}>
              {name}
            </Link>
          </h1>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link href={"/about"}>About / Contact</Link>
            </li>
          </ul>
        </div>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600.54 172.69">
            <path d="M95.7,74.72L132.54,9.72l58.64-.21L95.7,163.83,0,9.51l54.54,.21,41.16,65Z" />
            <path d="M287.12,63.02c0,13.1,11.1,23.98,24.2,23.98s23.98-10.88,23.98-23.98V9.41h55.51V74.02c0,43.97-35.75,79.49-79.49,79.49s-79.71-35.53-79.71-79.49V9.41h55.51V63.02Z" />
            <path d="M434.91,75.16c0-39.9,32.24-72.14,72.14-72.14,15.72,0,29.62,4.84,41.31,13.3L564.68,0l35.87,35.87-21.36,21.36v43.12c0,39.9-32.44,72.34-72.14,72.34h-5.04v-25.59c-36.88-2.42-67.1-33.25-67.1-71.94Zm50.38,0c0,12.09,9.67,21.76,21.76,21.76,12.09,0,21.76-9.67,21.76-21.76s-9.67-21.76-21.76-21.76-21.76,9.67-21.76,21.76Z" />
          </svg>
        </div>
        <small className={styles.copy}>by Masaaki Morishita</small>
      </footer>
    </div>
  )
}
