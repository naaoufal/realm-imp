// This function is the endpoint's request handler.
// import toHashPassword from './'
exports =async function({ query, headers, body}, response) {
  // param { query, headers, body}, response
    // Data can be extracted from the request as follows:
     response.setStatusCode(200);
  response.setHeader('Content-Type', 'application/json');
  response.setBody(JSON.stringify({ query, headers, body }));
  
    // const {username,password}=payload
    // console.log('usernameeeeeeeee',payload)

    // Query params, e.g. '?arg1=hello&arg2=world' => {arg1: "hello", arg2: "world"}
    // const {arg1, arg2} = query;

    // Headers, e.g. {"Content-Type": ["application/json"]}
    // const contentTypes = headers["Content-Type"];

    // Raw request body (if the client sent one).
    // This is a binary object that can be accessed as a string using .text()
    // const reqBody = body;

    // console.log("arg1, arg2: ", arg1, arg2);
    // console.log("Content-Type:", JSON.stringify(contentTypes));
    // console.log("Request body:", reqBody);

    // You can use 'context' to interact with other application features.
    // Accessing a value:
    // var x = context.values.get("value_name");
  //   const hash = await context.functions.execute('toHashPassword', password);
  //   console.log('hash',hash)
  //   const collection = await context.services.get("mongodb-atlas").db("srv-auth").collection("users");
  //   const user = await collection.findOne({
  //     email: username.toLowerCase().trim(),
		// 	password: { $in: [hash, password] },
  //   });
  //   if(!user){
  //     await context.functions.execute('authErrorReport', username,hash)
  //   }
  
    // Querying a mongodb service:
    

    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
    return  'user';
};
