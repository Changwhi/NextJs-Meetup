import { MongoClient } from "mongodb";

interface ResponseData {
  title: string;
  image: string;
  address: string;
  description: string;
}

export async function POST(req: Request, res: any) {
  const data = (await req.json()) as ResponseData;
  const { title, image, address, description } = data;
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.h59cv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.insertOne(data);

  console.log(result);

  client.close();

  return new Response("Success!", {
    status: 201,
  });
}
