import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { DatePicker } from "antd"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    hey.
    <DatePicker />
  </Layout>
)

export default IndexPage
