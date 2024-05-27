import React from "react";
import {
  Button,
  Group,
  Image,
  List,
  rem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./compressheroheader.module.css";

const CompressHeroHeader = ({ changePopOverOpen }) => {
  /**
   * Open the source code
   */
  const openSourceCode = () => {
    window.open("https://github.com/CodeDead/compressr", "_blank");
  };

  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          A <span className={classes.highlight}>private</span> image compression
          tool
          <br />
        </Title>
        <Text c="dimmed" mt="md">
          Nothing gets uploaded to our servers. Everything is done in your
          browser!
        </Text>

        <List
          mt={30}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck
                style={{ width: rem(12), height: rem(12) }}
                stroke={1.5}
              />
            </ThemeIcon>
          }
        >
          <List.Item>
            <b>Supports multiple formats</b> – JPEG, PNG, GIF, SVG, WebP, and
            more!
          </List.Item>
          <List.Item>
            <b>Advanced options</b> – Decide the quality, size, and format of
            the output image
          </List.Item>
          <List.Item>
            <b>Free and open source</b> – No ads, no tracking, no hidden costs
          </List.Item>
        </List>

        <Group mt={30}>
          <Button
            radius="xl"
            size="md"
            className={classes.control}
            onClick={() => {
              changePopOverOpen();
              window.scrollTo(0, 0);
            }}
          >
            Get started
          </Button>
          <Button
            variant="default"
            radius="xl"
            size="md"
            className={classes.control}
            onClick={openSourceCode}
          >
            Source code
          </Button>
        </Group>
      </div>
      <Image src="/bulletpoint.svg" className={classes.image} />
    </div>
  );
};

export default CompressHeroHeader;
