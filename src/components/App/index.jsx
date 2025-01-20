import React, { useEffect, useContext, Suspense, lazy, useState } from "react";
import HeaderBar from "../HeaderBar";
import { Center, Loader, useMantineColorScheme } from "@mantine/core";
import { AppShell } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Footer/index.jsx";
import { MainContext } from "../../context/MainContextProvider";
import ReactGA from "react-ga4";
import { setAllowCookies } from "../../reducer/MainReducer/Actions/index.js";
import CookieNotice from "../CookieNotice/index.jsx";

const Home = lazy(() => import("../../routes/Home"));
const About = lazy(() => import("../../routes/About"));
const NotFound = lazy(() => import("../../routes/NotFound"));

const App = () => {
  const [state, d1] = useContext(MainContext);
  const { setColorScheme } = useMantineColorScheme();

  const { themeType, allowCookies, hasSetCookies } = state;

  const [cookieBannerOpen, setCookieBannerOpen] = useState(!hasSetCookies);

  /**
   * Close the cookie banner
   */
  const closeCookieBanner = () => {
    setCookieBannerOpen(false);
  };

  /**
   * Accept cookies
   */
  const acceptCookies = () => {
    d1(setAllowCookies(true));
    setCookieBannerOpen(false);
  };

  /**
   * Decline cookies
   */
  const declineCookies = () => {
    d1(setAllowCookies(false));
    setCookieBannerOpen(false);
  };

  useEffect(() => {
    setColorScheme(themeType);
  }, []);

  useEffect(() => {
    if (allowCookies) {
      ReactGA.initialize("G-YQZGPHN1BH");
      window["ga-disable-G-YQZGPHN1BH"] = false;
    } else {
      window["ga-disable-G-YQZGPHN1BH"] = true;
    }
  }, [allowCookies]);

  return (
    <BrowserRouter>
      <AppShell
          header={{ height: 60 }}
          footer={{ height: 115 }}
          padding="md"
      >
        <AppShell.Header>
          <HeaderBar />
        </AppShell.Header>
        <AppShell.Main>
          <Suspense
            fallback={
              <Center h={100}>
                <Loader type="bars" />
              </Center>
            }
          >
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AppShell.Main>
        {cookieBannerOpen ? (
          <CookieNotice
            onAccept={acceptCookies}
            onDecline={declineCookies}
            onClose={closeCookieBanner}
          />
        ) : null}
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </BrowserRouter>
  );
};

export default App;
