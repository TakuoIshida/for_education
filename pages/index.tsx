import Head from 'next/head'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { NextPage } from 'next'

const TopPage: NextPage = () => {
  
  return (
    <div id="index">
      <Head>
        <title>This is Toppage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Button variant="contained">
          <Link href="/dev/dev" as ="/dev/dev">
            <a>Dev</a>
          </Link>
      </Button>
    
      <Button variant="contained">
        <Link href="/mypage" as ="/mypage">
            <a>mypage</a>
        </Link>
      </Button>
      </main>
    </div>
  )
}

export default TopPage
