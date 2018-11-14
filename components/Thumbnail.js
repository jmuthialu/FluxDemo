import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
} from 'react-native';

const Thumbnail = ({ style, titleText, url }) => {

  const TitleComponent = <Text style={styles.title}>{titleText}</Text>;

  return (
    <View style={[styles.container, style]}>
      {url.length > 0 ? (
        <ImageBackground
          style={[styles.image]}
          source={{
            uri: url
          }}
        >
          {TitleComponent}
        </ImageBackground>
      ) : (
        <View
          style={[styles.image, imageStyle]}
        >
          {TitleComponent}
        </View>
      )}
    </View>
  );
};

Thumbnail.propTypes = {
  style: PropTypes.style,
  url: PropTypes.string.isRequired,
  accentColor: PropTypes.string.isRequired,
  titleText: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderStyle: 'solid'
  },
  image: {
    height: 250,
    justifyContent: 'flex-end',
  },
  title: {
    padding: 5,
    color: "#fff",
    fontWeight: '900',
    fontSize: 20
  }
});

export default Thumbnail;
