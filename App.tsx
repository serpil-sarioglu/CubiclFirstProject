/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

//1- Stil Kullanımı
// const App = () => {
//   return (
//     // <SafeAreaView
//     //   style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     //   <Text>Cubicl Developer Bootcamp React Native Eğitimi</Text>
//     // </SafeAreaView>

//     <SafeAreaView>
//       <Text>Cubicl Developer Bootcamp React Native Eğitimi</Text>
//       <Text style={styles.textName}>Eğitmen: Çağlar Keskin</Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   textName: {
//     color: 'red',
//     fontSize: 20,
//     fontWeight: '200',
//     justifyContent: 'center',
//     textAlign: 'center',
//   },
// });

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require('./img/logo-light.png')} /> */}
      <Image
        style={styles.logo}
        source={{uri: 'https://cubicl.io/assets/img/logo-light.png'}}
      />
      <TextInput
        style={styles.input}
        placeholder={'E-Posta Adresi'}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.input}
        placeholder={'Şifreniz'}
        autoCapitalize={'none'}
        secureTextEntry={true}
      />
      {/* <Button
        color={'red'}
        title={'Giriş Yap'}
        onPress={() => {
          console.log('Giriş Yapıldı.');
        }}
      /> */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          console.log('Giriş Yap Butonu Tıklandı.');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <View style={styles.bottomSection}>
        <Text
          onPress={() => {
            console.log('Kayıt Ol Tıklandı.');
          }}
          style={styles.bottomText}>
          Kayıt Ol
        </Text>
        <Text
          onPress={() => {
            console.log('Şifremi Unuttum Tıklandı.');
          }}
          style={styles.bottomText}>
          Şifremi Unuttum
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffde66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 50,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    height: 40,
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 0,
  },
  button: {
    width: '80%',
    backgroundColor: '#FFFFFFBA',
    height: 50,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffde66',
    fontWeight: 'bold',
    fontSize: 23,
  },
  bottomSection: {
    width: '80%',
    height: 30,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between', // flexDirection row olduğu için yatay hizalama sağlar.
    alignItems: 'center',
  },
  bottomText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default App;
