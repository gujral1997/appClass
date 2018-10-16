import React from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'

const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: 'blue',alignItems: 'center', justifyContent: 'center',flex: 1, width:width}}/>
        <View style={{backgroundColor: 'yellow',flex: 0.1, width:width}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    backgroundColor: 'red'
  }
})