import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RandomNameForm} from './components/RandomNameForm';
import {RandomTavernForm} from './components/RandomTavernForm';
import {RandomAdventureHookForm} from './components/RandomAdventureHookForm';
import PageLayout from './containers/PageLayout';
import {Colors, getIconForPage} from './utilities';

const customFonts = {
  'Nodesto': require('./assets/fonts/NodestoCapsCondensed.otf'),
  'Bookinsanity': require('./assets/fonts/Bookinsanity.otf'),
  'MrEaves': require('./assets/fonts/MrEavesSmallCaps.otf'),
  'ScalySans': require('./assets/fonts/ScalySans.otf')
}

const RandomNamePage = () => {
  return (
    <PageLayout>
      <RandomNameForm />
    </PageLayout>
  )
}

const RandomTavernPage = () => {
  return (
    <PageLayout>
      <RandomTavernForm />
    </PageLayout>
  )
}

const RandomHookPage = () => {
  return (
    <PageLayout>
      <RandomAdventureHookForm />
    </PageLayout>
  )
}

const Tab = createBottomTabNavigator();
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const componentDidMount = async () => {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    }

    componentDidMount();
  }, [])

  return fontsLoaded &&
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: () => {
            return getIconForPage(route.name);
          },
          tabBarStyle: {
            backgroundColor: Colors.black
          },
          tabBarActiveBackgroundColor: Colors.dark,
          tabBarActiveTintColor: Colors.primaryBright,
          tabBarInactiveBackgroundColor: Colors.black,
          tabBarInactiveTintColor: Colors.info,
          tabBarItemStyle: {
            paddingVertical: 10,
          }
        })}>
        <Tab.Screen name="PC Name" component={RandomNamePage} />
        <Tab.Screen name="Tavern Name" component={RandomTavernPage} />
        <Tab.Screen name="Adventure Hook" component={RandomHookPage} />
      </Tab.Navigator>
    </NavigationContainer>;
}
