import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes'

const Router = () => (
  <NavigationContainer>
    <StackRoutes/>
  </NavigationContainer>
)

export default Router;