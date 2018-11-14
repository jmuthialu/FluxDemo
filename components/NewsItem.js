
import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import ThumbNail from './Thumbnail';
import {articleWatched} from '../Flux/actions';

export default class NewsItem extends Component {
  render() {
    const { 
      imageUrl,
      title,
      author,
      date,
      location,
      description
    } = this.props
    console.log({description});
    return(
      <View>
        <TouchableOpacity onPress={articleWatched}> 
          <ThumbNail
            url={imageUrl}
            titleText = {title}
          />
          <Text style={styles.cardText}>
            {description}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardText: {
    padding: 5,
    paddingBottom: 20,
    fontWeight: 'bold',
    fontSize: 20
  }
});