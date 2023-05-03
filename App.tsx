/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Realm from 'realm';
// const Realm = require('realm');
import {
  AppProvider,
  UserProvider,
  useApp,
  useUser,
  createRealmContext,
} from '@realm/react';
import getRealm, {OrderSchema} from './RealmConfig';

function App(): JSX.Element {
  const [newData, setNewData] = useState([]);

  const getData = async () => {
    // getRealm()
    //   .then(realm => {
    //     let data: any = realm.objects('orders');
    //     console.log('data realm', data);
    //   })
    //   .catch(error => console.log('err realm', error));
    try {
      const realm = await getRealm();
      const data = realm.objects('orders');
      console.log('orders realm', data);
    } catch (error) {
      console.log('get data realm', error);
    }
  };

  const handleAdd = async () => {
    try {
      const realm = await getRealm();
      // realm.write(() => {
      // realm.create('orders', {
      //   _id: '',
      //   // customerStatus: '6452293616c4b531d3542b0c',
      //   // dispatchingStatus: 'ACCEPTED',
      //   // deliveryManStatus: 'ACCEPTED?',
      //   // customerId: '6452293616c4b531d3542b0c',
      // });
      const data = realm.objects('orders');
      console.log('orders realm', data);
      // });
      // realm.close();
    } catch (error) {
      console.log('error add realm object', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>App Test</Text>
        <TouchableOpacity
          style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            backgroundColor: 'orange',
            width: '40%',
          }}
          onPress={handleAdd}>
          <Text>Add new Data</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
