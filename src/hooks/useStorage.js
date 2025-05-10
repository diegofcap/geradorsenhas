import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const saveItem = async (key, value) => {
    try {
      let passwords = await getItem(key);
      if (Array.isArray(passwords)) {
        passwords.push(value);
      } else {
        passwords = [value];
      }
      const jsonValue = JSON.stringify(passwords);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error("Error storing data", e);
    }
  };

  const getItem = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return JSON.parse(jsonValue) || [];
    } catch (e) {
      console.error("Error retrieving data", e);
      return [];
    }
  };

  const removeItem = async (key, item) => {
    try {
      let passwords = await getItem(key);
      if (Array.isArray(passwords)) {
        let myPasswords = passwords.filter((password) => password !== item);
        const jsonValue = JSON.stringify(myPasswords);
        await AsyncStorage.setItem(key, jsonValue);
        return myPasswords;
      }
    } catch (e) {
      console.error("Error removing data", e);
    }
  };

  return { saveItem, getItem, removeItem };
};

export default useStorage;
