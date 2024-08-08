import React, { useCallback,  useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable
} from 'react-native';
import { colorGenerator } from '../helpers/color';
import { DEFAULT_BACKGROUND_COLOR, TEXT_PRIMARY, TEXT_SECONDARY } from '../constants/constants';

export const App = () => {
  const [background, setBackground] = useState<string>(DEFAULT_BACKGROUND_COLOR);
  const [textColor, setTextColor] = useState<string>(TEXT_PRIMARY);

  const handleChangeBackground = useCallback(() => {
    const generatedColor = colorGenerator();
    setBackground(generatedColor.color);
    setTextColor(generatedColor.isDark ? TEXT_SECONDARY : TEXT_PRIMARY);
  }, [])

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleChangeBackground}
        style={styles.section}
      >
        <View style={[styles.bgView, {backgroundColor: background}]} />
        <Text
          style={[styles.text, {color: textColor}]}
          testID="text-hello"
        >
          Hello there
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 48,
    fontWeight: '600'
  },
  bgView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    overflow: "hidden"
  },
});

export default App;
