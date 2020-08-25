import AsyncStorage from "@react-native-community/async-storage";

export class LocalStorage {
  static async get(key: string, defaultValue: string) {
    try {
      const data = await AsyncStorage.getItem(key);
      console.log("DATA", data);
      if (data) {
        return data;
      } else {
        return defaultValue;
      }
    } catch (e) {
      console.log("LOCAL STORAGE ERROR", e);
      return defaultValue;
    }
  }

  static async set(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  }

  static async delete(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  }
}
