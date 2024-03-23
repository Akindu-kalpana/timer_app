// ForgotPassword.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AppStyles from '../styles/AppStyles';

const ForgotPassword = () => {
  return (
    <View style={[AppStyles.container, { backgroundColor: '#add8e6' }]}>
      <Text style={AppStyles.logo}>Forgot Password</Text>
      <View style={AppStyles.inputView}>
        <TextInput
          style={AppStyles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
        />
      </View>
      {/* Show information message */}
      <Text style={AppStyles.infoText}>We will send you a 6-digit OTP to your email</Text>
      {/* Add Get Code button */}
      <TouchableOpacity style={AppStyles.btn}>
        <Text style={AppStyles.btnText}>GET CODE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
