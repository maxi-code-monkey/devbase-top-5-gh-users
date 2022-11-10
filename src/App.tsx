import React, { Suspense } from "react";
import "./App.css";
import { withScopedCss } from './hoc/withScopedCss';
import AppContext from "./context/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";
import CustomAppBar from "./components/AppBar";
import Spinner from "./components/Spinner";
import Router from "./routes";

const App = () => {

  return (
    <AppContext>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Router />
        </Suspense>
      </ErrorBoundary>
    </AppContext>
  );
};

export default withScopedCss(App);
