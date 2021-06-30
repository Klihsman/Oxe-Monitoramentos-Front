/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Card, Button} from 'react-native-paper';

const CardIns = ({navigation}) => {

 return (
      <Card style={style.Card}>
        <View style={style.TitleContainer}>
          <Text style={style.Title}>Hospital Santo Antonio</Text>
          <View style={style.InfoContainer}>
            <Text style={style.Info1}>10</Text>
            <Text style={style.Info2}>10</Text>
          </View>
        </View>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Actions style={style.Actions}>
        <Button
        color="#00838f"
        onPress={() => {navigation.navigate('Details');}}>Ver detalhes</Button>
        </Card.Actions>
      </Card>
  );
 };

 CardIns.navigationOptions = {
  title: 'Home',
};

const style = StyleSheet.create({
  Card: {
    width: '96%',
    justifyContent: 'center',
    marginTop: '1.5%',
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  TitleContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Title: {
      fontSize: 18,
      fontWeight: '800',
      color: '#00838f',
      textAlign: 'center',
      padding: 10,
  },
  InfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  Info1: {
    color: 'green',
    marginRight: '5%',
  },
  Info2: {
    color: 'red',
  },
  Actions: {
    justifyContent: 'center',
  },
  Moment: {
    flexGrow: 1,
  },
});

export default CardIns;
