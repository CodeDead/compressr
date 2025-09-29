import React, { Suspense, lazy } from "react";
import HeaderBar from "../HeaderBar";
import { Center, Loader } from "@mantine/core";
import { AppShell } from "@mantine/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Footer/index.jsx";

const Home = lazy(() => import("../../routes/Home"));
const About = lazy(() => import("../../routes/About"));
const NotFound = lazy(() => import("../../routes/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <AppShell header={{ height: 60 }} footer={{ height: 100 }} padding="md">
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
        <AppShell.Footer visibleFrom="xs">
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </BrowserRouter>
  );
};

export default App;
