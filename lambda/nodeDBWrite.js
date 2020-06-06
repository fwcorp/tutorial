const AWS = require("aws-sdk");

AWS.config.update({
  region: "ap-northeast-2",
});

const documentClient = new AWS.DynamoDB.DocumentClient();

async function putDB() {
  const params = {
    TableName: "Books",
    Item: {
      isbn: "132324",
      title: "Harry Potter2",
      author: "Rowling",
      series: {
        one: 1,
        two: 2,
        three: 3,
      },
    },
  };

  try {
    const response = await documentClient.put(params).promise();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

putDB();
