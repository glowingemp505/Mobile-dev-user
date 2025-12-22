import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants/routes';

import { navigationRef} from '../utils/navigation/navigation';
import Login from '../pages/auth/login/Login';
import Onboarding from '../pages/auth/onboarding/Onboarding';
import Signup from '../pages/auth/signup/Signup';



const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ROUTES.ONBOARDING}
      >
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        <Stack.Screen name={ROUTES.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={ROUTES.SIGNUP} component={Signup} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
