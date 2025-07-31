import React from "react";
import { Image, View } from "react-native";

import { styles } from "./styles";

interface RoundPhotoProps {
  size: number;
}

export default function RoundPhoto({ size }: RoundPhotoProps) {
  return (
    <Image
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size },
      ]}
      source={{
        uri: `https://avatars.githubusercontent.com/u/72778164?s=${size}&v=4`,
      }}
    />
  );
}
