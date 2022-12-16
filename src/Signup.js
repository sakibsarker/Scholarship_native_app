import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Image,Text,TouchableOpacity } from 'react-native';
import Loginstack from '../navigation/Loginstack';

const Signup=({navigation})=>{
    return (   
      <View style={styles.container}>
        <Image style={{
                height:'25%',
                width:'50%',
              }} source={require("../assets/login.jpg")}/>
        <TextInput
          
          
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
         
         
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <View>
        <Button
          title={'Sign Up'}
          style={styles.input}
          
        />
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
        <Text style={{marginTop:20}}>Already have account? Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    
  },
  input: {
    width:'90%',
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default Signup
