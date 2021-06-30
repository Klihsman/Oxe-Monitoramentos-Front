/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState, useContext} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {DefaultTheme, Appbar} from 'react-native-paper';
import {Context, StateContext} from '../context/Context';


const Header = ({navigation, status:status2}) => {
    const [status, setStatus] = useState(false);
    const {state} = useContext(StateContext);
    const { actions } = useContext(StateContext);

    const theme = {
        ...DefaultTheme,
        roundness: 1,
        colors: {
          ...DefaultTheme.colors,
          primary: '#00838f',
        },
        fonts: {
          myFont: 'anton',
        },
      };

  const _goBack = () => {
    setStatus(!status);
    navigation.navigate('Home');
  };

  const _handleSearch = () => {
    setStatus(!status);
  };

  const _handleMore = () => console.warn('Shown more');

  return (
    <Appbar.Header theme={theme} style={style.Container}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content
      title="Monitoramento"
      subtitle="Saúde próxima de você"
      style={{display: status ? 'none' : 'flex'}}
      />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const style = StyleSheet.create({
    Container: {
        height: 80,
    },
    InputEnable: {
      backfaceVisibility: 'visible',
      flexGrow: 1,
      height: '50%',
      backgroundColor: '#fff',
      paddingLeft: 7,
      borderRadius: 4,
    },
    InputDisable: {
      backfaceVisibility: 'hidden',
      width: 0,
    },
});


export default Header;
