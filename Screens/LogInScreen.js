import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-web'
import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { firebaseConfig } from '../firebase'


const LogInScreen = () => {

  const [email, setemail]=useState('')
  const [pasword, setpasword]=useState('')

  const app=initializeApp(firebaseConfig)
  const auth= getAuth(app)


  const createAccount=()=>{
    createUserWithEmailAndPassword(auth, email,pasword) 
    .then((userCredentials)=>{
      console.log('You created an account!')
      Alert.alert('You created an account!')
      const user= userCredentials.user;
      console.log(user)
    }) 
    .catch(error=>{
      console.log(error)
    })
  }

   const signIn=(navigation)=>{
     signInWithEmailAndPassword(auth,email,pasword) 
     .then(()=>{
       console.log('You are logged !')
     })
     .catch(error=>{
       console.log(error)
     })
   }
  return (
    <View style={styles.firstcontainer}>
      <Text>Log in</Text>
      <TextInput onChangeText={(text)=>setemail(text)}  style={styles.container} placeholder='Email'></TextInput>
      <TextInput onChangeText={(text)=>setpasword(text)} style={styles.container} secureTextEntry placeholder='Password'></TextInput>
      <Text style={styles.txtpswrd}>Forgot your pasword?</Text>
      <TouchableOpacity onPress={signIn} style={styles.btnlogin}><Text style={styles.textbtn}>Sign in</Text></TouchableOpacity> 
      <Text>Don't have an account ?</Text>
      {/* <TouchableOpacity  onPress={createAccount} style={styles.btnlogin}><Text style={styles.textbtn}>Sign up</Text></TouchableOpacity> */}
    </View>

  )
}

export default LogInScreen

const styles = StyleSheet.create({

  firstcontainer:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    width: 150,
    borderColor:'black'


  },
  container:{
    padding:10,
    borderRadius:8,
    width:300,
    backgroundColor:'#f0f0f5',
    margin:10,
    
  },
  textitle:{
    fontSize:40,
        
      }, 

  btnlogin:{
    backgroundColor:'#000000',
    padding:10,
    borderRadius:8,
    width:300,
    marginBottom:10,
  },
  
  textbtn:{
    color:'#ffff',
    textAlign:'center',
  },

  txtpswrd:{
    marginBottom:10,    
  }
})
