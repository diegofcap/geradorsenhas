import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { PasswordItem } from "./components/passwordItem";

export function Passwords() {
  const [listPasswords, setListPasswords] = useState([]);
  const isFocused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  useEffect(() => {
    async function loadPasswords() {
      const data = await getItem("@pass");
      console.log(data);
      setListPasswords(data);
    }
    loadPasswords();
  }, [isFocused]);

  async function handleDeletePassword(item) {
    const passwords = await removeItem("@pass", item);
    setListPasswords(passwords);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Minhas Senhas</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listPasswords}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <PasswordItem
              data={item}
              removePassword={() => handleDeletePassword(item)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#392DE9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingHorizontal: 14,
  },
  title: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 14,
  },
});
