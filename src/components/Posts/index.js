/* eslint-disable no-console */
import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"

import PagesList from "../../components/PagesList"

import styles from "./index.css"


const LatestPosts = (props, { collection }) => {

  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  });

  return (
    <div>
      <h2 className={ styles.latestPosts }>
        { "Posts" }
      </h2>
      <PagesList pages={ latestPosts } />
    </div>
  )
}

LatestPosts.propTypes = {
  numberOfPosts: PropTypes.number,
}

LatestPosts.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default LatestPosts
