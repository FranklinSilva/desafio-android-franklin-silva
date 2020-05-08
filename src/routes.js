import React from 'react';
import {createSwitchNavigator, NavigationEvents }  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';

import Welcome from './pages/welcome';
import Character from './pages/character';
import Hq from './pages/hq';


export const Main = createStackNavigator({
    Welcome: {
      screen: Welcome,
    },
    Character: {
      screen: Character
    },
    Hq: {
      screen: Hq
    }
},       
{
  headerMode: null
});

export const createRootNavigator = () => {

    return createSwitchNavigator({
        Main: {
          screen: Main
        },
      },
      {
        initialRouteName: "Main"
      },
    );
  };
