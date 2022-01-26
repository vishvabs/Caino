/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity,ScrollView, SafeAreaView, Image, Alert} from 'react-native';

function SignUpScreen({navigation, route}) {


  return (
    <View style={styles.container}>
    <SafeAreaView>
    <ScrollView>
      <View style={styles.cont}>
       <Text style={styles.para}>An online casino, also known as a virtual casino or internet casino, is an online version of a traditional ("brick and mortar") casino. Online casinos allow gamblers to play casino games and place bets online. This is an effective form of online gambling.</Text>
       <Text style={styles.para}>Some online casinos require a high payout percentage for slot machine games, while others publish a personal payment audit on their website. Assuming that an online casino uses a properly programmed random number generator, table games such as blackjack have an advantage. The payout percentage of these games is determined by the rules of the game.</Text>
       <Text style={styles.para}>According to the software used in online casinos are divided into two main categories: web-based and downloadable casinos only. Traditionally, online casinos have only one of two platforms. However, advances in technology have made it possible to include both in online casinos.</Text>
       
       <Text style={styles.heading}>Web based</Text>
       <Text style={styles.para}>Web-based online casinos (also known as non-download casinos) are websites where users can play casino games without downloading software to their computer. All graphics, sound, and animations are loaded on the web, so a stable internet connection is required to keep the game inexperienced. Most online casinos allow you to play games through the HTML interface, which was previously done through browser plugins such as Flash Player, Shockwave Player, and Java.</Text>

       <Text style={styles.heading}>Download based</Text>
       <Text style={styles.para}>Download-based online casinos require the client to download software to play and bet on the casino games they offer. The online casino software connects to the casino service provider without the need for browser support. Download-based online casinos generally run faster than web-based online casinos because they store software and client caches rather than downloading graphics and sound applications from the Internet. On the other hand, it takes time to download and install casino software. As with any program downloaded from the Internet, there is a risk of a program containing malware, which makes it uncommon among skeptical casino players</Text>
       
       <Text style={styles.heading}>Games</Text>
       <Text style={styles.subheading}>Virtual</Text>
       <Text style={styles.para}>These are called software-based online casino games, and the results of these games are determined using pseudo-random number generator (PRNG) software. This software ensures that card deals, dice, slot machine or roulette wheel spins are random and unpredictable. PRNG uses mathematical instructions, called algorithms, to create long streams of numbers that seem truly random. This is not the same as generating a real random number (although it is not possible for a computer to do this without an external input source), it gives results that meet everything except the most stringent requirements of true randomness.</Text>
       <Text style={styles.para}>With the right implementation of PRNG algorithms such as Mersenne Twister, games will be fair and unpredictable. However, since the interior is invisible to users, the player must believe that the software was not cheated to increase the edge of the house. Properly regulated online casinos are audited by independent regulators to ensure that the winning percentage meets the specified probabilities, which can provide some assurance that the games are fair if the player believes in the regulators.</Text>

       <Text style={styles.subheading}>Live dealer</Text>
       <Text style={styles.para}>Live dealer casino games are the opposite of software-based games. These games rely on real-time results instead of software to determine the outcome of roulette spins, dice, and card trades. This is possible because the game is transmitted in real time from a land-based casino or a redesigned studio that mimics a land-based casino.</Text>
       <Text style={styles.para}>Software developers have included innovative features such as chat to make it easier for players to play these games and fully restore the ground-based environment. This allows players to write your message to the dealer and they can respond orally. The live chat function can also be used to interact with other players at the table according to the casino's rules.</Text>
       <Text style={styles.para}>The results of the dealer's physical transactions, such as roulette spins or card deals, are optical character recognition (OCR) it depends on real-life actions rather than automated processes.</Text>
       <Text style={styles.para}>Because these games require more investment in technology and human resources, hosting websites is more expensive than virtual games. A direct casino studio usually has one or more cameramen, several croupiers who run various games, an information technology manager who can quickly resolve any technical glitches, and a pit boss who acts as a judge in disputes between players and croupiers.</Text>
       <Text style={styles.para}>The high running costs associated with running a direct dealer game are the reason why online casinos offer a few of the most popular games in this format, such as roulette, blackjack, sik bo, and baccarat. In comparison, the running costs associated with virtual gaming are very low, and it is not uncommon for online casinos to offer hundreds of different virtual casino games to players on their site.</Text>
       <Text style={styles.para}>Online casinos vary in their approach to hosting games, with some offering games directly through their TV channels and some offering games only through their websites. For TV games, players can use a mobile phone or TV remote control instead of betting on a computer connected to the Internet. The most popular live dealer games offered at online casinos are baccarat, blackjack and roulette.</Text>
       
       <Text style={styles.heading}>Example</Text>
       <Text style={styles.subheading}>A common selection of gambling games offered at online casinos may include:</Text>
       <Text style={styles.para}>Many online casinos offer sign-up bonuses to new players who have made their first deposit, and often offer similar bonuses for the next game. These promotions are a form of marketing that can be costly, as casinos basically give money in return for a player's betting promises (which can be justified in order to attract new players who can return and place money more often). a certain minimum before allowing the withdrawal of money. Because all casino games have an advantage, the requirement to place a bet ensures that the player cannot withdraw the casino money immediately after receiving the bonus. These betting requirements are set high enough for players to have negative expectations as if the bonus had been deposited or not claimed.</Text>
       <Text style={styles.para}>Casinos can choose to limit their betting requirements to certain games, or restrict players from playing low-grade games or restrict "risk-free" play (e.g., betting on both red and black at roulette). Guaranteed profit after considering the bonus.</Text>


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

export default SignUpScreen;