import { FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import MultiColorCircle from "src/components/MultiColorCircle";
import { colors, fonts } from "src/utils/styles";

const SpendingbyCategory = () => {
  const spendingData = [
    { id: "1", title: "Housing", percentage: "45%", color: "#8B5CF6" },
    { id: "2", title: "Food & Dining", percentage: "18%", color: "#23C78E" },
    { id: "3", title: "Transportation", percentage: "12%", color: "#F8B018" },
    { id: "4", title: "Shopping", percentage: "10%", color: "#4C86EE" },
    { id: "5", title: "Entertainment", percentage: "8%", color: "#EF4444" },
  ];

  const dataCircle = [
    { value: 13, color: "#EF4444" }, // was 15
    { value: 17, color: "#E9A33B" }, // was 20
    { value: 35, color: "#8B5CF6" }, // was 40
    { value: 26, color: "#10B981" }, // was 30
    { value: 9, color: "#3B82F6" }, // was 10
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemRow}>
          <View style={styles.itemLeft}>
            <View style={[styles.dot, { backgroundColor: item.color }]} />
            <Text style={styles.title} numberOfLines={1}>
              {item.title}
            </Text>
          </View>

          <Text style={styles.percentage}>{item.percentage}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainCard}>
      <View style={styles.topView}>
        <Text style={styles.spending}>Spending by Category</Text>
        <Text style={styles.detail}>Details</Text>
      </View>

      <View style={styles.chartPlaceholder}>
        <MultiColorCircle
          SIZE={160}
          STROKE_WIDTH={30}
          GAP={8}
          segments={dataCircle}
        >
          <View
            style={{ gap: 5, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                color: "#888888",
                fontFamily: fonts.medium,
                fontSize: 14,
                flexShrink: 1,
              }}
            >
              Totals
            </Text>
            <Text
              style={{
                color: colors.white,
                fontFamily: fonts.bold,
                fontSize: 22,
              }}
            >
              $3,100
            </Text>
          </View>
        </MultiColorCircle>
      </View>

      <FlatList
        data={spendingData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SpendingbyCategory;
