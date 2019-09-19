import React from 'react';
import PropTypes from 'prop-types';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Header from './Header';
import Footer from './Footer';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}));


const Layout = ({children}) => (
  <>
  <div className={useStyles().root}></div>
  <CssBaseLine />
  <Header />
  {children}
  <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;