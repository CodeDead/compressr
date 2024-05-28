import React, { useContext } from "react";
import { Title, Text, Button, Container, Group } from "@mantine/core";
import classes from "./notfound.module.css";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { MainContext } from "../../context/MainContextProvider/index.jsx";

const NotFound = () => {
  const [state] = useContext(MainContext);
  const navigate = useNavigate();

  const { allowCookies } = state;

  /**
   * Go to the home page
   */
  const goHome = () => {
    navigate("/");
  };

  if (allowCookies) {
    ReactGA.send({
      hitType: "pageview",
      page: "/not-found",
      title: "Not Found",
    });
  }

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group justify="center">
        <Button aria-label="Home" variant="subtle" size="md" onClick={goHome}>
          Take me back to home page
        </Button>
      </Group>
    </Container>
  );
};

export default NotFound;
