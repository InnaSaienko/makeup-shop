import React from "react";
import "./App.scss";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { BasketProvider } from "./context/BasketContext/BasketContext";
import { AuthorizationProvider } from "./context/AuthorizationContext/AuthorizationContext";
import Footer from "./layout/Footer/Footer";
import RouterSet from "./components/Routes/RouterSet";
import Layout from "./layout/Layout";

const App = () => {
  return (
      <div className="main-wrap">
        <ErrorBoundary>
          <AuthorizationProvider>
            <BasketProvider>
              <Layout>
                  <RouterSet />
              </Layout>
            </BasketProvider>
          </AuthorizationProvider>
          <Footer />
        </ErrorBoundary>
      </div>
  );
}

export default App;
