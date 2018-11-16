import * as React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';

export default class AttributionLink extends React.Component {
  /**
   * Renders the attribution link, needed to include News API feed
   * @return {JSX.Element}
   */
  render() {
    return (
      <Text style={styles.text} onPress={() => Linking.openURL(this.props.url)}>
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
