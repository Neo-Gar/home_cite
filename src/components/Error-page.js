import {Link, useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page-wrap">
        <div id="error-page">
            <h1>Упс!</h1>
            <p>Произошла непредвиденная ошибка</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">На главную</Link>
        </div>
    </div>
  );
}