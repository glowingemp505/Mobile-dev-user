import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";
import HomeHeader from "./HomeHeader";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { colors } from "src/utils/styles";
import { appIcons } from "src/utils/assets";
import SpendingOverview from "./SpendingOverview";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const data = [
    { id: 1, color: "#1C0F34", title: "Add\nAccount", icon: appIcons.addPrimay },
    { id: 2, color: "#0B2718", title: "Savings\nGoal", icon: appIcons.money, tintColor: "#14a249" },
    { id: 3, color: "#13213A", title: "Budget", icon: appIcons.budget, tintColor: "#3d83f6" },
    { id: 4, color: "#38270B", title: "Stats", icon: appIcons.stats },
  ];

  const dataCircle = [
    { value: 30, color: "#8B6EF3" },
    { value: 25, color: "#56C288" },
    { value: 20, color: "#4F86F7" },
    { value: 15, color: "#E6B15C" },
    { value: 10, color: "#E45757" },
  ];

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
  ];
  const renderItemTabs = ({ item }) => {
    return (
      <View style={styles.cardMain}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.boxStyle, { backgroundColor: item.color }]}
        >
          <Image
            source={item.icon}
            style={[styles.icon, item.tintColor && { tintColor: item.tintColor }]}
          />
        </TouchableOpacity>
        <Text style={[styles.title, { textAlign: 'center' }]}>{item.title}</Text>
      </View>
    );
  };

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
    <View style={[styles.container, styles.safeArea(insets.top)]}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scroll}>
        <CommonLinearGradient
          style={styles.gradientView}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#7C3AED", colors.primary]}
        >
          <View style={styles.gradientInner}>
            <View style={styles.balanceWrapper}>
              <Text style={styles.greeting}>Good morning,</Text>
              <Text style={styles.total}>$24,562.00</Text>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <View style={styles.incomeIcon}>
                  <Image source={appIcons.greenArrow} style={styles.icon} />
                </View>

                <View style={{ gap: 5 }}>
                  <Text style={styles.statLabel}>Income</Text>
                  <Text style={styles.statValue}>+$2,450</Text>
                </View>
              </View>

              <View style={styles.statItem}>
                <View style={styles.expenseIcon}>
                  <Image source={appIcons.downRed} style={styles.icon} />
                </View>

                <View style={{ gap: 5 }}>
                  <Text style={styles.statLabel}>Expense</Text>
                  <Text style={styles.statValue}>-$2,450</Text>
                </View>
              </View>
            </View>
          </View>
        </CommonLinearGradient>
        <View>
          <FlatList
            data={data}
            renderItem={renderItemTabs}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              justifyContent: "space-between",
              width: "100%",
            }}
          />
        </View>
        <SpendingOverview />
        <View>
          <View style={styles.row}>
            <Text style={styles.recent}>Recent Transactions</Text>
            <Text
              onPress={() => navigation.navigate("AllTransactions")}
              style={styles.seeAll}
            >
              See all
            </Text>
          </View>
          <FlatList
            data={sections}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ marginTop: 10 }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
