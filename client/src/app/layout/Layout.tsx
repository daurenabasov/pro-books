import React, { FC, ReactNode } from "react";
import Header from "../../organisms/header/header.orgainsms";
import Footer from "../../organisms/footer/Footer.organisms";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { setupStore, persistor } from "../store/store";
import { BrowserRouter } from "react-router-dom";

interface ILayout {
  children: ReactNode;
}

const store = setupStore();

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          {children}
          <Footer />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};

export default Layout;
