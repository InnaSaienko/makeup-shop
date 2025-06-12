import React from "react";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import RouterSet from "./components/Routes/RouterSet";
import Layout from "./layout/Layout";

const App = () => {
  return (
      <div className="main-wrap">
        <ErrorBoundary>
              <Layout>
                  <RouterSet />
              </Layout>
        </ErrorBoundary>
      </div>
  );
}

export default App;
