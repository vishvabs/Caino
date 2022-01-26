/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,ScrollView, SafeAreaView, Image, Alert} from 'react-native';

function SlotScreen({navigation, route}) {


  return (
    <View style={styles.container}>
    <SafeAreaView>
    <ScrollView>
      <View style={styles.cont}>
       <Text style={styles.para}>Play the best real money slots in minutes at any of the casinos listed on this page. With hundreds of slot machines and advanced games from top providers, these online casinos offer lucrative slot bonuses to get you started. Read on to find the best slot casinos and key tips for playing online slots with real money. Online slot machines and game types</Text>
       <Text style={styles.para}>There are four types of online slot machines. Online slots range from the classic three-reel game based on the first slot machines to many paylines and advanced slots full of innovative bonus features and ways to win. See the slot varieties below for an introduction to each.</Text>

       <Text style={styles.subheading}>Three reel classic</Text>
       <Text style={styles.subheading}>Multiple payment lines and multiple reels</Text>
       <Text style={styles.subheading}>Video slots</Text>
       <Text style={styles.subheading}>Progressive slots</Text>
       <Text style={styles.subheading}>Three reel classic</Text>
       <Text style={styles.subheading}></Text>
       <Text style={styles.para}>Old-fashioned slot machines include the usual ace, lucky horseshoe, and wild symbols. Here you need to list three symbols that fit on one payment line. Just adjust the value of your coin. Play free online slots</Text>
       <Text style={styles.para}>Casino.org has a large number of free slots from the world's most exciting online casinos, and you can play here. You don't need an account to download an Android or iPhone app, so you can play these exclusive free games directly on your desktop or mobile phone. Play fun games, implement strategies, or try the latest versions of slot developer leaders using these games. Try your luck in the free game above to get started!</Text>

       <Text style={styles.csubheading}>Play now</Text>
       <Text style={styles.cheading}>WMS</Text>
       <Text style={styles.csubheading}>Play now</Text>
       <Text style={styles.cheading}>IGT</Text>
       <Text style={styles.csubheading}>Play now</Text>
       <Text style={styles.cheading}>WMS</Text>
       <Text style={styles.csubheading}>Play now</Text>
       <Text style={styles.cheading}>Big time game</Text>
       <Text style={styles.csubheading}>Play now</Text>
       <Text style={styles.csubheading}>Play now</Text>
       <Text style={styles.cheading}>WMS</Text>
       <Text style={styles.cheading}></Text>


       <Text style={styles.heading}>Frequently Asked Questions</Text>
       <Text style={styles.subheading}>How do online slots work?</Text>
       <Text style={styles.para}>The basic concept of spinning the wheel to match and win symbols is similar to an online slot, as in a land-based casino. The main difference in playing online is that the game variants are wider and most online slots offer more rounds and pay lines, increasing the chances of finding a winning combination.</Text>

       <Text style={styles.subheading}>Can I play free slots?</Text>
       <Text style={styles.para}>Yes. Each reputable slot casino offers players the opportunity to play the slot for free. This means you don't have to deposit any money to get started and you can just watch the game to have fun. Playing free online slots is a great way to experience the game before betting with real money.</Text>

       <Text style={styles.subheading}>What should I look for in an online slot casino?</Text>
       <Text style={styles.para}>After security and legitimacy, you want to see the payout percentage of the online slot. The payout percentage tells you what percentage of your bet will be paid in the form of winnings. This is especially important if you are planning to play for real money.</Text>

       <Text style={styles.subheading}>What is a progressive jackpot?</Text>
       <Text style={styles.para}>It is a jackpot that accumulates over time and then pays a large amount of money to one player. Since most online slot casinos offer advanced jackpot slots, it is important to consider the total jackpot amount and how often the game pays out.</Text>

       
       <Text style={styles.subheading}>Can you win real money playing online slots?</Text>
       <Text style={styles.para}>Yes you can. Online casino games are ultimately a game of luck, but many players win a fair amount of money, and some are lucky enough to get life-changing pay points. If you want to make a lot of money, advanced jackpot slots are the best fit for you.</Text>

       <Text style={styles.subheading}>Is Online Slot Casino Safe?</Text>
       <Text style={styles.para}>Of course. If you play at the online slot casinos we offer and avoid blacklisted sites, your personal information and your money will be completely safe online. We check and verify each of the online casinos we offer independently, so choosing one from the list is a good place to start.</Text>

       <Text style={styles.subheading}>How do welcome bonuses work?</Text>
       <Text style={styles.para}>Welcome bonuses reward players when they make their first real money deposit. The specifics and requirements vary from casino to casino, and some of the offers may seem too good to be true. It is recommended that you check the betting requirements of the online slot casino you plan to play with before making cash. These will explain how much of your money needs to be deposited in advance, and what to expect in return. The best bonus is to pay a large amount for the minimum deposit.</Text>

       <Text style={styles.subheading}>Which online slots have the highest payouts?</Text>
       <Text style={styles.para}>Progressive slot games pay the most, with Mega Moolah breaking the record with € 18,910,668.01. Our list of the best online slot casinos offers you games that pay real money. There are many types of online casino games that pay different amounts. These include classic three-slot slots, multi-pay line slots, advanced slots and video slots.</Text>

       <Text style={styles.subheading}>How to choose a winning slot machine?</Text>
       <Text style={styles.para}>An advanced slot with a fairly small jackpot to improve your chances of winning the jackpotThe machines are completely fair. The result comes at random, which means that nothing cheats in the game. To ensure fair play, you only need to choose from an approved online casino, such as those listed on this page. Playing in any of these will give you a fair chance to win.</Text>

       <Text style={styles.subheading}>How to choose a good slot machine?</Text>
       <Text style={styles.para}>You need to make sure that you are playing a slot with a high Return to Player (RTP), advantageous bonus, good overall rating, and a theme that you value. Check out the slots offered to play in 2022 to make the right choice for you.</Text>

       <Text style={styles.subheading}>What is the best online slot site?</Text>
       <Text style={styles.para}>In addition to exciting slot themes and amazing player experiences, it offers the biggest payouts, jackpots and bonuses. If you want to find out the best casinos of the month, visit our best casinos.</Text>


       </View>
            </ScrollView>
    </SafeAreaView>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#ffffff",
  },
  cont:{
    padding:10,
  },
  cheading:{
    marginTop:10,
    fontWeight:"bold",
    textAlign:"center",
    fontSize:18,
  },
  csubheading:{
    marginTop:10,
    textAlign:"center",
    fontWeight:"bold",
    fontSize:15,
  },
  heading:{
    marginTop:10,
    fontWeight:"bold",
    fontSize:18,
  },
  subheading:{
    marginTop:10,
    fontWeight:"bold",
    fontSize:15,
  },
  para:{
    fontWeight:"normal",
    marginBottom:10,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor:"#E6E6E6",
  },
  separator: {
    marginTop: 10,
  },
});

export default SlotScreen;