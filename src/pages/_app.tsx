import "../styles/style.css";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("../../arc-sw.js").then(
        function (registration) {
          console.log("Arc service worker successful with scope: ", registration.scope);
        },
        function (err) {
          console.log("Arc service worker registration failed: ", err);
        }
      );
    });
  }, []);
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
