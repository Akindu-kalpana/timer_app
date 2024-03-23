// Signin.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook for navigation
import AppStyles from '../styles/AppStyles';

const Signin = () => {
  const navigation = useNavigation(); // Initialize navigation

  return (
    <View style={[AppStyles.container, { backgroundColor: '#add8e6' }]}>
      <Text style={AppStyles.logo}>Sign in</Text>
      <View style={AppStyles.inputView}>
        <TextInput
          style={AppStyles.inputText}
          placeholder="User ID..."
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
      {/* Add Remember Password checkbox */}
      <View style={AppStyles.checkboxView}>
        <TouchableOpacity style={AppStyles.checkbox}>
          {/* You can add your checkbox icon here */}
        </TouchableOpacity>
        <Text style={AppStyles.checkboxText}>Remember Password</Text>
      </View>
      <TouchableOpacity style={AppStyles.btn}>
        <Text style={AppStyles.btnText}>LOGIN</Text>
      </TouchableOpacity>
      {/* Add navigation to ForgotPassword screen */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={AppStyles.linkText}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
