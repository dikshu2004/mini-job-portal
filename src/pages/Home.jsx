import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Mini Job Portal</h1>
      <Link to="/jobs">View Jobs</Link>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Home;