import Head from "next/head"
import Image from "next/image"

import copy from "data/copy.json"
import styles from "styles/Home.module.scss"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{copy["company-name"]}</title>
        <meta name="description" content={copy["headline"]} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero_section}>
          <h1 className={styles.title}>{copy["headline"]} </h1>

          <p className={styles.description}>{copy["description"]}</p>

          <a className={styles.cta} href="#form">
            {copy["cta"]}
          </a>
        </section>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Criação de Sites &rarr;</h2>
            <p>Tenha seu pedacinho da Web - criamos sites e hospedamos.</p>
          </a>
        </div>

        <section className={styles.form} id="form">
          <form></form>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
