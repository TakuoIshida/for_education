import Head from 'next/head'
import Link from 'next/link'


import React from 'react'

const Dev = () => {
  return (
    <div className="container">
      <Head>
        <title>Dev画面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="grid">
        <Link href="/TopPage">
          <a>Back to Top</a>
        </Link>
      </div>

      </main>

    </div>
  )
}

export default Dev
