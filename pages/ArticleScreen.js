import * as React from 'react';
import {
  Text,
  View,
  Linking,
  StyleSheet,
  Image,
  Button,
} from 'react-native';

export default class ArticleScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const title = navigation.getParam('title', '');
    const content = navigation.getParam('content', '');
    const image = navigation.getParam('image', '');
    const url = navigation.getParam('url', '#');
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {title}
              {'\n'}
              {'\n'}
            </Text>
            <Text>{content}</Text>
          </Text>
        </View>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Button
          title="View in browser"
          color="#03A9F4"
          accessibilityLabel="Read in browser"
          onPress={() => Linking.openURL(url)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#696969',
    margin: 10,
    padding: 5,
  },
  textContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  baseText: {
    fontSize: 16,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
