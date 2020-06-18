import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import HomeView from './src/views/HomeView';
import GameView from './src/views/GameView';


const navigator = createStackNavigator({
    Home:HomeView,
    Game:GameView  
  },
  {
    initialRouteName: "Home",
    headerMode:"none"
  }
) 

export default createAppContainer(navigator)