import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <h1>Nav</h1>
      <Link className="mx-2" to="/">
        <img
          className="img-thumbnail border-0 m-auto"
          src="logo.png"
          alt="Logo"
        ></img>
      </Link>
      <Link to="">Home</Link>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Navigation;
