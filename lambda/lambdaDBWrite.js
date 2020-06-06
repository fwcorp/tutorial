const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: "Books",
    Item: {
      isbn: "13232",
      title: "Harry Potter",
      author: "Rowling",
    },
  };

  try {
    const response = await documentClient.put(params).promise();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
