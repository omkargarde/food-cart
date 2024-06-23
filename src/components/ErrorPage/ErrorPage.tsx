import { isRouteErrorResponse, useRouteError } from "react-router";

export const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <>
      <h1>Error Page Bitch!!!</h1>
      <p>{errorMessage}</p>
    </>
  );
};
