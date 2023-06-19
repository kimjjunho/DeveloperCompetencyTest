import AsyncStorage from '@react-native-async-storage/async-storage';

export const Key = {
  TOKEN : "token",
  ID : "id"
}

export async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) { alert(e.message); }
}

export async function getData(key) {
  try {
    var token = "";
    await AsyncStorage.getItem(key).then( res=>
      token = res
    );

    console.log("token: "+token)
    return "tq";
  } catch (e) { alert(e.message); }
}