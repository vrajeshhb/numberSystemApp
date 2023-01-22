import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card, TextInput } from "react-native-paper";

export const All = () => {
  const [binary, onbinary] = React.useState(0);
  const [octal, onoctal] = React.useState(0);
  const [hexadecimal, onhexadecimal] = React.useState(0);
  //const [number, onChangeNumber] = React.useState(0);
  const [deciaml, setDeciaml] = React.useState(0);

  React.useEffect(() => {
    onbinary(parseInt(deciaml.toString(2)));
    onoctal(parseInt(deciaml.toString(8)));
    onhexadecimal(Math.abs(deciaml).toString(16));

    //console.log(deciaml);
  }, [deciaml]);
  return (
    <View style={{}}>
      <View style={styles.outputCon}></View>
      <Text style={styles.outputtxt}>Decimal</Text>
      <Text style={styles.input}> {deciaml}</Text>
      <Text style={styles.outputtxt}>Binary Output</Text>
      <Text style={styles.input}>{binary}</Text>
      <Text style={styles.outputtxt}>Octal Output</Text>
      <Text style={styles.input}>{octal}</Text>
      <Text style={styles.outputtxt}>Binary Output</Text>
      <Text style={styles.input}>{hexadecimal}</Text>

      <View style={styles.inputView}>
        <>
          {deciaml !== 0 && (
            <Button
              icon="arrow-down-bold"
              style={styles.buttonOption}
              mode="contained"
              onPress={() => {
                setDeciaml(deciaml - 1);
              }}
            >
              Decrement
            </Button>
          )}

          <Button
            icon="arrow-up-bold"
            style={styles.buttonOption}
            mode="contained"
            onPress={() => {
              setDeciaml(deciaml + 1);
            }}
          >
            Increment
          </Button>
        </>
      </View>
      <Button
        style={styles.resetbuttonOption}
        mode="contained"
        onPress={() => {
          setDeciaml(0);
        }}
      >
        Reset
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOption: {
    padding: 8,
    margin: 5,
  },
  resetbuttonOption: { backgroundColor: "lightcoral", padding: 8, margin: 5 },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 5,
    widht: "100%",
    fontSize: 25,
    alignItems: "center",
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
    padding: 5,
    margin: 5,
  },
});
