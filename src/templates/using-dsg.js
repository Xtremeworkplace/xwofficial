import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UsingDSG = () => (
  <Layout>
    <Seo title="Using DSG" />
    <p>This is Wrong Page ! Back to Home</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingDSG
