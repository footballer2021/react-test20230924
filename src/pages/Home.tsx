import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
        <h1>Hello World!</h1>
        <div>
            <Link to="/posts">Posts</Link>
        </div>
        <div>
            <Link to="/">Home</Link>
        </div>
        <Outlet />
    </>
  )
}

export default Home