import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.baseText, styles.title]}>The last of Us!</Text>
      <Text style={[styles.baseText, styles.info]}>
        <Text style={styles.label}>Data de lançamento: </Text>14/06/2013</Text>
        <Image source={{ uri: 'https://img.olhardigital.com.br/wp-content/uploads/2021/03/Arte-promociomal-do-primeiro-jogo-de-The-Last-of-Us-scaled.jpg' }}
        style={{width: 300, height: 500}}/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 50,
  },

  baseText: {
    color: 'white',
  },

  title: {
    fontSize: 36,
  },

  info: {
    fontSize: 24,
},
  label: {
    fontWeight: 500,
  }

});
