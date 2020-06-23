import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import HomeView from './src/views/HomeView';
import GameView from './src/views/GameView';
import AnswerView from './src/views/AnswerView';


const navigator = createStackNavigator({
    Home:HomeView,
    Game:GameView,
    Answer:AnswerView
  },
  {
    initialRouteName: "Home",
    headerMode:"none"
  }
) 

export default createAppContainer(navigator)