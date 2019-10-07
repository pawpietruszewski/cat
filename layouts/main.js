import {Helmet} from "react-helmet";
import Head from 'next/head'
import Nav from '../components/Nav'
// import Footer from 'components/Footer'

export default ({ children, title = 'This is the default title' }) => (
  <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>{ title }</title>
    </Helmet>
    <header>
      <Nav />
    </header>

    <main>
      { children }
    </main>
  </>
)
