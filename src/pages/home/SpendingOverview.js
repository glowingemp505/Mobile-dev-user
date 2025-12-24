import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, fonts } from "src/utils/styles";
import MultiColorCircle from "src/components/MultiColorCircle";

const SpendingOverview = () => {
  const data = [
    { id: 1, color: "#8B5CF6", title: "Housings", persontage: "45%" },
    { id: 2, color: "#22C55E", title: "Food", persontage: "18%" },
    { id: 3, color: "#F97316", title: "Transport", persontage: "12%" },
    { id: 4, color: "#3B82F6", title: "Shopping", persontage: "10%" },
    { id: 5, color: "#EF4444", title: "Other", persontage: "15%" },
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
      <View style={styles.itemRow}>
        <View style={styles.itemLeft}>
          <View style={[styles.dot, { backgroundColor: item.color }]} />
          <Text style={styles.title}>{item.title}</Text>
        </View>

        <Text style={styles.percentage}>{item.persontage}</Text>
      </View>
    );
  };

  return (
    <View style={styles.mainCard}>
      <View style={styles.topView}>
        <Text style={styles.spending}>Spending Overview</Text>
        <Text style={styles.detail}>Details</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.leftSection}>
          <MultiColorCircle segments={dataCircle} STROKE_WIDTH={25} >
            <Text style={styles.total}>Totals</Text>
            <Text style={styles.totalAmount}>$3,100</Text>
          </MultiColorCircle>
        </View>
        <View style={styles.rightSection}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      </View>
    </View>
  );
};

export default SpendingOverview;

const styles = StyleSheet.create({
  mainCard: {
    backgroundColor: "#27272A",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginBottom: 20,
  },

  topView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  spending: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: colors.white,
  },

  detail: {
    color: "#8B5CF6",
    fontSize: 13,
    fontFamily: fonts.medium,
  },

  row: {
    flexDirection: "row",
  },

  leftSection: {
    width: "50%",
  },

  rightSection: {
    width: "50%",
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },

  title: {
    color: "#D1D5DB",
    fontFamily: fonts.regular,
    fontSize: 14,
  },

  percentage: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.medium,
  },
  total: {
    color: "#727272",
    fontSize: 12,
    fontFamily: fonts.regular,
  },
  totalAmount: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
});
