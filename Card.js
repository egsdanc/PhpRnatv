  import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import App from './App'
 
const Card = (props) => {
  return (
    <View style={styles.card}>
       <View style={styles.cardlar}>
      <Text>{props.name}</Text>
      <Text  style={styles.text}>{props.email}</Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
card: {
 borderRadius: 6,
 elevation: 3,
 backgroundColor: "green",
 textShadowOffset: {width:1,height: 1},
 shadowColor: "red",
 shadowOpacity: 0.3,
 marginHorizontal: 4,
 shadowRadius: 2,
 marginVertical: 10
},
cardlar: {
 marginHorizontal: 18,
 marginVertical: 10
},
text:{
    textAlign: 'right',
    color: 'red'
}  

}
)



 
export default Card    