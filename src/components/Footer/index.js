import React from 'react'
import { Link } from 'phenomic'
import classNames from 'classnames'

import styles from './index.css'

const Footer = (props) => {
  const menuDisabled = props.path === '/';

  return (
  <footer className={ styles.footer }>
    <nav className={styles['nav-bar']}>
    </nav>
    <Link href="http://constellates.com"
          className={classNames(styles['menu-link'], {[styles.disabled]: menuDisabled})}
          to={'/'}></Link>
  </footer>
)}

Footer.propTypes = {
  path: React.PropTypes.string
}

export default Footer
