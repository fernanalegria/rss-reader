import * as React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';

export default class Hr extends React.Component {
  render() {
    return (
      <Text
        style={styles.text}
        onPress={() => Linking.openURL(this.props.url)}>
        {this.props.text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'blue',
  },
});
