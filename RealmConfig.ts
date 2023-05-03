import Realm from 'realm';

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

export const OrderSchema = {
  //   asymmetric: false,
  name: 'orders',
  properties: {
    _id: {type: 'objectId'},
    customerStatus: {type: 'string'},
    dispatchingStatus: {type: 'string'},
    deliveryManStatus: {type: 'string'},
    customerId: {type: 'objectId'},
  },
  primaryKey: '_id',
};

// place your RealmApp ID here
const app = new Realm.App({id: 'API_KEY'});

// const test = new Realm.Collection();

Realm.App.Sync.setLogLevel(app, 'debug');
Realm.App.Sync.setLogger(app, (level, message) =>
  console.log(`[${level}] ${message}`),
);

// can implement inBuilt JWT, Google, Facebook, Apple Authentication Flow.
const credentials = Realm.Credentials.anonymous(); // LoggingIn as Anonymous User.

const getRealm = async () => {
  // loggedIn as anonymous user
  const loggedInUser = await app.logIn(credentials);

  console.log('user realm', loggedInUser.accessToken);

  // MongoDB RealmConfiguration
  const configuration = {
    schema: [OrderSchema], // add multiple schemas, comma seperated.
    sync: {
      user: loggedInUser, //app.currentUser, // loggedIn User
      //   partitionValue: '', //`user=${loggedInUser?.id}`,
      flexible: true, //'2F6092d4c594587f582ef165a0', // should be userId(Unique) so it can manage particular user related documents in DB by userId
    },
    // schemaVersion: 4,
  };

  return Realm.open(configuration);
};

export default getRealm;
