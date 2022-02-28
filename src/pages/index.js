import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout/Layout";

const Index = () => {
  return (
    <Layout>
    <div>
      <h1>Well hello there 🍹</h1>
      <Link to="/about">About me</Link>
    </div>
    </Layout>
  )
}

export default Index;