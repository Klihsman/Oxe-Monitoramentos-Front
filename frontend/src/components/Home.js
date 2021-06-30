/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CardIns from './Card';
import Header from './Header';

export default function Home ({navigation}){
  return (
    <>
    <Header navigation={navigation} />
    <SafeAreaView style={style.Container}>
      <ScrollView
       contentContainerStyle={style.Content}
       style={style.EditScroll}>
        <CardIns navigation= {navigation}/>
        <CardIns navigation= {navigation}/>
        <CardIns navigation= {navigation} />
        <CardIns navigation= {navigation} />
      </ScrollView>
    </SafeAreaView>
    </>
  );
}

Home.navigationOptions = {
  title: 'Home',
};

const style = StyleSheet.create({
    Container: {
      width: '100%',
      flexGrow: 1,
    },
    EditScroll: {
      flex: 1,
      flexGrow: 1,
      width: '100%',
    },
    Content: {
      alignItems: 'center',
    },
});

