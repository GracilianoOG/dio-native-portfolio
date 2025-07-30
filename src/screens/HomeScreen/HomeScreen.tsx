import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri: "https://avatars.githubusercontent.com/u/72778164?s=500&v=4",
        }}
      />
      <Text style={styles.title}>Graciliano</Text>
      <Text style={styles.description}>
        The right dev in the right place can create all the apps in the world...
      </Text>
      <View style={styles.tags}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>HTML</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>CSS</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>SASS</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>JavaScript</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>TypeScript</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>React</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>React Native</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Styled Components</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
