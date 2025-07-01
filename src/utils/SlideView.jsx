
import {useRef , useEffect} from 'react'
import {Animated} from 'react-native'

const SlideInView = ({ children }) => {
  const slideAnim = useRef(new Animated.Value(500)).current; // start off-screen below

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0, // slide to original position
      
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateY: slideAnim }] }}>
      {children}
    </Animated.View>
  );
};

export default SlideInView;