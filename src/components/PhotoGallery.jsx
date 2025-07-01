import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';
import SlideInView from '../utils/SlideView'

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth / numColumns;


const images = Array.from({ length: 1500}).map((_, i) => ({
    id: i.toString(),
    uri: `https://picsum.photos/seed/${i+1}/300/300`,
}));


const PhotoGallery = () => {

    const [previewImage, setPreviewImage] = useState("");
    const [modalContent, setModalContent] = useState(false);


    const handlePreview = (url) => {

        setPreviewImage(url);
        setModalContent(true);
    }


    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.imageContainer} onPress={() => handlePreview(item.uri)}>
            <Image source={{ uri: item.uri }} style={styles.image} />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <SlideInView>

                <FlatList
                    data={images}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    showsVerticalScrollIndicator={false}
                />


                <Modal visible={modalContent} transparent animationType="fade">
                    <View style={styles.modalOverlay}>
                        <TouchableOpacity style={styles.closeArea} onPress={() => setModalContent(false)}>
                            <Image
                                source={{ uri: previewImage }}
                                style={styles.previewImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </Modal>

            </SlideInView>


        </View>
    );
};

export default PhotoGallery;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100%'
    },
    imageContainer: {
        width: imageSize,
        height: imageSize,
        padding: 2,
    },
    image: {
        flex: 1,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    previewImage: {
        width: '90%',
        height: '90%',
    },
    closeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});
