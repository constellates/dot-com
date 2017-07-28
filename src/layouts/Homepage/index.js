import React, {PropTypes} from "react"

import Page from "../Page"
import Cards from '../../components/Cards'
import enhanceCollection from "phenomic/lib/enhance-collection"

const Homepage = (props, { collection }) => {

  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  });

  return (
    <Page { ...props }>
      <Cards pages={ latestPosts } />
    </Page>
  )
}

Homepage.propTypes = {
  numberOfPosts: PropTypes.number,
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
