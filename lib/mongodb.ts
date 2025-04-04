import { Db, MongoClient } from "mongodb";

const client: MongoClient = new MongoClient(process.env.MONGO_DB_URI!);
const url_shortener: string = "url_shortener";
const dbName: Db = client.db(url_shortener);
const collection = dbName.collection("short_url");

async function mongodbConnect() {
  await client.connect();
  return "Done, Connected Successfully to Server";
}

mongodbConnect()
  .then(console.log)
  .catch(console.error)

export { collection };
