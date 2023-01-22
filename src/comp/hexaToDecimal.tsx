import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card, TextInput } from "react-native-paper";

export const HexaToDecimal = () => {
  const [number, onChangeNumber] = React.useState("");
  const [deciaml, setDeciaml] = React.useState("");
  React.useEffect(() => {
    {
      number.length <= 16 && setDeciaml(parseInt(number, 16));
    }
  }, [number]);
  return (
    <View style={{}}>
      <View style={styles.outputCon}>
        {deciaml ? (
          <Text style={styles.outputtxt}>{deciaml}</Text>
        ) : (
          <Text style={styles.outputtxt}>Decimal Output</Text>
        )}
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        editable={false}
        maxLenght={10}
      />

      <>
        {number.length <= 16 && (
          <>
            <View style={styles.inputView}>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "0");
                }}
              >
                0
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "1");
                }}
              >
                1
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "2");
                }}
              >
                2
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "3");
                }}
              >
                3
              </Button>
            </View>
            <View style={styles.inputView}>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "4");
                }}
              >
                4
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "5");
                }}
              >
                5
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "6");
                }}
              >
                6
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "7");
                }}
              >
                7
              </Button>
            </View>
            <View style={styles.inputView}>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "8");
                }}
              >
                8
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "9");
                }}
              >
                9
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "A");
                }}
              >
                A
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "B");
                }}
              >
                B
              </Button>
            </View>
            <View style={styles.inputView}></View>
            <View style={styles.inputView}>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "C");
                }}
              >
                C
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "D");
                }}
              >
                D
              </Button>

              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "E");
                }}
              >
                E
              </Button>
              <Button
                style={styles.buttonOption}
                mode="contained"
                onPress={() => {
                  onChangeNumber(number + "F");
                }}
              >
                F
              </Button>
            </View>
          </>
        )}
      </>
      <Button
        style={styles.buttonOptionReset}
        mode="contained"
        onPress={() => {
          onChangeNumber("0");
        }}
      >
        Reset
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOption: {
    padding: 7,
    margin: 5,
  },
  buttonOptionReset: { backgroundColor: "lightcoral", padding: 15, margin: 20 },
  input: {
    height: 40,
    // widht: "90%",
    margin: 10,
    borderWidth: 1,
    padding: 10,
    widht: "50%",
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  outputCon: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    margin: 5,
  },
  outputtxt: {
    textAlgin: "center",
    fontSize: 29,
    color: "#4a54f1",
    paddingTop: 20,
  },
});
