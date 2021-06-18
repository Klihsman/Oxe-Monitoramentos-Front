/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CardIns from './Card';
import Header from './Header';

export default props => {
  return (
    <SafeAreaView style={style.Container}>
      <Header />
      <ScrollView
       contentContainerStyle={style.Content}
       style={style.EditScroll}>
        <CardIns />
        <CardIns />
        <CardIns />
        <CardIns />
        <CardIns />
        <CardIns />
        <CardIns />
      </ScrollView>
    </SafeAreaView>
  );
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

