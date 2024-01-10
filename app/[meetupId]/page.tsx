import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
// it is used to define behaviour of a page that isn't pre rendered at build time.
// (dynamic sgement)
// if you set it to true, which is default, it will show a fallback page
// while the page is being generated, 'false' shows you 404 page.

export const dynamicParams = false;

async function getPost(meetupId: string) {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.h59cv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const SelectedMeetups = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });
  client.close();
  return SelectedMeetups;
}

export async function generateStaticParams() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.MONGODB_ID}:${process.env.MONGODB_PASSWORD}@cluster0.h59cv.mongodb.net/?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({ _id: 1 }).toArray();

  client.close();

  return meetups.map((meetup) => [{ meetupId: meetup._id.toString() }]);
}

export default async function MeetupDetails({
  params,
}: {
  params: { meetupId: string };
}) {
  const { meetupId } = params;
  const meetupdetail: any = await getPost(meetupId);
  return (
    <MeetupDetail
      image={meetupdetail.image}
      title={meetupdetail.title}
      address={meetupdetail.address}
      description={meetupdetail._id.toString()}
    />
  );
}
