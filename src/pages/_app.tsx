import '../styles/global.css';
import 'katex/dist/katex.css';
import Footer from '../components/Footer';
import { Header } from '../components/Header';

export default ({ Component, pageProps }) => (
  <>
    <Header />
    <div style={{ minHeight: 'calc(100vh - 72px)' }}>
      <Component {...pageProps} />
    </div>
    <Footer />
  </>
);
