
exports = async function(username, password){
  
  const autherrors = context.services.get('mongodb-atlas').db('srv-auth').collection('autherrors');
  const result = await autherrors.insertOne({ username: username, password: password, createdAt: new Date(), updatedAt: new Date() });
};