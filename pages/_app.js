// import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from '../store/dev'
import styles from "./_index.module.scss"
import Head from 'next/head'
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', () => NProgress.inc())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
// function MyApp({ Component, pageProps }: AppProps) {
const MyApp = ({ Component, pageProps }) => {
  return (
      <Provider store={store}>
        <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
        <div className={styles.bg_color}>
          <Component {...pageProps} />
        </div>
      </Provider>
  )
}
export default MyApp
