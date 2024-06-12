// App.js
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Image360Viewer from 'image360viewer';

export default function App() {
  const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300/?blur',
    'https://picsum.photos/id/870/200/300?grayscale&blur=2'
  ];

  return (
    <View style={styles.container}>
      <Image360Viewer
        src={images}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
