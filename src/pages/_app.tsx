import "../styles/style.css";
import type { AppProps } from "next/app";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import Script from 'next/script';

const App = ({ Component, pageProps }: AppProps) => {

  useEffect(() => {
    try{
    window.addEventListener("open", function () {
      navigator.serviceWorker.register("../../arc-sw.js").then(
        function (registration) {
          console.log("Arc service worker successful with scope: ", registration.scope);
        },
        function (err) {
          console.log("Arc service worker registration failed: ", err);
        }
      );
    });
  } catch (err) {
    console.error(err);
  }
  }, [])
  
  return (
    <Provider store={store}>
      <Script async={true} strategy="worker" src="https://arc.io/widget.min.js#dPRGqGD4"></Script>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
