import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/core';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
// import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import {Button} from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen)
  }

  return(
    <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.emoji}>
            {emojis[icon]}
          </Text>

          <Text style={styles.title}>
            {title}
          </Text>

          <Text style={styles.subtitle}>
            {subtitle}
          </Text>

          <View style={styles.footer}>
            <Button 
              title={buttonTitle} 
              onPress={handleMoveOn}
            />
          </View>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  emoji:{
    fontSize: 78,
    // marginTop: getStatusBarHeight(),
  },
  title: {
    fontSize: 22,
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.heading,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  footer: {
    width: '100%',
    marginTop: 40,
    paddingHorizontal: 50
  }
})