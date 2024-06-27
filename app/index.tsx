import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/bamboo.png")}
          style={styles.bambooLogo}
        />
      }
    >
      <ThemedView>
        <ThemedText type="title">Insert Plant List here</ThemedText>
        <Link style={styles.addPlantButton} href="/add" asChild>
          <Pressable>
            <Text>Add Plant</Text>
          </Pressable>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  addPlantButton: {
    marginTop: 20,
  },
  bambooLogo: {
    height: 178,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
