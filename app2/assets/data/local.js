import AsyncStorage from '@react-native-async-storage/async-storage';

export var token =  "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb25qYWVtaW4iLCJleHAiOjE2ODY4NzkwNDJ9.gUNwlJE8eEQUNpmoOg5kGh18d7fIafbJ4w8CW7Otv-U"
export var id = "sonjaemin"

export const key = {
  TOKEN : "token"
}

export async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) { alert(e.message); }
}

export async function getData(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) { alert(e.message); }
}