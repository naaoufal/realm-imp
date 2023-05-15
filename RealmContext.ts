import {
  AppProvider,
  UserProvider,
  useApp,
  useUser,
  createRealmContext,
} from '@realm/react';
import {ItemSchema} from './RealmConfig';
import Realm from 'realm';
import {useState} from 'react';

const app = new Realm.App({id: 'auth-staging-jcnza'});
const credentials = Realm.Credentials.anonymous();
let user = {};

const userContent = async () => {
  const loggedInUser = await app.logIn(credentials);
  // return loggedInUser;
  user = loggedInUser;
};

export const realmContext = createRealmContext({
  schema: [ItemSchema],
  sync: {
    user: app.currentUser,
    flexible: true,
  },
  schemaVersion: 12,
});
