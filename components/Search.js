import React, {Component} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import * as utils from '../utils/SharedUtils';

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  render() {
    return(
      <View style={utils.sharedStyles.container}>
        <View style={styles.searchContainer}> 
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => {this.setState({searchText: text})}}
            value={this.state.searchText}
            placeholder={'search ...'}
            placeholderTextColor={utils.MUTED_COLOR}
          /> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchContainer: {
    borderColor: utils.MUTED_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
  }
})