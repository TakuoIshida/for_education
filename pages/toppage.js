import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';

const TopPage = () => {
  const useStyles = makeStyles(() =>
  createStyles({
    container: {
      textAlign: 'center',
    }
  }),
);
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>This is Toppage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.container}>
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
      </main>

    </div>
  )
}

export default TopPage
