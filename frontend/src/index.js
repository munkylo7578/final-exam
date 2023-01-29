import { render } from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./containers/App";
import { store, persistor } from "./store";
import ReduxToastr from "react-redux-toastr";
import "./assets/styles.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ReactGA from "react-ga";
process.env.NODE_ENV === "production" &&
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_KEY);

render(
  <React.StrictMode>
    <PayPalScriptProvider
      options={{
        "client-id":
          "AbD80eGE0N8FdyU57T9LugVrhbRv4wC8115nhNQ6iMjPo_wWfDQJFKYdjc2B6FckF0C_Tukol4vluAWr",
      }}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <ReduxToastr
            timeOut={4000}
            newestOnTop={false}
            preventDuplicates
            position="top-right"
            getState={(state) => state.toastr} // This is the default
            transitionIn="fadeIn"
            transitionOut="fadeOut"
            progressBar
            closeOnToastrClick
          />
        </PersistGate>
      </Provider>
    </PayPalScriptProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
