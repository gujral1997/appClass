import React from 'react'
import { View, Text, Dimensions, StyleSheet} from 'react-native'
const center = {
  alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderRightColor: 'transparent'
}

const color = {
 color: 'white'
}

const { width, height } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.subView}>
        <View style={{backgroundColor: 'red', flex: 1, ...center }}>
        <Text style={{...color}}>1</Text>
        </View>
        <View style={{backgroundColor: 'green', flex: 1, ...center}}>
        <Text>2</Text>
        </View>
        <View style={{backgroundColor: 'purple', flex: 1}}/>
      </View>
      <View style={styles.subView}>
        <View style={{backgroundColor: 'yellow', flex: 1}}/>
        <View style={{backgroundColor: 'pink', flex: 1}}/>
        <View style={{backgroundColor: 'magenta', flex: 1}}/>
      </View>
      <View style={styles.subView}>
        <View style={{backgroundColor: 'green', flex: 1}}/>
        <View style={{backgroundColor: 'purple', flex: 1}}/>
        <View style={{backgroundColor: 'yellow', flex: 1}}/>
      </View>
      <View style={styles.subView}>
        <View style={{backgroundColor: 'yellow', flex: 1}}/>
        <View style={{backgroundColor: 'orange', flex: 1}}/>
        <View style={{backgroundColor: 'green', flex: 1}}/>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    height: height,
    width: width,
    backgroundColor: 'white'
  },
  subView: {
    height: height/4,
    width: width,
    flexDirection: 'row',
    backgroundColor: 'blue'
  }
})

//rgba(1, 1, 1, 0.1)
// rgb
// #ffffff