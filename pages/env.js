import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>環境構築方法</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="grid">
        <Link href="/toppage" className="card">
          <a>Back to Top</a>
        </Link>
      </div>
      <div>
        <ul>
          <li>mkdir next</li>
          <li>cd next</li>
          <li>npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"</li>
          <li>cd nextjs-blog</li>
          <li>npm install --save-dev @types/react @types/node</li>
          <li>npm install typescript react react-dom next</li>
          <li>tsc --init</li>
          <li>npm run dev</li>
        </ul>

      </div>

      </main>

    </div>
  )
}
