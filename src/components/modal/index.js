import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export function ModalPassword({ password, handleClose }) {
  const { saveItem } = useStorage();

  const handleSavePassword = async () => {
    // Save password to storage
    await saveItem("@pass", password);
    alert("Senha salva com sucesso!");
    handleClose();
  };

  async function handleCopyPassword() {
    // Copy password to clipboard
    await Clipboard.setStringAsync(password);
    alert("Senha copiada para a área de transferência!");
    await saveItem("@pass", password);
    handleClose();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada!</Text>
        <Pressable
          style={styles.innerPassword}
          onLongPress={handleCopyPassword}
        >
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonSave]}
            onPress={handleSavePassword}
          >
            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "#FFF",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
  },
  buttonSave: {
    backgroundColor: "#392DE9",
    borderRadius: 8,
  },
  buttonSaveText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
