import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import Content from "/contents/about.mdx"

import styles from "../styles/about.module.css"

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - {siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.markdown}>
          <Content />
        </div>
      </div>
    </Layout>
  )
}