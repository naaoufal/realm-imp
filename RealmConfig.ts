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

export class OrderSchema extends Realm.Object<OrderSchema> {
  _id!: BSON.ObjectId;
  name!: string;
  priority?: number;
  //   progressMinutes?: number;
  //   assignee?: Person;
  //   age?: number;
  customerStatus?: string;
  // dispatchingStatus?: string;
  // deliveryManStatus?: string;
  // customerId?: BSON.ObjectId;
  static schema = {
    name: 'order',
    // properties: {
    //   MAS: 'bool',
    //   SAO: 'bool',
    //   __v: 'int',
    //   _id: 'objectId',
    //   blocked: 'bool',
    //   cancelReason: 'string',
    //   city: {
    //     type: 'object',
    //   },
    //   // {
    //   //   type: 'object',
    //   //   properties: {
    //   //     MAS: 'bool',
    //   //     _id: 'string',
    //   //     displayPhone: {
    //   //       bsonType: 'string',
    //   //     },
    //   //     name: {
    //   //       bsonType: 'string',
    //   //     },
    //   //   },
    //   // },
    //   cityId: {
    //     bsonType: 'objectId',
    //   },
    //   commission: {
    //     bsonType: 'int',
    //   },
    //   commissionStoreClient: {
    //     bsonType: 'int',
    //   },
    //   commissionStoreDeliveryMan: {
    //     bsonType: 'int',
    //   },
    //   createdAt: {
    //     bsonType: 'date',
    //   },
    //   customer: {
    //     bsonType: 'object',
    //     properties: {
    //       _id: {
    //         bsonType: 'string',
    //       },
    //       email: {
    //         bsonType: 'string',
    //       },
    //       name: {
    //         bsonType: 'string',
    //       },
    //       phone: {
    //         bsonType: 'string',
    //       },
    //     },
    //   },
    //   customerId: {
    //     bsonType: 'objectId',
    //   },
    //   customerStatus: {
    //     bsonType: 'string',
    //   },
    //   deliveryMan: {
    //     bsonType: 'object',
    //     properties: {
    //       GPSOn: {
    //         bsonType: 'bool',
    //       },
    //       __v: {
    //         bsonType: 'int',
    //       },
    //       _id: {
    //         bsonType: 'objectId',
    //       },
    //       appState: {
    //         bsonType: 'string',
    //       },
    //       appVersion: {
    //         bsonType: 'string',
    //       },
    //       approved: {
    //         bsonType: 'bool',
    //       },
    //       available: {
    //         bsonType: 'bool',
    //       },
    //       balance: {
    //         bsonType: 'int',
    //       },
    //       batteryCritical: {
    //         bsonType: 'bool',
    //       },
    //       batteryLevel: {
    //         bsonType: 'double',
    //       },
    //       cityId: {
    //         bsonType: 'objectId',
    //       },
    //       commission: {
    //         bsonType: 'int',
    //       },
    //       createdAt: {
    //         bsonType: 'date',
    //       },
    //       deliveryType: {
    //         bsonType: 'string',
    //       },
    //       dispatchable: {
    //         bsonType: 'bool',
    //       },
    //       dispatchingType: {
    //         bsonType: 'string',
    //       },
    //       email: {
    //         bsonType: 'string',
    //       },
    //       enhancedLocation: {
    //         bsonType: 'object',
    //         properties: {
    //           _id: {
    //             bsonType: 'objectId',
    //           },
    //           coordinates: {
    //             bsonType: 'array',
    //             items: {
    //               bsonType: 'double',
    //             },
    //           },
    //           type: {
    //             bsonType: 'string',
    //           },
    //         },
    //       },
    //       freeFromPartnerOrders: {
    //         bsonType: 'bool',
    //       },
    //       isConnected: {
    //         bsonType: 'bool',
    //       },
    //       lastKnownLocations: {
    //         bsonType: 'array',
    //         items: {
    //           bsonType: 'object',
    //           properties: {
    //             _id: {
    //               bsonType: 'objectId',
    //             },
    //             location: {
    //               bsonType: 'array',
    //               items: {
    //                 bsonType: 'double',
    //               },
    //             },
    //             timestamp: {
    //               bsonType: 'date',
    //             },
    //           },
    //         },
    //       },
    //       lastPositionDate: {
    //         bsonType: 'date',
    //       },
    //       location: {
    //         bsonType: 'array',
    //         items: {
    //           bsonType: 'double',
    //         },
    //       },
    //       name: {
    //         bsonType: 'string',
    //       },
    //       phone: {
    //         bsonType: 'string',
    //       },
    //       planified: {
    //         bsonType: 'bool',
    //       },
    //       rate: {
    //         bsonType: 'int',
    //       },
    //       updatedAt: {
    //         bsonType: 'date',
    //       },
    //     },
    //   },
    //   deliveryManId: {
    //     bsonType: 'objectId',
    //   },
    //   deliveryManLocationAtAccept: {
    //     bsonType: 'array',
    //     items: {
    //       bsonType: 'double',
    //     },
    //   },
    //   deliveryManStatus: {
    //     bsonType: 'string',
    //   },
    //   deliveryManStatusTimes: {
    //     bsonType: 'array',
    //     items: {
    //       bsonType: 'object',
    //       properties: {
    //         admin: {
    //           bsonType: 'object',
    //           properties: {
    //             _id: {
    //               bsonType: 'string',
    //             },
    //             by: {
    //               bsonType: 'string',
    //             },
    //             email: {
    //               bsonType: 'string',
    //             },
    //             entityId: {
    //               bsonType: 'string',
    //             },
    //             scope: {
    //               bsonType: 'array',
    //               items: {
    //                 bsonType: 'string',
    //               },
    //             },
    //             userName: {
    //               bsonType: 'string',
    //             },
    //             username: {
    //               bsonType: 'string',
    //             },
    //           },
    //         },
    //         date: {
    //           bsonType: 'date',
    //         },
    //         deliveryMan: {
    //           bsonType: 'object',
    //           properties: {
    //             _id: {
    //               bsonType: 'objectId',
    //             },
    //             location: {
    //               bsonType: 'array',
    //               items: {
    //                 bsonType: 'double',
    //               },
    //             },
    //             name: {
    //               bsonType: 'string',
    //             },
    //           },
    //         },
    //         status: {
    //           bsonType: 'string',
    //         },
    //       },
    //     },
    //   },
    //   destinationLocation: {
    //     bsonType: 'object',
    //     properties: {
    //       coordinates: {
    //         bsonType: 'array',
    //         items: {
    //           bsonType: 'double',
    //         },
    //       },
    //       type: {
    //         bsonType: 'string',
    //       },
    //     },
    //   },
    //   dispatchingStatus: {
    //     bsonType: 'string',
    //   },
    //   dispatchingStatusTimes: {
    //     bsonType: 'array',
    //     items: {
    //       bsonType: 'object',
    //       properties: {
    //         admin: {
    //           bsonType: 'object',
    //           properties: {
    //             _id: {
    //               bsonType: 'string',
    //             },
    //             by: {
    //               bsonType: 'string',
    //             },
    //             email: {
    //               bsonType: 'string',
    //             },
    //             entityId: {
    //               bsonType: 'string',
    //             },
    //             scope: {
    //               bsonType: 'array',
    //               items: {
    //                 bsonType: 'string',
    //               },
    //             },
    //             userName: {
    //               bsonType: 'string',
    //             },
    //             username: {
    //               bsonType: 'string',
    //             },
    //           },
    //         },
    //         date: {
    //           bsonType: 'date',
    //         },
    //         deliveryMan: {
    //           bsonType: 'object',
    //           properties: {
    //             _id: {
    //               bsonType: 'objectId',
    //             },
    //             location: {
    //               bsonType: 'array',
    //               items: {
    //                 bsonType: 'double',
    //               },
    //             },
    //             name: {
    //               bsonType: 'string',
    //             },
    //           },
    //         },
    //         status: {
    //           bsonType: 'string',
    //         },
    //       },
    //     },
    //   },
    //   distanceStoreClient: {
    //     bsonType: 'int',
    //   },
    //   distanceStoreDeliveryMan: {
    //     bsonType: 'int',
    //   },
    //   inValidNewUser: {
    //     bsonType: 'bool',
    //   },
    //   inValidPhone: {
    //     bsonType: 'bool',
    //   },
    //   inValidPosition: {
    //     bsonType: 'bool',
    //   },
    //   inValidUser: {
    //     bsonType: 'bool',
    //   },
    //   invalidReason: {
    //     bsonType: 'string',
    //   },
    //   notPaying: {
    //     bsonType: 'bool',
    //   },
    //   orderRated: {
    //     bsonType: 'bool',
    //   },
    //   organisationOrderDetail: {
    //     bsonType: 'object',
    //     properties: {
    //       code: {
    //         bsonType: 'string',
    //       },
    //       id: {
    //         bsonType: 'string',
    //       },
    //       state: {
    //         bsonType: 'string',
    //       },
    //     },
    //   },
    //   payment: {
    //     bsonType: 'object',
    //     properties: {
    //       _id: {
    //         bsonType: 'string',
    //       },
    //       accompagnementPrice: {
    //         bsonType: 'int',
    //       },
    //       accompagnementServicePrice: {
    //         bsonType: 'int',
    //       },
    //       appVersion: {
    //         bsonType: 'string',
    //       },
    //       cartDetails: {
    //         bsonType: 'array',
    //         items: {
    //           bsonType: 'object',
    //           properties: {
    //             _id: {
    //               bsonType: 'string',
    //             },
    //             items: {
    //               bsonType: 'array',
    //               items: {
    //                 bsonType: 'object',
    //                 properties: {
    //                   _id: {
    //                     bsonType: 'string',
    //                   },
    //                   flag: {
    //                     bsonType: 'string',
    //                   },
    //                   isFromKaalix: {
    //                     bsonType: 'bool',
    //                   },
    //                   itemId: {
    //                     bsonType: 'string',
    //                   },
    //                   itemPrice: {
    //                     bsonType: 'int',
    //                   },
    //                   itemTotalPrice: {
    //                     bsonType: 'int',
    //                   },
    //                   minCartPrice: {
    //                     bsonType: 'int',
    //                   },
    //                   name: {
    //                     bsonType: 'string',
    //                   },
    //                   note: {
    //                     bsonType: 'string',
    //                   },
    //                   originalPrice: {
    //                     bsonType: 'int',
    //                   },
    //                   promoSubType: {
    //                     bsonType: 'string',
    //                   },
    //                   promoType: {
    //                     bsonType: 'string',
    //                   },
    //                   quantity: {
    //                     bsonType: 'int',
    //                   },
    //                   specificationPrice: {
    //                     bsonType: 'int',
    //                   },
    //                   value: {
    //                     bsonType: 'int',
    //                   },
    //                 },
    //               },
    //             },
    //             name: {
    //               bsonType: 'string',
    //             },
    //             productId: {
    //               bsonType: 'string',
    //             },
    //           },
    //         },
    //       },
    //       choubikDetail: {
    //         bsonType: 'object',
    //         properties: {
    //           description: {
    //             bsonType: 'string',
    //           },
    //           recording: {
    //             bsonType: 'string',
    //           },
    //         },
    //       },
    //       cityId: {
    //         bsonType: 'string',
    //       },
    //       createdAt: {
    //         bsonType: 'string',
    //       },
    //       creneauText: {
    //         bsonType: 'string',
    //       },
    //       customer: {
    //         bsonType: 'object',
    //         properties: {
    //           kaalixPay: {
    //             bsonType: 'int',
    //           },
    //           name: {
    //             bsonType: 'string',
    //           },
    //           nbOrders: {
    //             bsonType: 'int',
    //           },
    //           phone: {
    //             bsonType: 'string',
    //           },
    //           rewardPoints: {
    //             bsonType: 'int',
    //           },
    //           screen: {
    //             bsonType: 'string',
    //           },
    //           status: {
    //             bsonType: 'string',
    //           },
    //           web: {
    //             bsonType: 'bool',
    //           },
    //           xpPoints: {
    //             bsonType: 'int',
    //           },
    //         },
    //       },
    //       customerId: {
    //         bsonType: 'string',
    //       },
    //       deliveryPrice: {
    //         bsonType: 'int',
    //       },
    //       destinationAddress: {
    //         bsonType: 'object',
    //         properties: {
    //           address: {
    //             bsonType: 'string',
    //           },
    //           details: {
    //             bsonType: 'string',
    //           },
    //           location: {
    //             bsonType: 'array',
    //             items: {
    //               bsonType: 'double',
    //             },
    //           },
    //           name: {
    //             bsonType: 'string',
    //           },
    //           phone: {
    //             bsonType: 'string',
    //           },
    //         },
    //       },
    //       errorMessageForPromo: {
    //         bsonType: 'string',
    //       },
    //       expressDetail: {
    //         bsonType: 'object',
    //         properties: {
    //           destinations: {
    //             bsonType: 'array',
    //             items: {
    //               bsonType: 'object',
    //               properties: {
    //                 address: {
    //                   bsonType: 'string',
    //                 },
    //                 description: {
    //                   bsonType: 'string',
    //                 },
    //                 detail: {
    //                   bsonType: 'string',
    //                 },
    //                 location: {
    //                   bsonType: 'array',
    //                   items: {
    //                     bsonType: 'double',
    //                   },
    //                 },
    //                 name: {
    //                   bsonType: 'string',
    //                 },
    //                 phone: {
    //                   bsonType: 'string',
    //                 },
    //                 recording: {
    //                   bsonType: 'string',
    //                 },
    //               },
    //             },
    //           },
    //           pickup: {
    //             bsonType: 'object',
    //             properties: {
    //               address: {
    //                 bsonType: 'string',
    //               },
    //               description: {
    //                 bsonType: 'string',
    //               },
    //               detail: {
    //                 bsonType: 'string',
    //               },
    //               location: {
    //                 bsonType: 'array',
    //                 items: {
    //                   bsonType: 'double',
    //                 },
    //               },
    //               name: {
    //                 bsonType: 'string',
    //               },
    //               phone: {
    //                 bsonType: 'string',
    //               },
    //               recording: {
    //                 bsonType: 'string',
    //               },
    //             },
    //           },
    //         },
    //       },
    //       fromPaymentCall: {
    //         bsonType: 'bool',
    //       },
    //       invoiceUrl: {
    //         bsonType: 'string',
    //       },
    //       newPhone: {
    //         bsonType: 'string',
    //       },
    //       oldPhone: {
    //         bsonType: 'string',
    //       },
    //       orderPrice: {
    //         bsonType: 'int',
    //       },
    //       order_price_original: {
    //         bsonType: 'int',
    //       },
    //       originalDeliveryPrice: {
    //         bsonType: 'int',
    //       },
    //       originalOrderPrice: {
    //         bsonType: 'int',
    //       },
    //       originalTotal: {
    //         bsonType: 'int',
    //       },
    //       paymentGateway: {
    //         bsonType: 'string',
    //       },
    //       paymentUrl: {
    //         bsonType: 'string',
    //       },
    //       payments: {
    //         bsonType: 'array',
    //         items: {
    //           bsonType: 'object',
    //           properties: {
    //             _id: {
    //               bsonType: 'string',
    //             },
    //             amount: {
    //               bsonType: 'int',
    //             },
    //             gateway: {
    //               bsonType: 'string',
    //             },
    //           },
    //         },
    //       },
    //       phoneChanged: {
    //         bsonType: 'bool',
    //       },
    //       pickupAddress: {
    //         bsonType: 'object',
    //         properties: {
    //           address: {
    //             bsonType: 'string',
    //           },
    //           location: {
    //             bsonType: 'array',
    //             items: {
    //               bsonType: 'double',
    //             },
    //           },
    //           name: {
    //             bsonType: 'string',
    //           },
    //           phone: {
    //             bsonType: 'string',
    //           },
    //         },
    //       },
    //       priceInvoice: {
    //         bsonType: 'int',
    //       },
    //       pricePaid: {
    //         bsonType: 'int',
    //       },
    //       promo: {
    //         bsonType: 'int',
    //       },
    //       promoCode: {
    //         bsonType: 'string',
    //       },
    //       promoInfo: {
    //         bsonType: 'object',
    //         properties: {
    //           promoItemCount: {
    //             bsonType: 'int',
    //           },
    //           promoKaalixItemCount: {
    //             bsonType: 'int',
    //           },
    //           promoStore: {
    //             bsonType: 'bool',
    //           },
    //           promoStoreItemCount: {
    //             bsonType: 'int',
    //           },
    //           promoType: {
    //             bsonType: 'string',
    //           },
    //           totalPromo: {
    //             bsonType: 'int',
    //           },
    //           totalPromoKaalix: {
    //             bsonType: 'int',
    //           },
    //           totalPromoStore: {
    //             bsonType: 'int',
    //           },
    //         },
    //       },
    //       promoStore: {
    //         bsonType: 'object',
    //         properties: {
    //           type: {
    //             bsonType: 'object',
    //             properties: {
    //               discountType: {
    //                 bsonType: 'string',
    //               },
    //               enabled: {
    //                 bsonType: 'bool',
    //               },
    //               isFromKaalix: {
    //                 bsonType: 'bool',
    //               },
    //               minCartPrice: {
    //                 bsonType: 'int',
    //               },
    //               type: {
    //                 bsonType: 'string',
    //               },
    //               value: {
    //                 bsonType: 'int',
    //               },
    //             },
    //           },
    //         },
    //       },
    //       promoType: {
    //         bsonType: 'string',
    //       },
    //       randomId: {
    //         bsonType: 'string',
    //       },
    //       reductionPrice: {
    //         bsonType: 'int',
    //       },
    //       scheduled: {
    //         bsonType: 'bool',
    //       },
    //       serviceType: {
    //         bsonType: 'string',
    //       },
    //       shceduleDate: {
    //         bsonType: 'string',
    //       },
    //       shouldDeliveryManPayStore: {
    //         bsonType: 'bool',
    //       },
    //       status: {
    //         bsonType: 'string',
    //       },
    //       storeCommission: {
    //         bsonType: 'int',
    //       },
    //       storeCommissionType: {
    //         bsonType: 'string',
    //       },
    //       storeId: {
    //         bsonType: 'string',
    //       },
    //       total: {
    //         bsonType: 'int',
    //       },
    //       updatedAt: {
    //         bsonType: 'string',
    //       },
    //     },
    //   },
    //   pickupLocation: {
    //     bsonType: 'object',
    //     properties: {
    //       coordinates: {
    //         bsonType: 'array',
    //         items: {
    //           bsonType: 'double',
    //         },
    //       },
    //       type: {
    //         bsonType: 'string',
    //       },
    //     },
    //   },
    //   preparationTime: {
    //     bsonType: 'int',
    //   },
    //   shortId: {
    //     bsonType: 'string',
    //   },
    //   src: {
    //     bsonType: 'string',
    //   },
    //   startedPreparation: {
    //     bsonType: 'bool',
    //   },
    //   store: {
    //     bsonType: 'object',
    //     properties: {
    //       SAO: {
    //         bsonType: 'bool',
    //       },
    //       _id: {
    //         bsonType: 'string',
    //       },
    //       contact: {
    //         bsonType: 'string',
    //       },
    //       imageUrl: {
    //         bsonType: 'string',
    //       },
    //       location: {
    //         bsonType: 'array',
    //         items: {
    //           bsonType: 'string',
    //         },
    //       },
    //       name: {
    //         bsonType: 'string',
    //       },
    //       phone: {
    //         bsonType: 'string',
    //       },
    //       promoSetting: {
    //         bsonType: 'object',
    //         properties: {
    //           discountType: {
    //             bsonType: 'string',
    //           },
    //           enabled: {
    //             bsonType: 'bool',
    //           },
    //           isFromKaalix: {
    //             bsonType: 'bool',
    //           },
    //           minCartPrice: {
    //             bsonType: 'int',
    //           },
    //           type: {
    //             bsonType: 'string',
    //           },
    //           value: {
    //             bsonType: 'int',
    //           },
    //         },
    //       },
    //     },
    //   },
    //   storeId: {
    //     bsonType: 'objectId',
    //   },
    //   storeStatus: {
    //     bsonType: 'string',
    //   },
    //   timing: {
    //     bsonType: 'object',
    //     properties: {
    //       SPPT: {
    //         bsonType: 'int',
    //       },
    //       cmdDuration: {
    //         bsonType: 'int',
    //       },
    //       delivered: {
    //         bsonType: 'int',
    //       },
    //       deliveryManChange: {
    //         bsonType: 'bool',
    //       },
    //       deliveryTime: {
    //         bsonType: 'int',
    //       },
    //       dispatchingTime_AC_WFA: {
    //         bsonType: 'int',
    //       },
    //       dispatchingTime_ONHOLD_DISPATCHING: {
    //         bsonType: 'int',
    //       },
    //       dispatchingType: {
    //         bsonType: 'string',
    //       },
    //       driver_ATD: {
    //         bsonType: 'int',
    //       },
    //       driver_ATP: {
    //         bsonType: 'int',
    //       },
    //       driver_Accepted: {
    //         bsonType: 'int',
    //       },
    //       driver_CFD: {
    //         bsonType: 'int',
    //       },
    //       driver_SD: {
    //         bsonType: 'int',
    //       },
    //       driver_Store: {
    //         bsonType: 'int',
    //       },
    //       driver_UI: {
    //         bsonType: 'int',
    //       },
    //       driver_delivered: {
    //         bsonType: 'int',
    //       },
    //       driver_delivery: {
    //         bsonType: 'int',
    //       },
    //       driver_waiting_store: {
    //         bsonType: 'int',
    //       },
    //       durationAfterAccept: {
    //         bsonType: 'int',
    //       },
    //       order_time: {
    //         bsonType: 'int',
    //       },
    //       preparationTime: {
    //         bsonType: 'int',
    //       },
    //       storeAccepted: {
    //         bsonType: 'int',
    //       },
    //       validationTime: {
    //         bsonType: 'int',
    //       },
    //     },
    //   },
    //   tryDispatch: {
    //     bsonType: 'int',
    //   },
    //   type: {
    //     bsonType: 'string',
    //   },
    //   updatedAt: {
    //     bsonType: 'date',
    //   },
    //   validAt: {
    //     bsonType: 'date',
    //   },
    //   validatorId: {
    //     bsonType: 'objectId',
    //   },
    // },
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
      // customerId: 'objectId?',
      customerStatus: 'string?',
      // deliveryMan: 'order_deliveryMan',
      // deliveryManId: 'objectId?',
      // deliveryManLocationAtAccept: 'double[]',
      // deliveryManStatus: 'string?',
      // deliveryManStatusTimes: 'order_deliveryManStatusTimes[]',
      // destinationLocation: 'order_destinationLocation',
      // dispatchingStatus: 'string?',
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
}

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
