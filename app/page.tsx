import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

export default async function Home() {
  const meetups = await getProps();
  return (
    <MeetupList
      meetups={meetups}
    ></MeetupList>
  );
}

async function getProps() {
  // the code inside of this function will not be stored in the client side.
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.h59cv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetups = await db.collection("meetups").find().toArray();
  client.close();
  //Async, fetch data before rendering Home page. And pass that props to Home component.
  //So, Home component can be pre rendered with fetched data

  //To update fetched data.
  //becaues this function will pass the data while it builts. So after building this
  //website, if you update data, it does not apply to the website. to apply new data to your website,
  //You should redploy the website, but it will handle it without redploying if you use revalidate.

  //const res = await fetch(`https://.../posts`, { next: { revalidate: 60 } })

  return meetups.map((meetup) => ({
    key: meetup._id.toString(),
    id: meetup._id.toString(),
    image: meetup.image,
    title: meetup.title,
    address: meetup.address,
  }));
}
