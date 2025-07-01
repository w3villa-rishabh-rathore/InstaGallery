import React, { useState } from 'react';
import {
    View,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Modal
} from 'react-native';
import SlideInView from '../utils/SlideView'

const screenWidth = Dimensions.get('window').width;
const numColumns = 3;
const itemSize = screenWidth / numColumns;

import Video from 'react-native-video';

import videos from './videoData'


const VideoGallery = () => {
    const [selectedVideo, setSelectedVideo] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const openVideo = (video) => {

        console.log(video.sources[0]);
        setSelectedVideo(video.sources[0]);
        setModalVisible(true);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => openVideo(item)}
            style={styles.itemContainer}
        >
            <Image
                source={{ uri: item.thumb }}
                style={styles.thumbnail}
                resizeMode="cover"
            />

        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <SlideInView>
                <FlatList
                    data={videos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                    numColumns={numColumns}
                    showsVerticalScrollIndicator={false}
                />


                <Modal visible={modalVisible} transparent={true}>
                    <View style={styles.modalOverlay}>
                        <TouchableOpacity style={styles.closeArea} onPress={() => setModalVisible(false)}>



                            <Video
                                source={{ uri: selectedVideo }}
                                style={{ width: '100%', aspectRatio: 16 / 9 }}
                                controls
                            />

                        </TouchableOpacity>
                    </View>

                </Modal>



            </SlideInView>
        </View>
    );
};

export default VideoGallery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        width: itemSize,
        height: itemSize * 2,
        padding: 2,
    },
    thumbnail: {
        width: '100%',
        height: '100%',
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    modalTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    video: {
        width: '100%',
        height: 250,
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        zIndex: 2,
    },
    closeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
