import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AboutMe from './screens/AboutMeScreen.js';
import MyLanguages from './screens/ProgrammingLanguagesScreen.js';
import NotFound from './screens/NotFoundScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const NotFoundStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NotFound" component={NotFound} />
    </Stack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AboutMe" component={AboutMe} />
      <Tab.Screen name="MyLanguages" component={MyLanguages} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="NotFound" component={NotFoundStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;