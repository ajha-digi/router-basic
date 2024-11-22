
import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function Private() {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem("isAuthenticated") === "false"){
      navigate('/')
    }
  },[]);

  return (
    <div>
      <h3>Private</h3>
      <Outlet />
    </div>
  )
}

export default Private