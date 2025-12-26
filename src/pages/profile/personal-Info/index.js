import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { appIcons } from "src/utils/assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { colors } from "src/utils/styles";
import CustomDropDown from "src/components/CustomDropDown";
import CommonLinearGradient from "src/components/CommonLinearGradient";

const PersonalInfo = () => {
  const navigation = useNavigation();
  const [fullName, setfullName] = useState("");

  const [incomeValue, setIncomeValue] = useState();
  const [currencyValue, setCurrencyValue] = useState();
  const [budgetValue, setBudgetValue] = useState();
  const [selectedTab, setselectedTab] = useState();

  const categoryData = [
    { id: 1, title: "Next" },
    { id: 2, title: "Food" },
    { id: 3, title: "Transport" },
    { id: 4, title: "Shopping" },
    { id: 5, title: "Entertainment" },
  ];

  const renderItem = ({ item }) => {
    const selectedTabItem = item.id === selectedTab;
    return (
      <TouchableOpacity
        onPress={() => setselectedTab(item.id)}
        activeOpacity={0.5}
        style={[styles.tab, selectedTabItem && styles.selectedTabStyle]}
      >
        <Text
          style={[
            styles.title,
            selectedTabItem && styles.selectedTabTitleStyle,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const incomeData = [
    { label: "5,500 - 8,000", value: "5500-8000" },
    { label: "8,500 - 9,500", value: "8500-9500" },
    { label: "10,000 - 12,000", value: "10000-12000" },
  ];

  const currencyData = [
    { label: "USD - $", value: "usd" },
    { label: "EUR - €", value: "eur" },
    { label: "GBP - £", value: "gbp" },
    { label: "PKR - ₨", value: "pkr" },
  ];

  const budgetData = [
    { label: "1,000 - 2,500", value: "1000-2500" },
    { label: "2,500 - 5,000", value: "2500-5000" },
    { label: "5,000 - 7,500", value: "5000-7500" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.topRow}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.topCircle}
            onPress={() => navigation.goBack()}
          >
            <Image source={appIcons.leftArrow} style={styles.leftArrow} />
          </TouchableOpacity>
          <View style={styles.progressRow}>
            <View style={styles.bar} />
            <View style={styles.bar} />
            <View style={styles.barUnFill} />
          </View>
          <View style={styles.empty} />
        </View>
      </View>

      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.headingAndSub}>
          <Text style={styles.heading}>Personal Info</Text>
          <Text style={styles.subHeading}>
            Help us personalize your experience
          </Text>
        </View>

        {/* Full Name */}
        <View style={styles.inputView}>
          <Text style={styles.title}>Full Name</Text>
          <View style={styles.inputBox}>
            <appIcons.user />
            <TextInput
              style={styles.input}
              placeholder="John Doe"
              placeholderTextColor={colors.gray}
              value={fullName}
              onChangeText={setfullName}
            />
          </View>
        </View>

        {/* Monthly Income */}
        <View style={styles.inputView}>
          <Text style={styles.title}>Monthly Income</Text>
          <CustomDropDown
            data={incomeData}
            placeholder="5,000 - 7,500"
            value={incomeValue}
            onSelect={setIncomeValue}
            leftIcon={
              <Image source={appIcons.dollarupdate} style={styles.dollarSign} />
            }
            rightIcon={<appIcons.down />}
          />
        </View>

        {/* Currency */}
        <View style={styles.inputView}>
          <Text style={styles.title}>Currency</Text>
          <CustomDropDown
            data={currencyData}
            placeholder="USD - $"
            value={currencyValue}
            onSelect={setCurrencyValue}
            leftIcon={<appIcons.globe />}
            rightIcon={<appIcons.down />}
          />
        </View>

        {/* Monthly Budget Goal */}
        <View style={styles.inputView}>
          <Text style={styles.title}>Monthly Budget Goal</Text>
          <CustomDropDown
            data={budgetData}
            placeholder="1,000 - 2,500"
            value={budgetValue}
            onSelect={setBudgetValue}
            leftIcon={<appIcons.target />}
            rightIcon={<appIcons.down />}
          />
        </View>

        {/* Primary Spending Category */}
        <View style={styles.inputView}>
          <Text style={styles.pimary}>Primary Spending Category</Text>
          <FlatList
            data={categoryData}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            renderItem={renderItem}
            columnWrapperStyle={{ gap: 20, marginVertical: 8 }}
          />
        </View>

        <TouchableOpacity
          style={{ width: "100%", marginTop: 15 }}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("ChooseYourPlan")}
        >
          <CommonLinearGradient style={styles.signInBtn}>
            <Text style={styles.signInBtnText}>Continue</Text>
          </CommonLinearGradient>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default PersonalInfo;
