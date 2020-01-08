import Header from './Header';
import Footer from './Footer';

export default ({ children }) => (
  <div>
    <Header />
    <main>{ children }</main>
    <Footer />
  </div>
)
