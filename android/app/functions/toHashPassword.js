
const { createHash } =require('crypto');
exports = async function(password){
  
  try {
			return createHash('md5').update(JSON.stringify(password)).digest('hex');
		} catch (error) {
			console.error("hashed error",error);
		}
};