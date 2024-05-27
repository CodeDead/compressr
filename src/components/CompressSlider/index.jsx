import React from "react";
import { Slider } from "@mantine/core";

const CompressSlider = ({ value, onChange }) => {
  return (
    <Slider
      value={value}
      onChange={onChange}
      label={(value) => `${value}%`}
      marks={[
        { value: 0, label: "0%" },
        { value: 20, label: "20%" },
        { value: 40, label: "40%" },
        { value: 60, label: "60%" },
        { value: 80, label: "80%" },
        { value: 100, label: "100%" },
      ]}
    />
  );
};

export default CompressSlider;
