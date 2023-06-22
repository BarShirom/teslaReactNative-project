import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import Header from "../components/Header";
import StyledButton from "../components/StyledButton";

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Tesla_Motors.svg.png")}
        style={styles.backgroundImage}
      />

      <Header />
      <Text style={styles.textContainer}>
        Tesla, Inc. is an American multinational automotive and clean energy
        company headquartered in Austin, Texas. Tesla designs and manufactures
        electric vehicles (cars and trucks), stationary battery energy storage
        devices from home to grid-scale, solar panels and solar roof tiles, and
        related products and services. Tesla is one of the world's most valuable
        companies and, as of 2023, was the world's most valuable automaker. In
        2022, the company led the battery electric vehicle market, with 18%
        share. Its subsidiary Tesla Energy develops and is a major installer of
        photovoltaic systems in the United States. Tesla Energy is one of the
        largest global suppliers of battery energy storage systems, with 6.5
        gigawatt-hours installed in 2022.
      </Text>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Go Back"}
          onPress={() => navigation.goBack("Home")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  textContainer: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
});

