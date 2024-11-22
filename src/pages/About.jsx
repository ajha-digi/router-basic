import {useNavigate} from "react-router-dom";


function About() {
    const naviagte = useNavigate();
    const handleClick = ()=> {
        naviagte('/contact')
    }
  return (
    <div>About
        <button onClick={handleClick}>Go to contact us Page</button>
    </div>
  )
}

export default About