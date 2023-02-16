import { useLocation, useSearchParams } from "react-router-dom";

function Login() {
  return (
    <>
      <h1>Login</h1>
      {console.log(useLocation.name)}
    </>
  );
}
export default Login;
