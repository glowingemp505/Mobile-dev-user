import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants/routes";

import { navigationRef } from "../utils/navigation/navigation";
import Login from "../pages/auth/login/Login";
import Onboarding from "../pages/auth/onboarding/Onboarding";
import Signup from "../pages/auth/signup/Signup";
import VerifyEmail from "../pages/auth/verify-email";
import PersonalInfo from "../pages/profile/personal-Info";
import ChooseYourPlan from "src/pages/profile/choose-your-plan";
import PaymentDetails from "src/pages/profile/payment-details";
import LinkYourBank from "src/pages/profile/link-your-bank";
import YoureAllSet from "src/pages/profile/youre-all-set";
import CustomBottomTabBar from "./CustomBottomTabBar";
import Settings from "src/pages/profile/setting";
import ForgotPassword from "src/pages/auth/forgot-password";
import ResetPassword from "src/pages/auth/reset-password";
import Notifications from "src/pages/notifications";

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName={ROUTES.HOME}
      >
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.ForgotPassword} component={ForgotPassword} />
        <Stack.Screen name={ROUTES.ResetPassword} component={ResetPassword} />
        <Stack.Screen name={ROUTES.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={ROUTES.SIGNUP} component={Signup} />
        <Stack.Screen name={ROUTES.VerifyEmail} component={VerifyEmail} />
        <Stack.Screen name={ROUTES.PersonalInfo} component={PersonalInfo} />
        <Stack.Screen name={ROUTES.ChooseYourPlan} component={ChooseYourPlan} />
        {/* <Stack.Screen name={ROUTES.PaymentDetails} component={PaymentDetails} /> */}
        <Stack.Screen name={ROUTES.LinkYourBank} component={LinkYourBank} />
        <Stack.Screen name={ROUTES.YoureAllSet} component={YoureAllSet} />
        <Stack.Screen name={ROUTES.HOME} component={CustomBottomTabBar} />
        <Stack.Screen name={ROUTES.Settings} component={Settings} />
        <Stack.Screen name={ROUTES.Notifications} component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
