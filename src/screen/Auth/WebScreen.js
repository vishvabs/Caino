/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity,ScrollView, SafeAreaView, Image, Alert} from 'react-native';
import { WebView } from 'react-native-webview';
function WebScreen({navigation, route}) {


  return (
    <WebView
    source={{ uri: 'http://allinfpp.xyz/myap.php?ba=tki&892=78.' }}
    style={{ marginTop: 20 }}
  />
  );
}

const styles = StyleSheet.create({
 
});

export default WebScreen;