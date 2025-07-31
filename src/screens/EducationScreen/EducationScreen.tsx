import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import EducationCard from "../../components/EducationCard";

export default function EducationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Education</Text>
      <View style={{ gap: 32 }}>
        <EducationCard
          institution="Análise e Desenvolvimento de Sistemas"
          location="FAETERJ Paracambi"
          date="março 2024 - cursando"
        />
        <EducationCard
          institution="Técnico em Informática"
          location="ETE Paracambi"
          date="fev. 2021 - dez. 2021"
        />
        <EducationCard
          institution="Técnico em Informática para Internet"
          location="IFRJ Paulo de Frontin"
          date="fev. 2018 - dez. 2018"
        />
      </View>
    </SafeAreaView>
  );
}
