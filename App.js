import React from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'

const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: 'rgba(255,0, 0, 0.2)',alignItems: 'center', justifyContent: 'center',flex: 1, height:height}}/>
        <View style={{backgroundColor: 'yellow',flex: 0.1, height:height}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    backgroundColor: 'white',
    flexDirection: 'row'
  }
})

//rgba(1, 1, 1, 0.1)
// rgb
// #ffffff