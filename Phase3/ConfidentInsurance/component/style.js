import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    bottom: 0,
  },
  image: {
    top: 0,
    left: 0,
    width: 112,
    height: 104,
    position: "absolute",
  },
  Text: {
    top: 0,
    left: 110,
    position: "absolute",
    textAlign: "center",
    fontSize: 12,
    color: "#d4ac66",
  },
  TextC: {
    color: "#262626"
  },
  imageStack: {
    width: 359,
    height: 104,
    marginTop: 44,
    marginLeft: 24,
  },
  Head: {
    fontSize: 24,
    textAlign: "left",
    marginTop: 10,
    marginLeft: 20,
    fontWeight: "bold",
    color: "#d4ac66",
  },
  Detail: {
    backgroundColor: "#91703c",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
  },
  Button: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
});
