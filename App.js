import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/components/AppContainer';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppContainer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
});
