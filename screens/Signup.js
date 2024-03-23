// Signup.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook for navigation
import AppStyles from '../styles/AppStyles';

const Signup = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={[AppStyles.container, { backgroundColor: '#add8e6' }]}>
      <Text style={AppStyles.logo}>Signup</Text>
      <View style={AppStyles.inputView}>
        <TextInput
          style={AppStyles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={AppStyles.inputView}>
        <TextInput
          secureTextEntry
          style={AppStyles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <View style={AppStyles.inputView}>
        <TextInput
          secureTextEntry
          style={AppStyles.inputText}
          placeholder="Confirm Password..."
          placeholderTextColor="#003f5c"
        />
      </View>
      <TouchableOpacity style={AppStyles.btn}>
        <Text style={AppStyles.btnText}>REGISTER</Text>
      </TouchableOpacity>
      {/* Add navigation to Signin screen */}
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={AppStyles.linkText}>Already have an account? Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
