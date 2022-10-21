import { Text, View, SafeAreaView, Image ,Button} from "react-native";
import React from "react";
import { styles } from "./style.js";

const Pro3 = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.imageStack}>
          <Image
            source={require("../assets/img3.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Text style={styles.Profile}>
            เลขบัตรประชาชน 6803424582664{"\n"}นาย E F{"\n"}สัญญาพิเศษเพิ่มเติม
            ประกันสุขภาพโกลด์{"\n"}บริษัท ไทยประกันชีวิต จํากัด (มหาชน) (มหาชน)
          </Text>
        </View>
        <Text style={styles.Head}>สิทธิประโยชน์ที่ได้รับ</Text>
        <View style={styles.Detail}>
          <Text>
            1. ค่ารักษาพยาบาลเหมาจ่ายกรณีเจ็บป่วยหรือบาดเจ็บจากอุบัติเหตุต่อปี
            กรมธรรม์(5,000,000) {"\n"}
            {"\t"}1.1 ค่ารักษาพยาบาลเหมาจ่ายกรณีเจ็บป่วย
            หรือบาดเจ็บจากอุบัติเหตุต่อการ
            เข้าพักรักษาตัวครั้งใดครั้งหนึ่ง(2,500,000) {"\n"}
            {"\t"}1.2 ค่ารักษาพยาบาลเหมาจ่ายกรณีบาดเจ็บ
            เนื่องจากอุบัติเหตุร้ายแรงต่อการ
            เข้าพักรักษาตัวครั้งใดครั้งหนึ่ง(5,000,000)
            {"\n"}
            2. ค่าห้อง ค่าอาหาร ค่าบริการพยาบาลประจําวันต่อวัน{"\n"}
            {"\t"}2.1 ค่าห้อง ค่าอาหาร ค่าบริการพยาบาลประจําวันต่อวัน
            (สูงสุดไม่เกิน 150วัน)(10,000) {"\n"}
            {"\t"}2.2 ค่าห้องไอ.ซี.ยู. ประจําวันต่อวัน (สูงสุดไม่เกิน 30
            วัน)(20,000)
            {"\n"}
            3. ค่าใช้จ่ายสําหรับผลปนะโยชน์อื่นๆ
            (ต่อการเข้าพักรักษาตัวครั้งใดครั้งหนึ่ง)(คุ้มครอง ค่าใช้จ่ายไม่
            เกินจา นวนเงิน ที่ตอ้งจ่ายจริง) {"\n"}
            {"\t"}3.1 ค่ารถพยาบาลฉุกเฉิน {"\n"}
            {"\t"}3.2 ค่าตรวจวินิจฉัยทางรังสีวิทยา
            และการตรวจทางห้องปฏิบัติการผู้ป่วยนอก{"\n"}
            {"\t"} 3.3 ค่ารักษาพยาบาลอื่นๆ ในโรงพยาบาล{"\n"}
            {"\t"}3.4 ค่ารักษาพยาบาลโดยการผ่าตัด {"\n"}
            4. ค่ารักษาพยาบาลผู้ป่วยนอก{"\n"}
            {"\t"}4.1
            ค่ารักษาพยาบาลฉุกเฉินเนื่องจากอุบัติเหตุต่อการบาดเจ็บแต่ละครั้ง(30,000)
            {"\n"}
            {"\t"}4.2 ค่าล้างไต ค่าเคมีบําบัด ค่ารังสีบําบัด
            ผลประโยชน์สูงสุดต่อรอบปี กรมธรรม์(180,000) {"\n"}
            {"\t"}4.3 ค่ารักษาพยาบาลต่อเนื่อง
            หลังการเข้าพักรักษาตัวครั้งใดครั้งหนึ่ง (สูงสุด ไม่เกิน 2 ครั้ง
            ต่อการเข้าพักรักษาตัวครั้งใดครั้งหนึ่ง)(5,000) {"\n"}
            5. ผลประโยชน์เงินช่วยเหลือกรณีเสียชีวิต(10,000){"\n"}
          </Text>
        </View>
        <Button
        title='กลับ'
        onPress={()=>navigation.navigate("Home")}
        color='#48ccc4'
        />
      </View>
    </SafeAreaView>
  );
};

export default Pro3;