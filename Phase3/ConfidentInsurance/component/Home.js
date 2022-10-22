import {StyleSheet, Text, View, SafeAreaView, TextInput,Button,Image} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const [ID, setID] = useState('');

  const checkID=()=>{
    if(ID === "1234567890111"){
      navigation.navigate("Pro1")
      }else if(ID === "2285937384169"){
        navigation.navigate("Pro2")
      }else if(ID === "6803424582664"){
        navigation.navigate("Pro3")
      }else{
        alert('ไม่มีข้อมูลในระบบ')
      }
  }

  return (
     <View style={styles.centered}>
      <Image
            source={require("../assets/logo.png")}
            resizeMode="contain"
            style={styles.image}
          />
      <TextInput
          value={ID}
          onChangeText={ID => setID(ID)}
          style={styles.textinput}
          placeholder="กรุณาใส่เลขบัตรประชาชน"
        />
        <Button
        title='ค้นหา'
        onPress={()=>checkID(ID)}
        color='#d4ac66'
        />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262626",
  },
  image: {
    width: 430,
    height: 130,
  },
  title: {
    fontSize: 30,
    marginVertical: 2,
    fontWeight: 'bold'
  },
  textinput: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#D5D4D4',
  },
});