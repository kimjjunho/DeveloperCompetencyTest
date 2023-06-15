import AsyncStorage from '@react-native-async-storage/async-storage';

export var token =  "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb25qYWVtaW4iLCJleHAiOjE2ODY4NDMwNDl9.XGFSFjPzMl123ysTqZGM5fXFPBSYp_CUqUT-U-pAtVc"

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