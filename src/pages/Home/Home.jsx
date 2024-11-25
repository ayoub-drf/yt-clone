import { useState } from "react"
import Feed from "../../components/Feed/Feed"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Home.css"
import PropTypes from "prop-types"


const Home = ( {sidebar} ) => {
  const [category, setCategory] = useState(0)
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} setCategory={setCategory} />
      </div>
    </>
  )
}

Home.propTypes = {
  sidebar: PropTypes.bool,
}

export default Home