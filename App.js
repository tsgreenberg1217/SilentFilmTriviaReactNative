import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import HomeView from './screens/HomeView';


const navigator = createStackNavigator({
    Home:HomeView  
  },
  {
    initialRouteName: "Home",
    headerMode:"none"
  }
) 

export default createAppContainer(navigator)