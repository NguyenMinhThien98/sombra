import {useState, useEffect, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from './slice';

export const useHomeFacde = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state?.Home?.count);
    const KEY = 'count';

  const onIncrement = useCallback(() => {
    console.log('--test');
    dispatch(increment());
  }, [dispatch]);

  const ondDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const saveToStorage =  async (value) => {
    try {
        await AsyncStorage.setItem(KEY, value.toString())
      } catch (e) {
        console.error('--error',e)
      }
  }

  const removefromStorage = async () => {
    try {
        await AsyncStorage.removeItem(KEY, (err) => console.log(`${KEY}: ${err}`))
    } catch (e) {
        console.error('--error',e)
    }
  }

  return {
    count,
    onIncrement,
    ondDecrement,
    saveToStorage, 
    removefromStorage
  };
};

export default {useHomeFacde};
