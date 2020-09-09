import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const TopPage = () => {
  return (
    <div className="container">
      <Head>
        <title>This is Toppage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Link href="/benefits" className="card">
          <a>React.jsにNext.jsを追加するメリット</a>
          </Link>
        </div>
        <div>
          <Link href="/Env" className="card">
          <a>環境構築方法</a>
          </Link>
        </div>
        <div>
          <Link href="/Dev" className="card">
          <a>Dev画面</a>
          </Link>
        </div>
      </main>

    </div>
  )
}

export default TopPage
