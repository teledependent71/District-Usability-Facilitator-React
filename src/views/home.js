import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>District Usability Facilitator</title>
        <meta property="og:title" content="District Usability Facilitator" />
      </Helmet>
    </div>
  )
}

export default Home
