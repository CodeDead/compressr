import React from "react";
import { Container, Group, ActionIcon, rem, Title, Text } from "@mantine/core";
import {
  IconBrandX,
  IconBrandGithub,
  IconBrandMastodon,
} from "@tabler/icons-react";
import classes from "./footer.module.css";

const Footer = () => {
  const openCodeDead = () => {
    window.open("https://codedead.com/", "_blank");
  };

  /**
   * Open the X.com website in a new tab
   */
  const openX = () => {
    window.open("https://x.com/C0DEDEAD", "_blank");
  };

  /**
   * Open the Github profile in a new tab
   */
  const openGithub = () => {
    window.open("https://github.com/CodeDead/", "_blank");
  };

  /**
   * Open the Mastodon profile in a new tab
   */
  const openMastodon = () => {
    window.open("https://mstdn.social/@CodeDead", "_blank");
  };

  return (
    <div>
      <Container className={classes.inner}>
        <Text
          size="lg"
          style={{ cursor: "pointer" }}
          onClick={openCodeDead}
        >
          © {new Date().getFullYear()} CodeDead
        </Text>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle" onClick={openX}>
            <IconBrandX
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={openMastodon}
          >
            <IconBrandMastodon
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            onClick={openGithub}
          >
            <IconBrandGithub
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
