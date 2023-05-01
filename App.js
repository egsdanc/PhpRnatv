import { View, Text, Button ,FlatList} from 'react-native'
import React ,{useState,useEffect}  from 'react'
import { Component } from 'react';
import axios from 'axios';
 
import Card from './Card';
// http://192.168.1.146/react-native-insert/list.php
  


  function App () {
 const [users,setUsers]=useState([]);
 

 async function  fetcData()
{
   const response = await axios.get('http://192.168.1.146/react-native-insert/list.php',)
 
   setUsers(response.data)
  
   
}  
 
useEffect(()=>
{
  fetcData()

},[users] )

const renderUser =({item}) => <Card name={item.name} email={item.email}/> ;
  return (
    
    <View>
  
  
    
    
   <FlatList data={users} renderItem={renderUser}/>
   
    </View>
    
  )
}

export default App





//<Button title='data' onPress={fetcData}></Button>