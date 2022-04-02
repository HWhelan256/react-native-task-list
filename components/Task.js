import { View, Text, StyleSheet } from "react-native";


function Task(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    itemleft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#E3BAC6',
        borderRadius: 5, 
        marginRight: 15,
    },
    text: {
        maxWidth: "80%",
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: "#E3BAC6",
        borderWidth: 2,
        borderRadius: 5,
    },
  });

export default Task;
