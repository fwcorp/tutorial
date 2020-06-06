const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-2",
});

const documentClient = new AWS.DynamoDB.DocumentClient();

async function readDB() {
  const params = {
    TableName: "Books",
    Key: {
      isbn: "132324",
    },
  };

  try {
    const response = await documentClient.get(params).promise();
    console.log(response.Item.series.two);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

readDB();
