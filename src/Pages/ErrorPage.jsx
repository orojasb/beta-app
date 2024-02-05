import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{marginTop:"15vh", textAlign: 'center'}}>
      <img src='/404.png' alt="Error Image" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
      <i>{error ? (error.statusText || error.message) : 'NOT FOUND'}</i>
      <i>{error ? error.data : ''}</i>
      </p>
    </div>
  );
}