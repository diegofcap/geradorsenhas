import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export function PasswordItem({ data, removePassword }) {
  return (
    <Pressable style={styles.innerPassword} onLongPress={removePassword}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  innerPassword: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
