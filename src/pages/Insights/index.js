import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AISummary from "./ai-summary";
import SpendingbyCategory from "./spending-by-category";
import TipsandAlerts from "./tips-and-alerts";

const Insights = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top > 0 ? insets.top + 5 : 20 },
      ]}
    >
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Text style={styles.insights}>Insights</Text>
        <AISummary />
        <SpendingbyCategory />
        <TipsandAlerts />
      </ScrollView>
    </View>
  );
};

export default Insights;
