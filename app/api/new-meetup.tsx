
import { MongoClient } from "mongodb";

interface ResponseData {
    title: string;
    image: string;
    address: string;
    description: string;
}

async function handler(req: any, res: any) {
    if (req.method === 'POST'){
        const data = req.body as unknown as ResponseData;
        const {title, image, address, description} = data;
        const client = await MongoClient.connect('mongodb+srv://changwhi:102030@cluster0.h59cv.mongodb.net/?retryWrites=true&w=majority')
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result)

        client.close()
        
        res.status(201).json({message: "meetup inserted"})

    }

}

export default handler