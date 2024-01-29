import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'http://192.168.100.154:7208' // sa bahay

export const Storage = {
    setItem: async (key, value) => {
      try {
        await AsyncStorage.setItem(key, value);
      } catch (error) {
        console.error('Error setting data:', error);
      }
    },
  
    getItem: async (key) => {
      try {
        const value = await AsyncStorage.getItem(key);
        return value;
      } catch (error) {
        console.error('Error getting data:', error);
      }
    },
  };

export const Colors = {
    primaryBrand: '#3373B0',
    secondaryBrand: '#eab676',
    success: '#22bb33',
    warning: '#FF8A65'

}
export const credentialTextTheme = { colors: { primary: Colors.primaryBrand } };