import React from "react";
import { Card, Avatar, Text, Group, Button } from "@mantine/core";
import classes from "./aboutcard.module.css";

const AboutCard = ({ className }) => {
  /**
   * Open the donation page in a new tab
   */
  const openDonate = () => {
    window.open("https://codedead.com/donate", "_blank");
  };

  /**
   * Open the CodeDead website in a new tab
   */
  const openCodeDead = () => {
    window.open("https://codedead.com/", "_blank");
  };

  return (
    <Card withBorder radius="md" className={className}>
      <Card.Section
        h={140}
        onClick={openCodeDead}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
          cursor: "pointer",
        }}
      />
      <Avatar
        src="https://codedead.com/favicon.svg"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        onClick={openCodeDead}
        style={{
          cursor: "pointer",
        }}
        className={classes.avatar}
      />
      <Text
        ta="center"
        fz="lg"
        fw={500}
        mt="sm"
        style={{ cursor: "pointer" }}
        onClick={openCodeDead}
      >
        CodeDead
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        If you like this tool, consider donating.
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Made with ❤️ by CodeDead.
      </Text>
      <Group mt="md" justify="center" gap={30}>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            200K+
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Visitors
          </Text>
        </div>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            10+
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Donations
          </Text>
        </div>
        <div>
          <Text ta="center" fz="lg" fw={500}>
            11
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            FOSS tools
          </Text>
        </div>
      </Group>
      <Button
        aria-label="Donate"
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        variant="default"
        onClick={openDonate}
      >
        Donate
      </Button>
    </Card>
  );
};

export default AboutCard;
