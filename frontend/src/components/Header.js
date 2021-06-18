/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import {DefaultTheme, Appbar} from 'react-native-paper';


const Header = () => {
    const [status, setStatus] = useState(false);

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
  };

  const _handleSearch = () => {
    setStatus(!status);
  };

  const _handleMore = () => console.warn('Shown more');

  return (
    <Appbar.Header theme={theme} style={style.Container}>
      {status ?
        <Appbar.BackAction onPress={_goBack} />
        :
        <Appbar.Action icon="menu" onPress={_handleSearch}/>
      }
      <TextInput
        placeholder="Pesquise por uma instituição ou cidade"
        style={status ? style.InputEnable : style.InputDisable}
      />
      <Appbar.Content
      title="Monitoramento"
      subtitle="Saúde próxima de você"
      style={{display: status ? 'none':'flex'}}
      />
      <Appbar.Action style={{display: status ? 'none':'flex'}} icon="magnify" onPress={_handleSearch} />
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
      width: '78%',
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
