import "reflect-metadata";
import React from "react";
import { Loading } from "template/component/Loading";
import { AppModel } from "App.model";
import { Route, Routes } from "react-router-dom";
import Layout from "template/component/Layout";

const HomePage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "HomePage" */
      "app/components/Home"
    )
);

const NotFoundPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "NotFoundPage" */
      "app/components/NotFound"
    )
);

const LoginPage = React.lazy(
  () =>
    import(
      /* webpackChunkName: "LoginPage" */
      "app/pages/login"
    )
);

const App: React.FunctionComponent = () => {
  const model = new AppModel();

  return (
    <>
      <h1>{model.greeting}</h1>
      <React.Suspense fallback={<Loading isLoading={true} />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route element={<NotFoundPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </React.Suspense>
    </>
  );
};

export default App;
