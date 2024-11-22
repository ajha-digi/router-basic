import {Link} from "react-router-dom";

function Home() {
  return (
    <div>Home <Link to="/about">About</Link></div>
  )
}

export default Home