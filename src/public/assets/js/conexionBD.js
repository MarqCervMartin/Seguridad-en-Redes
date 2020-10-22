
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://proyectF:ico123@cluster0.02rn8.mongodb.net/proyectF?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
