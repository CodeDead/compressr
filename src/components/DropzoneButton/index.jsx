import React, { useRef } from "react";
import {
  Text,
  Group,
  Button,
  rem,
  useMantineTheme,
  Popover,
} from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconX, IconDownload } from "@tabler/icons-react";
import classes from "./dropzonebutton.module.css";

const DropzoneButton = ({ popOverOpen, setPopOverOpen, changeFiles }) => {
  const theme = useMantineTheme();
  const openRef = useRef(null);

  return (
    <div className={classes.wrapper}>
      <Dropzone
        openRef={openRef}
        onDrop={(files) => {
          changeFiles(files);
        }}
        className={classes.dropzone}
        radius="md"
        inputProps={{ "aria-label": "Picture" }}
        accept={[
          MIME_TYPES.png,
          MIME_TYPES.jpeg,
          MIME_TYPES.svg,
          MIME_TYPES.gif,
          MIME_TYPES.webp,
        ]}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group justify="center">
            <Dropzone.Accept>
              <IconDownload
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.blue[6]}
                stroke={1.5}
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                style={{ width: rem(50), height: rem(50) }}
                color={theme.colors.red[6]}
                stroke={1.5}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconCloudUpload
                style={{ width: rem(50), height: rem(50) }}
                stroke={1.5}
              />
            </Dropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <Dropzone.Accept>Drop files here</Dropzone.Accept>
            <Dropzone.Idle>Select an image to compress</Dropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Drag&apos;n&apos;drop images here to compress.
          </Text>
        </div>
      </Dropzone>

      <Popover opened={popOverOpen} onChange={setPopOverOpen}>
        <Popover.Target>
          <Button
            aria-label="Compress"
            className={classes.control}
            size="md"
            radius="xl"
            onClick={() => openRef.current?.()}
          >
            Compress!
          </Button>
        </Popover.Target>
        <Popover.Dropdown>Select an image to get started!</Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default DropzoneButton;
