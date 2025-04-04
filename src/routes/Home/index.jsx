import React, { useContext, useEffect, useState } from "react";
import DropzoneButton from "../../components/DropzoneButton/index.jsx";
import { Container, Button, Text } from "@mantine/core";
import { MainContext } from "../../context/MainContextProvider/index.jsx";
import { setPageIndex } from "../../reducer/MainReducer/Actions/index.js";
import CompressHeroHeader from "../../components/CompressHeroHeader/index.jsx";
import CompressSlider from "../../components/CompressSlider/index.jsx";
import classes from "./home.module.css";
import { IconCircleLetterX, IconSword } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import Compressor from "compressorjs";

const Home = () => {
  const [files, setFiles] = useState(null);
  const [popOverOpen, setPopOverOpen] = useState(false);
  const [quality, setQuality] = useState(65);

  const [, d1] = useContext(MainContext);

  /**
   * Change the popover open state
   */
  const changePopOverOpen = () => {
    setPopOverOpen((e) => !e);
  };

  /**
   * Change the files
   * @param files The new array of files
   */
  const changeFiles = (files) => {
    setFiles(files);
  };

  /**
   * Compress the files
   */
  const compressFiles = () => {
    if (!files) return;

    let error = null;
    for (const c of files) {
      new Compressor(c, {
        quality: quality / 100,
        success: (result) => {
          const url = URL.createObjectURL(result);
          const a = document.createElement("a");
          a.href = url;
          a.download = c.name;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        },
        error: (err) => {
          error = err;
        },
      });
    }

    if (!error) {
      notifications.show({
        title: "Success",
        message: "Your images have been compressed! ❤️",
      });
    } else {
      console.log(error);
      notifications.show({
        title: "Error",
        message: "An image could not be compressed. Please try again. 🪲",
      });
    }
  };

  useEffect(() => {
    d1(setPageIndex(0));
    document.title = "Home | Compressr";
  }, []);

  return (
    <Container size="md">
      {files ? (
        <Container className={classes.inner}>
          <Text size="md" mt="xl" mb="xl">
            Quality
          </Text>
          <CompressSlider value={quality} onChange={setQuality} />
          <Button
            aria-label="Cancel"
            style={{ float: "left" }}
            mt="xl"
            leftSection={<IconCircleLetterX size={14} />}
            onClick={() => {
              setFiles(null);
            }}
          >
            Cancel
          </Button>
          <Button
            aria-label="Compress"
            style={{ float: "right" }}
            mt="xl"
            leftSection={<IconSword size={14} />}
            onClick={compressFiles}
          >
            Compress
          </Button>
        </Container>
      ) : (
        <>
          <CompressHeroHeader changePopOverOpen={changePopOverOpen} />
          <DropzoneButton
            popOverOpen={popOverOpen}
            setPopOverOpen={changePopOverOpen}
            changeFiles={changeFiles}
          />
        </>
      )}
    </Container>
  );
};

export default Home;
