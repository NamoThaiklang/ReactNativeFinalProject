import {StyleSheet, Text, View, SafeAreaView, TextInput,Button} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const [ID, setID] = useState('');

  function checkID(ID){
    if(ID === "1234567890111"){
      navigation.navigate("Pro1")
      }else if(ID === "2285937384169"){
        navigation.navigate("Pro2")
      }else if(ID === "6803424582664"){
        navigation.navigate("Pro3")
      }else{
        {alert('ไม่มีข้อมูลในระบบ')}
      }
  }

  return (
    <SafeAreaView>
      <View style = {{alignContent:"center"}}>
        <Text>Confident Insurance</Text>
        <TextInput
          value={ID}
          onChangeText={ID => setID(ID)}
          style={styles.textinput}
          placeholder="กรุณาใส่เลขบัตรประชาชน"
        />
        <Button
        title='ค้นหา'
        onPress={()=>checkID(ID)} 
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  textinput: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
  },
});
