
import ErrorPage from "../components/Error/errorPage";
import Header from '../components/Header/header'

//import { isRouteErrorResponse } from "react-router-dom";

function Error (){
  return (
<>
<Header/>
<ErrorPage/>
</>


  )}

  export default Error ;
/*

function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!La page que vous demandez n'existe pas. </h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}
 
export default ErrorBoundary */