"use client";

import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  async function POST(enteredMeetupData: any) {
    const response = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    const data = await response
    console.log(data)
    
  }
  return <NewMeetUpForm onAddMeetup={POST}></NewMeetUpForm>;
};

export default NewMeetupPage;
