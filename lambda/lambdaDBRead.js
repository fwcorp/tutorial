const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const params = {
    TableName: "Books",
    Key: {
      isbn: "13232",
    },
  };

  try {
    const response = await documentClient.get(params).promise();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};
