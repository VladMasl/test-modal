import styles from './styles.module.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, ...rest }: AppProps) {

  return(
      <div className={styles.root}>
      <Component {...rest.pageProps} />
          <div id="portal"></div>
      </div>)
}
