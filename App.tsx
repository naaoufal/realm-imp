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
import Realm, {BSON} from 'realm';
// const Realm = require('realm');
import {
  AppProvider,
  UserProvider,
  useApp,
  useUser,
  createRealmContext,
} from '@realm/react';
// import getRealm, {OrderSchema} from './RealmConfig';
import {realmContext} from './RealmContext';
import {OrderSchema} from './RealmConfig';
// import getRealm, {OrderSchema} from './RealmConfig';

const {RealmProvider, useRealm, useQuery} = realmContext;

Realm.copyBundledRealmFiles();

function AppWrapper(): JSX.Element {
  const [data, setData] = useState([]);

  const app = new Realm.App({id: 'auth-staging-jcnza'});
  const credentials = Realm.Credentials.anonymous();

  // logs :
  // Realm.App.Sync.setLogLevel(app, 'debug');
  // Realm.App.Sync.setLogger(app, (level, message) =>
  //   console.log(`[${level}] ${message}`),
  // );

  const someFunc = async () => {
    try {
      const loggedUser = await app.logIn(credentials);
      // delete any previous file :
      Realm.deleteFile({
        schema: [OrderSchema],
        sync: {
          user: loggedUser,
          flexible: true,
          // partitionValue: 'PUBLIC',
          // existingRealmFileBehavior: {type: 'openImmediately'},
          // newRealmFileBehavior: {type: 'openImmediately'},
        },
        // schemaVersion: 10,
        // inMemory: true,
        // path: '/data/data/com.myrealmapp/files/mongodb-realm/auth-staging-jcnza/645cc82c85c1c560e692ed38/flx_sync_default.realm',
        // deleteRealmIfMigrationNeeded: true,
      });
      const realm = await Realm.open({
        schema: [OrderSchema],
        sync: {
          user: loggedUser,
          flexible: true,
          // partitionValue: 'PUBLIC',
          // existingRealmFileBehavior: {type: 'openImmediately'},
          // newRealmFileBehavior: {type: 'openImmediately'},
        },
        schemaVersion: 10,
        // inMemory: true,
        // path: '/data/data/com.myrealmapp/files/mongodb-realm/auth-staging-jcnza/645cc82c85c1c560e692ed38/flx_sync_default.realm',
        // deleteRealmIfMigrationNeeded: true,
      });

      // checking config :

      // realms using mongodb client :
      // await realm.addListener('change', async () => {
      // const mongodb: any = app.currentUser?.mongoClient('mongodb-atlas');
      // const collection = mongodb.db('srv-dispatching').collection('orders');
      // const dataRealm = await collection.find({
      //   customerId: new BSON.ObjectId('629d39f9044df404dafcf296'), //'629d39f9044df404dafcf296',
      // });
      // setData(dataRealm);
      // });

      // using realms functions :
      // realm.write(async () => {
      // if (loggedUser?.accessToken !== null) {
      //   const orders = realm.objects('order');
      //   console.log('data', orders);
      // }
      // const mongodb: any = app.currentUser?.mongoClient('mongodb-atlas');
      // const collection = mongodb.db('srv-dispatching').collection('orders');
      // console.log('path', Realm.defaultPath);
      // const dataRealm = await collection.find({
      //   customerId: new BSON.ObjectId('629d39f9044df404dafcf296'), //'629d39f9044df404dafcf296',
      // });

      // use subscribtions :
      // await realm.subscriptions.update(subs => {
      //   let orders = realm.objects(OrderSchema);
      //   console.log('orders before', orders);
      //   if (orders?.length === 0) {
      //     console.log('create new realms');
      //     realm.write(() => {
      //       dataRealm?.map((element: any) => {
      //         realm.create('order', element);
      //       });
      //       subs.add(dataRealm);
      //     });
      //   } else {
      //     console.log('already data');
      //     subs.add([...orders]);
      //   }
      //   console.log('data after', orders);
      // });

      // subs.add(orders);
      // setData(orders);
      // });
      // realm.beginTransaction();

      // use listeen :
      const orders: any = await realm.objects(OrderSchema);
      // orders.addListener(() => {
      console.log('orders', orders);
      // setData([...orders]);
      // });

      // several solutions :
      // realm.objects(OrderSchema).addListener(() => {
      //   console.log('listeen');
      // });
    } catch (err) {
      console.error('Failed to log in', err);
    }
  };

  // console.log('orders', data);

  const getRealm = async () => {
    const loggedUser = await app.logIn(credentials);
    const config: any = {
      schema: [OrderSchema],
      sync: {
        user: loggedUser,
        flexible: true,
        // partitionValue: 'PUBLIC',
        // existingRealmFileBehavior: {type: 'openImmediately'},
        // newRealmFileBehavior: {type: 'openImmediately'},
      },
      schemaVersion: 10,
      // inMemory: true,
      // path: '/data/data/com.myrealmapp/files/mongodb-realm/auth-staging-jcnza/645cc82c85c1c560e692ed38/flx_sync_default.realm',
      // deleteRealmIfMigrationNeeded: true,
    };
    return Realm.open(config);
  };

  const createOrder = async () => {
    try {
      await getRealm().then(realm => {
        realm.write(() => {
          realm.subscriptions.update(subs => {
            realm.create(OrderSchema, {
              _id: new BSON.ObjectID(),
              customerStatus: 'ACCEPTED',
              // customerId: '629d39f9044df404dafcf296',
            });
          });
          realm.close();
        });
      });
      // .subscriptions.update(subs => {
      //   const orders = realm.objects(OrderSchema);
      //   realm.write(() => {
      //     realm.create('order', {
      //       _id: new BSON.ObjectID(),
      //       customerStatus: 'ACCEPTED',
      //       // customerId: '629d39f9044df404dafcf296',
      //     });
      //     subs.add(orders);
      console.log('create success !!!');
      //   });
      // });
    } catch (error) {
      console.log('error', error);
    }
  };

  const editOrder = (id: any) => {
    console.log('edit order !!!', id);
  };

  useEffect(() => {
    someFunc();
  }, []);

  return (
    // <AppProvider id={'auth-staging-jcnza'}>
    //   <UserProvider fallback={<Login />}>
    //     <RealmProvider
    //       sync={{
    //         flexible: true,
    //         onError: (_, error) => {
    //           console.error(error);
    //         },
    //       }}>
    // <AppChilds />
    //     </RealmProvider>
    //   </UserProvider>
    // </AppProvider>
    <View>
      <View>
        {data?.length > 0 ? (
          <View>
            {data &&
              data?.map(element => (
                <View>
                  <Text>{element?.customerStatus}</Text>
                  <TouchableOpacity onPress={() => editOrder(item?._id)}>
                    <Text>edit</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        ) : (
          <View>
            <Text>No Data Found</Text>
          </View>
        )}
      </View>
      <View>
        <TouchableOpacity onPress={createOrder}>
          <Text>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Login = async () => {
  // const app = useApp();
  // const user = useUser();
  // return();
  // const credentials = Realm.Credentials.anonymous();
  // const loggedInUser = await new Realm.App({id: 'auth-staging-jcnza'}).logIn(
  //   credentials,
  // );
  // console.log('user realm token', loggedInUser.accessToken);
  // return loggedInUser;
  return <View>{/* <Text>Login ID : {user?.id}</Text> */}</View>;
};

const OrderSchemaNew = {
  // asymmetric: false,
  name: 'order',
  properties: {
    _id: 'objectId?',
    // MAS: 'bool?',
    // SAO: 'bool?',
    // __v: 'int?',
    // blocked: 'bool?',
    // cancelReason: 'string?',
    // city: 'order_city',
    // cityId: 'objectId?',
    // commission: 'int?',
    // commissionStoreClient: 'int?',
    // commissionStoreDeliveryMan: 'int?',
    // createdAt: 'date?',
    // customer: 'order_customer',
    customerId: 'objectId?',
    customerStatus: 'string?',
    // deliveryMan: 'order_deliveryMan',
    // deliveryManId: 'objectId?',
    // deliveryManLocationAtAccept: 'double[]',
    deliveryManStatus: 'string?',
    // deliveryManStatusTimes: 'order_deliveryManStatusTimes[]',
    // destinationLocation: 'order_destinationLocation',
    dispatchingStatus: 'string?',
    // dispatchingStatusTimes: 'order_dispatchingStatusTimes[]',
    // distanceStoreClient: 'int?',
    // distanceStoreDeliveryMan: 'int?',
    // inValidNewUser: 'bool?',
    // inValidPhone: 'bool?',
    // inValidPosition: 'bool?',
    // inValidUser: 'bool?',
    // invalidReason: 'string?',
    // notPaying: 'bool?',
    // orderRated: 'bool?',
    // organisationOrderDetail: 'order_organisationOrderDetail',
    // payment: 'order_payment',
    // pickupLocation: 'order_pickupLocation',
    // preparationTime: 'int?',
    // shortId: 'string?',
    // src: 'string?',
    // startedPreparation: 'bool?',
    // store: 'order_store',
    // storeId: 'objectId?',
    // storeStatus: 'string?',
    // timing: 'order_timing',
    // tryDispatch: 'int?',
    // type: 'string?',
    // updatedAt: 'date?',
    // validAt: 'date?',
    // validatorId: 'objectId?',
  },
  primaryKey: '_id',
};

const AppChilds = () => {
  // const Order: any = createRealmContext({
  //   schema: [OrderSchema],
  // });

  // const {RealmProvider, useRealm, useQuery} = realmContext;

  // const realm = useRealm();
  // const data = useQuery(OrderSchema);
  // const user = useUser();

  // const allSubs = realm.subscriptions;
  const [data, setData] = useState([]);

  // const data: any = realm.objects('order');

  // useEffect(() => {
  //   realm.subscriptions.update(subs => {
  //     console.log('listing !!!');
  //     subs.add(data);
  //   });
  //   console.log('orders', data);
  // });

  // console.log('data realm', data, BSON.ObjectId);

  const [newData, setNewData] = useState([]);
  const [key, setKey] = useState<any>('');

  // const app = new Realm.App({id: 'auth-staging-jcnza'});
  // const credentials = Realm.Credentials.anonymous();

  // const someFunc = async () => {
  //   try {
  //     const loggedUser = await app.logIn(credentials);
  //     const realm = await Realm.open({
  //       schema: [OrderSchema],
  //       sync: {
  //         user: loggedUser,
  //         flexible: true,
  //         // partitionValue: 'PUBLIC',
  //         // existingRealmFileBehavior: {type: 'openImmediately', timeout: 10000},
  //       },
  //     });

  //     // realms using mongodb client :
  //     // await realm.addListener('change', async () => {
  //     const mongodb: any = app.currentUser?.mongoClient('mongodb-atlas');
  //     const collection = mongodb.db('srv-dispatching').collection('orders');
  //     const dataRealm = await collection.find({
  //       customerId: new BSON.ObjectId('629d39f9044df404dafcf296'), //'629d39f9044df404dafcf296',
  //     });
  //     setData(dataRealm);
  //     // });

  //     // using realms functions :
  //     // realm.write(async subs => {
  //     //   const orders = realm.objects(OrderSchema);
  //     //   const mongodb: any = app.currentUser?.mongoClient('mongodb-atlas');
  //     //   const collection = mongodb.db('srv-dispatching').collection('orders');
  //     //   const dataRealm = await collection.find({
  //     //     customerId: new BSON.ObjectId('629d39f9044df404dafcf296'), //'629d39f9044df404dafcf296',
  //     //   });
  //     //   subs.add(orders);
  //     //   setData(dataRealm);
  //     // });
  //   } catch (err) {
  //     console.error('Failed to log in', err);
  //   }
  // };

  // useEffect(() => {
  //   someFunc();
  // }, []);

  // console.log('data', data);

  const handlePress = (item: any) => {
    // console.log('item', item);
  };

  return (
    <>
      {/* <RealmProvider
        sync={{
          flexible: true,
          onError: (_, error) => {
            console.error(error);
          },
        }}> */}
      {/* <View>
        <FlatList
          data={data && data}
          renderItem={item => (
            <View
              style={{
                height: 30,
                backgroundColor: 'black',
                flex: 1,
              }}>
              <Text
                style={{
                  fontSize: 40,
                  color: 'red',
                }}>
                {item?.customerStatus}
              </Text>
            </View>
          )}
          keyExtractor={item => item._id}
        />
      </View> */}

      <View>
        {data?.length > 0 ? (
          <View>
            {data &&
              data?.map(element => (
                <View>
                  <Text>{element?.customerStatus}</Text>
                  <TouchableOpacity onPress={() => editOrder(item?.customerId)}>
                    <Text>edit </Text>
                  </TouchableOpacity>
                </View>
              ))}
          </View>
        ) : (
          <View>No Data Found</View>
        )}
      </View>
      <View>
        <TouchableOpacity onPress={createOrder}>
          <Text>Create </Text>
        </TouchableOpacity>
      </View>

      {/* <SafeAreaView>
        {data.length > 0 ? (
          <ScrollView>
            {data &&
              data.map(item => (
                <View
                  key={item?._id}
                  style={{
                    backgroundColor: 'green',
                    padding: 10,
                    margin: 10,
                    borderRadius: 6,
                  }}>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Customer name : {item?.customer?.name}
                  </Text>
                  <TouchableOpacity onPress={handlePress(item)}>
                    <Text>Test ID</Text>
                  </TouchableOpacity>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Store name : {item?.store?.name}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Customer ID : {item?.customer?._id}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Customer Status : {item?.customerStatus}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    Dispatching Status : {item?.dispatchingStatus}
                  </Text>
                  <Text style={{color: '#fff', fontWeight: 'bold'}}>
                    DeliveryMan Status : {item?.deliveryManStatus}
                  </Text>
                  {/* <Text style={{color: '#fff', fontWeight: 'bold'}}>
                ID Order : {item?._id}
              </Text> */}
      {/* </View>
              ))}
          </ScrollView> */}
      {/* ) : (
          <View>
            <Text>No Data Found</Text>
          </View>
        )} */}
      {/* </SafeAreaView> */}
      {/* </RealmProvider> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default AppWrapper;
