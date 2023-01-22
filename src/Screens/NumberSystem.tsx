import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Button, Avatar, Card, TextInput } from "react-native-paper";
import { BinaryToDecimal } from "./../comp/binaryToDecimal";
import { OctalTwoDecimal } from "./../comp/octalToDecimal";
import { HexaToDecimal } from "./../comp/hexaToDecimal.tsx";
import { All } from "./../comp/All";

export const NumberSystemScreen = () => {
  const [numberSystem, setNumberSystem] = useState("All");
  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="auto" />
        <ScrollView horizontal>
          <View style={styles.optionM}>
            <Button
              style={styles.buttonOption}
              mode="contained"
              onPress={() => {
                setNumberSystem("All");
              }}
            >
              All
            </Button>
            <Button
              style={styles.buttonOption}
              mode="contained"
              onPress={() => {
                setNumberSystem("Binary");
              }}
            >
              Binary To Decimal
            </Button>
            <Button
              style={styles.buttonOption}
              mode="contained"
              onPress={() => {
                setNumberSystem("Octal");
              }}
            >
              Octal To Decimal
            </Button>
            <Button
              style={styles.buttonOption}
              mode="contained"
              onPress={() => {
                setNumberSystem("HexaDecimal");
              }}
            >
              Hexadecimal To Decimal
            </Button>
          </View>
        </ScrollView>

        <>
          <View style={styles.outputCon}>
            {numberSystem === "Binary" && (
              <Text style={styles.outputtxt}> Binary To Decimal (16-Bit) </Text>
            )}
            {numberSystem === "Octal" && (
              <Text style={styles.outputtxt}> Octal To Decimal (16-Bit) </Text>
            )}
            {numberSystem === "HexaDecimal" && (
              <Text style={styles.outputtxt}>
                {" "}
                Hexadecimal To Decimal (16-Bit){" "}
              </Text>
            )}
          </View>
          <Card style={styles.card}>
            {numberSystem === "All" && <All />}
            {numberSystem === "Binary" && <BinaryToDecimal />}
            {numberSystem === "Octal" && <OctalTwoDecimal />}
            {numberSystem === "HexaDecimal" && <HexaToDecimal />}
          </Card>
        </>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: { backgroundColor: "gainsboro", height: "100%", widht: "100%" },
  safeArea: { felx: 1, justifyContent: "center" },
  optionM: {
    flexDirection: "row",
    margin: 5,
    padding: 5,
    marginTop: 20,
  },
  card: { margin: 10, padding: 5 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
  buttonOption: {
    padding: 5,
    margin: 5,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  outputtxt: {
    textAlgin: "center",
    fontSize: 29,
    color: "crimson",
    paddingTop: 20,
  },
  outputCon: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
});
