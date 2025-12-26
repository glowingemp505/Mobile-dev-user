import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./styles";
import { appIcons } from "src/utils/assets";
import { SafeAreaView } from "react-native-safe-area-context";

const AllTransactions = ({ navigation }) => {
  const sections = [
    {
      id: "3",
      icon: appIcons.music,
      title: "Salary Deposit",
      time: "Entertainment • Today",
      amount: "+$14.99",
    },
    {
      id: "4",
      icon: appIcons.box,
      title: "Amazon",
      time: "Shopping • Today",
      amount: "+$14.99",
    },
    {
      id: "5",
      icon: appIcons.music,
      title: "Salary Deposit",
      time: "Entertainment • Today",
      amount: "+$14.99",
    },
  ];

  const renderItem = ({ item }) => {
    const isGreenAmount = item.id === "5";
    return (
      <View style={styles.todayCard}>
        <View style={styles.todayLeft}>
          <Image source={item.icon} style={styles.todayIcon} />
          <View style={styles.todayTextWrapper}>
            <Text style={styles.todayTitle}>{item.title}</Text>
            <Text style={styles.todayTime}>{item.time}</Text>
          </View>
        </View>

        <Text
          style={[styles.todayAmount, isGreenAmount && { color: "#10B981" }]}
        >
          {item.amount}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.ellipse}>
            <Image source={appIcons.leftArrow} style={styles.backIcon} />
          </View>
        </TouchableOpacity>

        <Text style={styles.title}>All Transactions</Text>

        <View style={styles.bellButton}></View>
      </View>
      <FlatList
        data={sections}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginTop: 10 }}
      />
    </SafeAreaView>
  );
};

export default AllTransactions;
