import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props.car;
  const navigation = useNavigation();

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"More Details"}
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    </View>
  );
};

export default CarItem;
