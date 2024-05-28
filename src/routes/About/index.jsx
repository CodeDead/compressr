import React, { useContext, useEffect } from "react";
import classes from "./about.module.css";
import { Accordion, Container, Title } from "@mantine/core";
import { MainContext } from "../../context/MainContextProvider/index.jsx";
import { setPageIndex } from "../../reducer/MainReducer/Actions/index.js";
import AboutCard from "../../components/AboutCard/index.jsx";
import ReactGA from "react-ga4";

const About = () => {
  const [state, d1] = useContext(MainContext);
  const { allowCookies } = state;

  useEffect(() => {
    d1(setPageIndex(1));
    document.title = "About | Compressr";
  }, []);

  if (allowCookies) {
    ReactGA.send({
      hitType: "pageview",
      page: "/about",
      title: "About | Compressr",
    });
  }

  return (
    <Container>
      <AboutCard className={classes.inner + " card"} />
      <Container size="sm" className={classes.wrapper}>
        <Title ta="center" className={classes.title}>
          Frequently Asked Questions
        </Title>

        <Accordion variant="separated">
          <Accordion.Item className={classes.item} value="reset-password">
            <Accordion.Control>
              Can I create pixel art with this tool?
            </Accordion.Control>
            <Accordion.Panel>
              Yes! If you set the compression level to 0, your images will be
              very pixelated.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="another-account">
            <Accordion.Control>Do you store my images?</Accordion.Control>
            <Accordion.Panel>
              No. Compression is entirely done on your own device and your
              images do not pass our servers.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="newsletter">
            <Accordion.Control>
              Can I use this tool for commercial purposes?
            </Accordion.Control>
            <Accordion.Panel>
              Yes! You can use this tool for any purpose, including commercial
              ones.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="credit-card">
            <Accordion.Control>
              Can I use this tool for free without any limitations?
            </Accordion.Control>
            <Accordion.Panel>
              Yes! You can use this tool for free without any limitations.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item className={classes.item} value="payment">
            <Accordion.Control>
              What is the maximum file size I can upload?
            </Accordion.Control>
            <Accordion.Panel>
              There is no maximum file size since the compression is done on
              your own device. If you have a very large image, the compression
              process might take a while. We&apos;re currently working on a
              solution to make this process faster.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Container>
    </Container>
  );
};

export default About;
