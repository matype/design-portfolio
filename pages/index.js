import Head from "next/head"
import Layout, { siteTitle } from "/components/layout"
import GalleryList from "/components/galleryList"
import { getSortedGalleriesData } from "/lib/gallery"

import styles from "/styles/workIndex.module.css"

export async function getStaticProps() {
  const allGalleriesData = getSortedGalleriesData()
  return {
    props: {
      allGalleriesData,
    },
  }
}

export default function WorkHome({ allGalleriesData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p className={styles.caution}>
        ポートフォリオをご覧いただきありがとうございます。仕事では GUI
        を作ることが多いですが、アーカイブと相性が良くないのでグラフィックが多めです。
        ビジュアルのアウトプットからはわからないことも多々あるはずなので、よろしければ気軽にご連絡ください。
      </p>
      <GalleryList galleries={allGalleriesData} />
    </Layout>
  )
}
