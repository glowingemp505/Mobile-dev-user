import {
  Image,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { appIcons } from "src/utils/assets";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import { colors, commonStyles } from "src/utils/styles";
import CustomDropDown from "src/components/CustomDropDown";
import CommonLinearGradient from "src/components/CommonLinearGradient";
import { Formik } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const personalInfoValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  incomeValue: Yup.string().required("Monthly Income is required"),
  currencyValue: Yup.string().required("Currency is required"),
  budgetValue: Yup.string().required("Monthly Budget Goal is required"),
  selectedTab: Yup.number().required("Please select a primary category"),
});

const PersonalInfo = () => {
  const navigation = useNavigation();

  const categoryData = [
    { id: 1, title: "Next" },
    { id: 2, title: "Food" },
    { id: 3, title: "Transport" },
    { id: 4, title: "Shopping" },
    { id: 5, title: "Entertainment" },
  ];

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
      <Formik
        initialValues={{
          fullName: "",
          incomeValue: "",
          currencyValue: "",
          budgetValue: "",
          selectedTab: null,
        }}
        validationSchema={personalInfoValidationSchema}
        onSubmit={(values) => {
          console.log("Personal Info Submitted:", values);
          navigation.navigate("ChooseYourPlan");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
          isValid,
        }) => {
          const renderItem = ({ item }) => {
            const selectedTabItem = item.id === values.selectedTab;
            return (
              <TouchableOpacity
                onPress={() => setFieldValue("selectedTab", item.id)}
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

          return (
            <>
              <View style={styles.wrapper}>
                <View style={styles.topRow}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.topCircle}
                    onPress={() => navigation.goBack()}
                  >
                    <Image
                      source={appIcons.leftArrow}
                      style={styles.leftArrow}
                    />
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
                      value={values.fullName}
                      onChangeText={handleChange("fullName")}
                      onBlur={handleBlur("fullName")}
                    />
                  </View>
                  {touched.fullName && errors.fullName && (
                    <Text style={commonStyles.errorText}>
                      {errors.fullName}
                    </Text>
                  )}
                </View>

                {/* Monthly Income */}
                <View style={styles.inputView}>
                  <Text style={styles.title}>Monthly Income</Text>
                  <CustomDropDown
                    data={incomeData}
                    placeholder="5,000 - 7,500"
                    value={values.incomeValue}
                    onSelect={(val) => setFieldValue("incomeValue", val)}
                    leftIcon={
                      <Image
                        source={appIcons.dollarupdate}
                        style={styles.dollarSign}
                      />
                    }
                    rightIcon={<appIcons.down />}
                  />
                  {touched.incomeValue && errors.incomeValue && (
                    <Text style={commonStyles.errorText}>
                      {errors.incomeValue}
                    </Text>
                  )}
                </View>

                {/* Currency */}
                <View style={styles.inputView}>
                  <Text style={styles.title}>Currency</Text>
                  <CustomDropDown
                    data={currencyData}
                    placeholder="USD - $"
                    value={values.currencyValue}
                    onSelect={(val) => setFieldValue("currencyValue", val)}
                    leftIcon={<appIcons.globe />}
                    rightIcon={<appIcons.down />}
                  />
                  {touched.currencyValue && errors.currencyValue && (
                    <Text style={commonStyles.errorText}>
                      {errors.currencyValue}
                    </Text>
                  )}
                </View>

                {/* Monthly Budget Goal */}
                <View style={styles.inputView}>
                  <Text style={styles.title}>Monthly Budget Goal</Text>
                  <CustomDropDown
                    data={budgetData}
                    placeholder="1,000 - 2,500"
                    value={values.budgetValue}
                    onSelect={(val) => setFieldValue("budgetValue", val)}
                    leftIcon={<appIcons.target />}
                    rightIcon={<appIcons.down />}
                  />
                  {touched.budgetValue && errors.budgetValue && (
                    <Text style={commonStyles.errorText}>
                      {errors.budgetValue}
                    </Text>
                  )}
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
                  {touched.selectedTab && errors.selectedTab && (
                    <Text style={commonStyles.errorText}>
                      {errors.selectedTab}
                    </Text>
                  )}
                </View>

                {/* Continue Button */}
                <TouchableOpacity
                  style={{ width: "100%", marginTop: 15 }}
                  activeOpacity={0.5}
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <CommonLinearGradient
                    style={[styles.signInBtn, { opacity: !isValid ? 0.6 : 1 }]}
                  >
                    <Text style={styles.signInBtnText}>Continue</Text>
                  </CommonLinearGradient>
                </TouchableOpacity>
              </KeyboardAwareScrollView>
            </>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default PersonalInfo;
