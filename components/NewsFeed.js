import React, { Component} from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import NewsItem from './NewsItem';
import * as utils from '../utils/SharedUtils';
import {reset} from '../Flux/actions';
import ArticleStore from '../Flux/Store';

export default class NewsFeed extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.title !== row2.title
    });
    this.state = {
      dataSource: this.ds.cloneWithRows(props.news),
      article: ArticleStore.getCount()
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    ArticleStore.addChangeListeners(this.updateState);
  }

  componentWillUnmount() {
    ArticleStore.removeChangeListeners(this.updateState);
  }
  
  updateState() {
    this.setState({
      article: ArticleStore.getCount()
    });
  }

  render() {
    return(
      <View style={utils.sharedStyles.container}>
        <Text style={styles.listHeader}>
          Articles Watched: {this.state.article.count} 
        </Text>
        <TouchableOpacity onPress={reset}>
          <Text style={[styles.listHeader, {color: 'red'}]}>Reset</Text>
        </TouchableOpacity>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(dataItem) => <NewsItem { ...dataItem } />}
        />
      </View>
    );
  }
}

NewsFeed.defaultProps = {
  news:[
    {
      title: 'Sublime antiquities',
      imageUrl: 'https://dynaimage.cdn.turner.com/cnn/q_auto:eco/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181016151847-davide-quayola-2-exlarge-11.jpg',
      description: 'Art by industrial robot',
      date: new Date(),
      author: 'Jay Muthialu',
      location: 'CA',
      url: 'https://facebook.github.io/react-native',
    },
    {
      title: 'Designers',
      imageUrl: 'https://dynaimage.cdn.turner.com/cnn/q_auto:eco/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181019171025-r-shemiste-video-synd-2.jpg',
      description: 'Seol - Designers tackle war',
      date: new Date(),
      author: 'Jay',
      location: 'GA',
      url: 'https://www.packtpub.com/'
    },
    {
      title: 'Flight Travel',
      imageUrl: 'https://dynaimage.cdn.turner.com/cnn/q_auto:eco/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181022020558-ryanair-passenger-rant-video-synd-2.jpg',
      description: 'Your experience of flight travel',
      date: new Date(),
      author: 'Jay Muthialu',
      location: 'CA',
      url: 'https://facebook.github.io/react-native',
    },
    {
      title: 'Weather',
      imageUrl: 'https://dynaimage.cdn.turner.com/cnn/q_auto:eco/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181022084451-hurricane-willa-satellite-vis-10222018-video-synd-2.jpg',
      description: 'Hurricane Michael gathers steam',
      date: new Date(),
      author: 'Jay',
      location: 'GA',
      url: 'https://www.packtpub.com/'
    },    {
      title: 'Istanbul',
      imageUrl: 'https://dynaimage.cdn.turner.com/cnn/q_auto:eco/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181004131052-yener-totun-4-video-synd-2.jpg',
      description: 'Crayon-colored vision',
      date: new Date(),
      author: 'Jay Muthialu',
      location: 'CA',
      url: 'https://facebook.github.io/react-native',
    },
    {
      title: 'Samurai',
      imageUrl: 'https://dynaimage.cdn.turner.com/cnn/q_auto:eco/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181004110429-samurai-sword-tease-1-video-synd-2.jpg',
      description: "Japan's samurai swordsmiths",
      date: new Date(),
      author: 'Jay',
      location: 'GA',
      url: 'https://www.packtpub.com/'
    }
  ]
}

const styles = StyleSheet.create({
  listHeader: {
    margin:5,
    fontSize: 20,
    fontWeight: 'bold'
  }
})