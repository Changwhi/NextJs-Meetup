import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";


export default async function MeetupDetails({params}: any) {
  const meetupdetail = await getPost(params)
  const { id } = params
  return (
    <MeetupDetail
      image={meetupdetail.image}
      title={meetupdetail.title}
      address={meetupdetail.address}
      description={id}

    />
  );
}

export async function generateStaticParams(){
    return [{ id: 'm1'}]
}

async function getPost(context: any) {
  const meetupid = context.meetupId;

  console.log(context.meetupId)
  return ({
      image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg/640px-Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg",
      title:"first",
      address:"some street 5",
      description:"thisis",
      id:meetupid
});
}
