import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { BASE_URL, Colors } from '../utils/config';

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      setLoading(true);
      const token = await AsyncStorage.getItem('userToken'); // Use AsyncStorage.getItem

      if (token) {
        axios.defaults.headers.common['Authorization'] = token;

        try {
          const response = await axios.get(`${BASE_URL}/api/authentication/validate-token`);
          if (response.data === true) {
            setAuthState(true);
          }
        } catch (e) {
          await AsyncStorage.clear(); // Clear all AsyncStorage data
          setAuthState(false);
          axios.defaults.headers.common['Authorization'] = '';
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadToken();
  }, []);

  const register = async (
    firstName,
    lastName,
    email,
    password,
    birthdate,
    sex,
    phoneNumber
  ) => {
    try {
      const result = await axios.post(`${BASE_URL}/api/authentication/register`, {
        firstName,
        lastName,
        email,
        password,
        birthdate,
        sex,
        phoneNumber,
      });
      return result.data.result;
    } catch (error) {
      return error.response.data.result;
    }
  };

  const login = async (email, password) => {
    try {
      const result = await axios.post(`${BASE_URL}/api/authentication/login`, { email, password });

      if (result.data.token) {
        setAuthState(true);

        axios.defaults.headers.common['Authorization'] = result.data.token;
        await AsyncStorage.setItem('userToken', result.data.token); // Use AsyncStorage.setItem
        await AsyncStorage.setItem('userId', result.data.userId);
      }

      return result.data;
    } catch (error) {
      return error.response.data.result;
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.clear(); // Clear all AsyncStorage data
      setAuthState(false);

      await axios.post(`${BASE_URL}/api/authentication/logout`, {});

      axios.defaults.headers.common['Authorization'] = '';
      return true;
    } catch (error) {
      return error.response.data.result;
    }
  };

  const changePassword = async (email, password) => {
    try {
      const result = await axios.put(`${BASE_URL}/api/authentication/forgot-change-password`, { Email: email, NewPassword: password });
      return result.data.result;
    } catch (error) {
      return error.response.data.result;
    }
  };

  const verifyEmailNewUser = async (email) => {
    try {
      const result = await axios.post(`${BASE_URL}/api/authentication/verify-email-new-user/${email}`);
      return result.data.result;
    } catch (error) {
      return error.response.data.result;
    }
  };

  const verifyEmailForgot = async (email) => {
    try {
      const result = await axios.post(`${BASE_URL}/api/authentication/verify-email-forgot/${email}`);
      return result.data.result;
    } catch (error) {
      return error.response.data.result;
    }
  };

  const verifyCode = async (email, code) => {
    try {
      const result = await axios.post(`${BASE_URL}/api/authentication/verify-code`, { Email: email, VerificationCode: code });
      return result.data;
    } catch (error) {
      return error.response.data.result;
    }
  };

  const emailAvailability = async (email) => {
    try {
      const result = await axios.post(`${BASE_URL}/api/authentication/check-email-availability/${email}`);
      return result.data;
    } catch (e) {
      console.log("email availability error" + e);
      return true;
    }
  };

  const contextValue = {
    authState,
    loading,
    register,
    login,
    logout,
    emailAvailability,
    verifyEmailNewUser,
    verifyCode,
    verifyEmailForgot,
    changePassword,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.primaryBrand} />
        </View>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
