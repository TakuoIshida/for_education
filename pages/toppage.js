import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
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
          <Link href="/env" className="card">
          <a>環境構築方法</a>
          </Link>
        </div>
        <div>
          <Link href="/dev" className="card">
          <a>Dev画面</a>
          </Link>
        </div>
        <div>
          <Link href="/readme" className="card">
          <a>read me!</a>
          </Link>
        </div>
      </main>

    </div>
  )
}
