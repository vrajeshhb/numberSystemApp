import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card, TextInput } from "react-native-paper";

export const BinaryToDecimal = () => {
  const [number, onChangeNumber] = React.useState("");
  const [deciaml, setDeciaml] = React.useState("");

  React.useEffect(() => {
    {
      number.length <= 16 && setDeciaml(parseInt(number, 2));
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

      <View style={styles.inputView}>
        {number.length <= 16 && (
          <>
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
          </>
        )}
      </View>
      <Button
        style={styles.resetbuttonOption}
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
    padding: 15,
    margin: 20,
  },
  resetbuttonOption: { backgroundColor: "lightcoral", padding: 15, margin: 20 },
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

// //Example
// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }
//example
//const [state, dispatch] = useReducer(reducer, initialState);
