import Head from 'next/head'
import Nav from '../components/Nav'
// import Footer from 'components/Footer'

export default ({ children, title = 'This is the default title' }) => (
  <>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>
      { children }
    </main>
  </>
)
