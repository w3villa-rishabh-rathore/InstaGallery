import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';
import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';

export default function Gallery() {
  const [render, setRender] = useState(true);

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > Math.abs(gestureState.dy) && Math.abs(gestureState.dx) > 50;
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 60) {
          console.log('Swipe Right');
          setRender(true); // Show PhotoGallery
        } else if (gestureState.dx < -60) {
          console.log('Swipe Left');
          setRender(false); // Show VideoGallery
        }
      },
    })
  ).current;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.tabBar}>
        <Text style={styles.tab} onPress={() => setRender(true)}>Photos</Text>
        <Text style={styles.tab} onPress={() => setRender(false)}>Videos</Text>
      </View>

      <View
        style={styles.content}
        {...panResponder.panHandlers} // ✅ Attach handlers here
      >
        {render ? (
          <View>
              <PhotoGallery/>
          </View>
        ) : (
           <View>
              <VideoGallery/>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    backgroundColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tab: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  gallery: {
    fontSize: 22,
  },
});
