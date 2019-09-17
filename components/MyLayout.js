import Header from './Header';
import Footer from './Footer';
import firebase from '../pages/Firebase';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div id="wrapper" style={layoutStyle}>
    <Header />
    <main>
    	{props.children}
    </main>
    <Footer />
  </div>
);

export default Layout;