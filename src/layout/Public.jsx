import { Outlet } from "react-router-dom"

function Public() {
  return (
    <div>
      <h3>Public</h3>
      <Outlet />
    </div>
  )
}

export default Public