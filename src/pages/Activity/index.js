import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SectionList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";
import { appIcons } from "src/utils/assets";
import { colors } from "src/utils/styles";

const Activity = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState(1);

  const tabsData = [
    { id: 1, title: "All" },
    { id: 2, title: "Income" },
    { id: 3, title: "Expense" },
    { id: 4, title: "Filter", icon: appIcons.filter },
  ];

  const sections = [
    {
      title: "TODAY",
      data: [
        {
          id: "1",
          icon: appIcons.coffee,
          title: "Coffee Shop",
          time: "9:30 AM",
          amount: "-$5.50",
        },
        {
          id: "2",
          icon: appIcons.racingcar,
          title: "Uber Ride",
          time: "8:15 AM",
          amount: "-$5.50",
        },
      ],
    },
    {
      title: "YESTERDAY",
      data: [
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
          icon: appIcons.box,
          title: "Amazon",
          time: "Shopping • Today",
          amount: "+$14.99",
        },
      ],
    },
  ];

  const renderTab = ({ item }) => {
    const isActive = activeTab === item.id;
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setActiveTab(item.id)}
        style={[styles.tabStyle, isActive && styles.activeTabStyle]}
      >
        {item.icon && (
          <Image
            source={item.icon}
            style={[styles.tabIcon, isActive && styles.activeIcon]}
          />
        )}
        <Text style={[styles.tabText, isActive && styles.activeText]}>
          {item.title}
        </Text>
      </TouchableOpacity>
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

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.dayText}>{title}</Text>
  );

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top > 0 ? insets.top + 5 : 20 },
      ]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerText}>Transactions</Text>
        <View style={styles.inputBox}>
          <Image source={appIcons.search} style={styles.searchIcon} />
          <TextInput
            placeholder="Search transaction..."
            placeholderTextColor={colors.white}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <FlatList
            horizontal
            data={tabsData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderTab}
            contentContainerStyle={styles.tabsContainer}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default Activity;
