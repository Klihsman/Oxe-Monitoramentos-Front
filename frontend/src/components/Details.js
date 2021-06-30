/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import {Card, Avatar, IconButton, Button} from 'react-native-paper';

import DetailsHeader from './DetailsHeader';

export default function Details ({navigation}){

  return (
    <>
    <DetailsHeader navigation={navigation}/>
   <SafeAreaView  style={style.Container}>
     <View style={style.InfoContainer}>
     <Card.Title
        titleStyle={style.Title}
        title="Hospital Sousa"
        subtitle="Hospital"
        left={(props) => <Avatar.Icon style={style.Avatar} {...props} icon="hospital" />}
        right={(props) => <IconButton {...props} icon="phone" onPress={() => {}} />}
      />
       <Card.Cover source={{ uri: 'https://picsum.photos/700' }}/>
       <View style={style.BoxInfo}>
         <Text style={style.TitleBox}>Informações</Text>
         <View style={style.BoxOrganization}>
            <View style={style.Column}>
              <View style={style.Info}>
                <Text style={style.TitleInfo}>Leitos (vagos)</Text>
                <Text style={style.Paragraph}>23 (10)</Text>
              </View>
              <View style={style.Info}>
                <Text style={style.TitleInfo}>Enfermaria (vagos)</Text>
                <Text style={style.Paragraph}>13 (5)</Text>
              </View>
              <View style={style.Info}>
                <Text style={style.TitleInfo}>UTI (vagos)</Text>
                <Text style={style.Paragraph}>10 (5)</Text>
              </View>
            </View>
            <View style={[style.Column, style.ColumnEx]}>
              <View style={style.Info}>
                <Text style={style.TitleInfo}>Rua</Text>
                <Text style={style.Paragraph}>João da Silva</Text>
              </View>
              <View style={style.Info}>
                <Text style={style.TitleInfo}>Bairro</Text>
                <Text style={style.Paragraph}>Por da Lua</Text>
              </View>
              <View style={style.Info}>
                <Text style={style.TitleInfo}>Ponto de referência</Text>
                <Text style={style.Paragraph}>Próximo à prefeitura</Text>
              </View>
              <Button color="#fff" style={style.Button}>Gerar rota</Button>
            </View>
         </View>
       </View>
     </View>
   </SafeAreaView>
   </>
  );
}

Details.navigationOptions = {
  title: 'Details',
};

const style = StyleSheet.create({
  Container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
  },
  InfoContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  TitleBox: {
    height: '10%',
    width: '100%',
    textAlign: 'center',
    color: '#00838f',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '2%',
  },
  BoxInfo: {
    height: '45%',
    width: '100%',
  },
  BoxOrganization: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexGrow: 1,
  },
  Column: {
    height: '90%',
    width: '50%',
    paddingLeft: 10,
  },
  ColumnEx: {
    borderLeftWidth: 1,
    borderLeftColor: '#00838f',
  },
  TitleContainer: {
    paddingLeft: 8,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TitleInfo: {
    color: '#00838f',
    fontSize: 15,
    fontWeight: '700',
  },
  Paragraph: {
    color: '#000',
  },
  Title: {
    color: '#00838f',
  },
  Avatar: {
    backgroundColor: '#00838f',
  },
  Info: {
    height: '5%',
    flexGrow: 1,
  },
  Button: {
    width: '95%',
    backgroundColor: '#00838f',
    marginBottom: '1%',
  },
});

