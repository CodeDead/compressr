import React, { useContext } from "react";
import {
  Container,
  Group,
  Burger,
  Title,
  useMantineColorScheme,
  Tooltip,
  Drawer,
  ScrollArea,
  Divider,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./headerbar.module.css";
import { ActionIcon } from "@mantine/core";
import { IconSun, IconSunOff } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { setThemeType } from "../../reducer/MainReducer/Actions/index.js";
import { MainContext } from "../../context/MainContextProvider/index.jsx";

const HeaderBar = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [state, d1] = useContext(MainContext);
  const navigate = useNavigate();

  const { pageIndex } = state;

  /**
   * Open the privacy policy in a new tab
   */
  const openPrivacy = () => {
    window.open("https://codedead.com/privacy", "_blank");
  };

  /**
   * Open the contact page in a new tab
   */
  const openContact = () => {
    window.open("https://codedead.com/contact", "_blank");
  };

  /**
   * Change the color scheme
   */
  const changeTheme = () => {
    const newTheme = colorScheme === "dark" ? "light" : "dark";

    d1(setThemeType(newTheme));
    setColorScheme(newTheme);
  };

  /**
   * Click the scroll link
   * @param event The event argument
   * @param link The link to navigate to
   */
  const clickScrollLink = (event, link) => {
    event.preventDefault();

    toggle();
    navigate(link);
  };

  return (
    <Container size="xl" className={classes.inner}>
      <Title
        order={1}
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Compressr
      </Title>
      <Group gap={5} visibleFrom="xs">
        <a
          href={"/"}
          className={classes.link}
          data-active={pageIndex === 0 ? true : undefined}
          onClick={(event) => {
            clickScrollLink(event, "/");
          }}
        >
          Home
        </a>
        <a
          href={"/about"}
          className={classes.link}
          data-active={pageIndex === 1 ? true : undefined}
          onClick={(event) => {
            clickScrollLink(event, "/about");
          }}
        >
          About
        </a>
        <a
          key="privacy"
          href={"#"}
          className={classes.link}
          onClick={openPrivacy}
        >
          Privacy
        </a>
        <a
          key="contact"
          href={"#"}
          className={classes.link}
          onClick={openContact}
        >
          Contact
        </a>
      </Group>
      <Tooltip label={colorScheme === "dark" ? "Light" : "Dark"}>
        <ActionIcon aria-label="Theme" variant="subtle" onClick={changeTheme}>
          {colorScheme === "dark" ? (
            <IconSunOff style={{ width: "70%", height: "70%" }} stroke={1.5} />
          ) : (
            <IconSun style={{ width: "70%", height: "70%" }} stroke={1.5} />
          )}
        </ActionIcon>
      </Tooltip>

      <Burger aria-label="Burger menu" opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      <Drawer
        opened={opened}
        onClose={() => toggle()}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <a
            href="/"
            className={classes.link}
            data-active={pageIndex === 0 ? true : undefined}
            onClick={(e) => clickScrollLink(e, "/")}
          >
            Home
          </a>
          <a
            href="/about"
            className={classes.link}
            data-active={pageIndex === 1 ? true : undefined}
            onClick={(e) => clickScrollLink(e, "/about")}
          >
            About
          </a>
          <a href="#" className={classes.link} onClick={openContact}>
            Contact
          </a>
          <a href="#" className={classes.link} onClick={openPrivacy}>
            Privacy
          </a>
        </ScrollArea>
      </Drawer>
    </Container>
  );
};

export default HeaderBar;
