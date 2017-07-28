import React, { PropTypes } from "react"
import { Link } from "phenomic"


import styles from "./index.css"

const Card = ({ __url, title, image}) => {
  const style = {backgroundImage: 'url(' + image + ')'};

  return (
    <div className={ styles['project-tile'] }>
      <div className={ styles['tile-space-holder'] }></div>
      <Link to={ __url } className={ styles.content } style={style}>
        <div className={ styles['project-overlay'] }>
            <div className={ styles['project-title'] }>{ title }</div>
        </div>
      </Link>
    </div>
  )
}

Card.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default Card
