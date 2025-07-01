import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';

export default function Gallery() {
  const [render, setRender] = useState(true);

  console.log("Gallery Rendered");
  console.log("Render State: ", render);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setRender(true)}>
          <Text style={styles.tab}>Photos Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRender(false)}>
          <Text style={styles.tab}>Video Gallery</Text>
        </TouchableOpacity>
      </View>

      {/* ✅ Correct conditional render */}
      {render ? <PhotoGallery /> : <VideoGallery />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: "space-evenly",
    backgroundColor: "white",
    height: 45,
    flexDirection: 'row',
  },
  tab: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  }
});
