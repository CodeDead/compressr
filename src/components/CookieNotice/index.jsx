import React from "react";
import {
  Button,
  Center,
  CloseButton,
  Container,
  Group,
  Paper,
  Text,
} from "@mantine/core";

const CookieNotice = ({ onAccept, onDecline, onClose }) => {
  return (
    <div
      style={{
        width: "100%",
        zIndex: 110,
        position: "fixed",
        bottom: 110,
      }}
    >
      <Center>
        <Container size="xs">
          <Paper withBorder p="lg" radius="md" shadow="md">
            <Group justify="space-between" mb="xs">
              <Text fz="md" fw={500}>
                Allow cookies
              </Text>
              <CloseButton mr={-9} mt={-9} onClick={onClose} />
            </Group>
            <Text c="dimmed" fz="xs">
              We might use cookies to ensure that we give you the best
              experience on our website. If you continue to use this site we
              will assume that you are happy with it.
            </Text>
            <Group justify="flex-end" mt="md">
              <Button
                aria-label="Decline"
                variant="default"
                size="xs"
                onClick={onDecline}
              >
                Decline
              </Button>
              <Button
                aria-label="Accept"
                variant="outline"
                size="xs"
                onClick={onAccept}
              >
                Accept
              </Button>
            </Group>
          </Paper>
        </Container>
      </Center>
    </div>
  );
};

export default CookieNotice;
