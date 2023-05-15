import Realm, {BSON} from 'realm';

// const schemaTest = {
// _id: {type: 'objectId'},
//   dispatchingStatus: {
//     type: 'string',
//   },
//   deliveryManStatus: {
//     type: 'tring',
//   },
//   customerStatus: {
//     type: 'string',
//   },
//   storeStatus: {
//     type: 'string'
//   },
//   payment: {type: 'Object'},
//   cancelReason: {type: 'string'},
//   canceledBy: {type: 'Object',},
//   store: {type: Object, default: null},
//   customer: {},
//   deliveryMan: {},
//   city: {},
//   dispatchingStatusTimes: [],
//   deliveryManStatusTimes: [],
//   comments: [],
//   storeStatusTimes: [],
//   storeId: {type: Schema.Types.ObjectId, default: null},
//   cityId: {type: Schema.Types.ObjectId, default: null},
//   customerId: {type: Schema.Types.ObjectId, default: null},
//   deliveryManId: {
//     type: Schema.Types.ObjectId,
//     default: null,
//     ref: 'DeliveryMan',
//   },
//   assignedSeenBy: {
//     type: Schema.Types.ObjectId,
//     default: null,
//     ref: 'DeliveryMan',
//   },
//   assignedSeenAt: {type: Date},
//   dispatchedSeenBy: {
//     type: Schema.Types.ObjectId,
//     default: null,
//     ref: 'DeliveryMan',
//   },
//   dispatchedSeenAt: {type: Date},
//   validAt: {type: Date},
//   commission: {type: Number, default: 0},
//   commissionStoreClient: {type: Number, default: 0},
//   commissionStoreDeliveryMan: {type: Number, default: 0},
//   distanceStoreClient: {type: Number, default: 0},
//   distanceStoreDeliveryMan: {type: Number, default: 0},
//   deliveryManLocationAtAccept: {
//     type: [
//       {
//         type: Number,
//         index: '2dsphere',
//       },
//     ],
//     required: false,
//   },
//   alarms: {
//     type: Array,
//     default: [],
//   },
//   timing: {
//     type: Object,
//     default: null,
//   },
//   startedPreparation: {type: Boolean, default: false},
//   clientId: {
//     type: 'ObjectId',
//   },
//   type: {
//     type: String,
//     default: '',
//   },
//   organisationOrderDetail: {},
//   preparationTime: {type: Number, default: 0},
//   shortId: {type: String, default: ''},
//   orderRated: {type: Boolean, default: false},
//   inValidUser: {type: Boolean, default: false},
//   inValidPosition: {type: Boolean, default: false},
//   inValidNewUser: {type: Boolean, default: false},
//   inValidPhone: {type: Boolean, default: false},
//   invalidReason: {type: String, default: false},
//   validatorId: {
//     type: 'ObjectId',
//   },
//   timeToDispatch: {type: Date},
//   SAO: {type: Boolean, default: false},
//   MAS: {type: Boolean, default: false},
//   tryDispatch: {type: Number, default: 0},
//   tryDispatchDetail: {type: Array, default: []},
//   src: {type: String, default: ''},
//   blocked: {type: Boolean, default: false},
//   notPaying: {type: Boolean, default: false},
//   destinationLocation: {
//     type: {
//       enhancedLocation: {
//         type: pointSchema,
//         required: false,
//       },
//       location: {
//         type: [
//           {
//             type: Number,
//             index: '2dsphere',
//           },
//         ],
//         default: [0, 0],
//         required: false,
//       },
//     },
//   },
//   pickupLocation: {
//     type: {
//       enhancedLocation: {
//         type: pointSchema,
//         required: false,
//       },
//       location: {
//         type: [
//           {
//             type: Number,
//             index: '2dsphere',
//           },
//         ],
//         default: [0, 0],
//         required: false,
//       },
//     },
//   },
//   newStoreLocation: {type: Array, default: []},
//   newStoreLocationMongo: {
//     type: {
//       enhancedLocation: {
//         type: pointSchema,
//         required: false,
//       },
//       location: {
//         type: [
//           {
//             type: Number,
//             index: '2dsphere',
//           },
//         ],
//         default: [0, 0],
//         required: false,
//       },
//     },
//   },
//   gpsStoreStatus: {
//     type: Boolean,
//     default: true,
//   },
//   distance: {type: Number, default: 0},
//   blockArrivedToDestination: {
//     type: Boolean,
//     default: false,
//   },
//   blockDelivred: {
//     type: Boolean,
//     default: false,
//   },
// };

export type Item = {
  _id?: Realm.BSON.ObjectId;
  customerStatus?: string;
};
export const ItemSchema = {
  name: 'Item',
  properties: {
    _id: 'objectId?',
    customerStatus: 'string?',
  },
  primaryKey: '_id',
};

// export const OrderSchema = {
//   //   asymmetric: false,
//   name: 'orders',
//   properties: {
//     _id: {type: 'objectId'},
//     customerStatus: {type: 'string'},
//     dispatchingStatus: {type: 'string'},
//     deliveryManStatus: {type: 'string'},
//     customerId: {type: 'objectId'},
//   },
//   primaryKey: '_id',
// };

// place your RealmApp ID here
// const app = new Realm.App({id: 'auth-staging-jcnza'});

// const test = new Realm.Collection();

// Realm.App.Sync.setLogLevel(app, 'debug');
// Realm.App.Sync.setLogger(app, (level, message) =>
//   console.log(`[${level}] ${message}`),
// );

// can implement inBuilt JWT, Google, Facebook, Apple Authentication Flow.
const credentials = Realm.Credentials.anonymous(); // LoggingIn as Anonymous User.

// const getRealm = async () => {
//   // loggedIn as anonymous user
//   const loggedInUser = await app.logIn(credentials);

//   // console.log('user realm accessToken', loggedInUser.accessToken);

//   const mongodb: any = app.currentUser?.mongoClient('mongodb-atlas');
//   const collection = mongodb.db('srv-dispatching').collection('orders');
//   const dataRealm = await collection.find({
//     customerId: new BSON.ObjectId('629d39f9044df404dafcf296'), //'629d39f9044df404dafcf296',
//   });

//   // MongoDB RealmConfiguration
//   const configuration = {
//     schema: [OrderSchema], // add multiple schemas, comma seperated.
//     sync: {
//       user: loggedInUser, //app.currentUser, // loggedIn User
//       //   partitionValue: '2F6092d4c594587f582ef165a0', //`user=${loggedInUser?.id}`,
//       flexible: true, //'2F6092d4c594587f582ef165a0', // should be userId(Unique) so it can manage particular user related documents in DB by userId
//     },
//     schemaVersion: 10,
//     // deleteRealmIfMigrationNeeded: true,
//   };

//   return Realm.open(configuration);
// };

// export default getRealm;
