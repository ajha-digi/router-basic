import {useParams} from "react-router-dom";

function Blog() {
    const {id} = useParams();
    
  return (
    <div>Blog -{id}</div>
  )
}

export default Blog