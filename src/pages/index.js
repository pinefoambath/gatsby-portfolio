import React from "react";
import { Link } from "gatsby";

const Index = () => {
  return (
    <div className="m-4">
      <h1>Well hello there 🍹</h1>
      <Link to="/about">About me</Link>
    </div>
  )
}

export default Index;