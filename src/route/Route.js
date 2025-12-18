import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '../constants/routes';

import { navigationRef} from '../utils/navigation/navigation';
import Login from '../pages/auth/login/Login';



const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={ROUTES.LOGIN}
      >
        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
