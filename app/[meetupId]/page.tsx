import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient } from "mongodb";
// it is used to define behaviour of a page that isn't pre rendered at build time.
// (dynamic sgement)
// if you set it to true, which is default, it will show a fallback page
// while the page is being generated, 'false' shows you 404 page.

export const dynamicParams = false;


async function getPost(meetupId: string) {


  console.log(meetupId)
  return ({
  image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg/640px-Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg",
      title:"first",
      address:"some street 5",
      description:"thisis",
      id:meetupId
});
}

export async function generateStaticParams(){
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.h59cv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetups = await meetupsCollection.find({_id: 1}).toArray();



    return meetups.map(meetup => ([{meetupId: meetup._id.toString()}]))
}

export default async function MeetupDetails({params}:{ params:{meetupId: string}}) {
  const { meetupId } = params
  const meetupdetail = await getPost(meetupId)
  return (
    <MeetupDetail
      image={meetupdetail.image}
      title={meetupdetail.title}
      address={meetupdetail.address}
      description={meetupdetail.id}

    />
  );
}

