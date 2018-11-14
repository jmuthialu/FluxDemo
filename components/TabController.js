import React, { Component } from 'react';
import {
  TabBarIOS,
} from 'react-native';
import NewsFeed from './NewsFeed';
import Search from './Search';

export default class TabController extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'newsfeed'
    }
  }

  render() {
    return(
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon={`featured`}
          selected={this.state.tab === 'newsfeed'}
          onPress={() => this.setState({ tab: 'newsfeed' })}
        >
          <NewsFeed />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon={'search'}
          selected={this.state.tab === 'search'}
          onPress={ () => this.setState({tab: 'search'}) }
        >
          <Search />
        </TabBarIOS.Item>

      </TabBarIOS>
    );
  }

}
