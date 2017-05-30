import React, { PropTypes } from "react"

import Card from "../Card"

import styles from "./index.css"

const PagesList = ({ pages }) => {
  return (
    <div className={ styles['project-tile-container'] }>
      {
      pages.length
      ? (
        <ul className={ styles.list }>
          {
          pages.map((page) => (
            <li key={ page.title }><Card { ...page } /></li>
          ))
        }
        </ul>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
