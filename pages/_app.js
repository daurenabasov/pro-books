import "../styles/globals.css";
import "swiper/css/bundle";
import { store } from "../redux/reducers/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  )
}

export default MyApp;

// export default store(MyApp());
