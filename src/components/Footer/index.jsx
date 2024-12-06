import React from "react";
import { Container, Group, ActionIcon, rem, Text } from "@mantine/core";
import {
  IconBrandBluesky,
  IconBrandGithub,
  IconBrandMastodon,
} from "@tabler/icons-react";
import classes from "./footer.module.css";

const Footer = () => (
  <Container className={classes.inner}>
    <Text
      size="lg"
      style={{ cursor: "pointer" }}
      onClick={() => window.open("https://codedead.com/", "_blank")}
    >
      © {new Date().getFullYear()} CodeDead
    </Text>
    <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
      <ActionIcon
        aria-label="BlueSky"
        size="lg"
        color="gray"
        variant="subtle"
        onClick={() =>
          window.open("https://bsky.app/profile/codedead.com", "_blank")
        }
      >
        <IconBrandBluesky
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
      </ActionIcon>
      <ActionIcon
        aria-label="Mastodon"
        size="lg"
        color="gray"
        variant="subtle"
        onClick={() => window.open("https://mstdn.social/@CodeDead", "_blank")}
      >
        <IconBrandMastodon
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
      </ActionIcon>
      <ActionIcon
        aria-label="Github"
        size="lg"
        color="gray"
        variant="subtle"
        onClick={() => window.open("https://github.com/CodeDead/", "_blank")}
      >
        <IconBrandGithub
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
      </ActionIcon>
    </Group>
  </Container>
);

export default Footer;
