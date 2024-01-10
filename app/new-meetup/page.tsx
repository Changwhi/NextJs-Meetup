"use client";

import { useRouter } from "next/navigation";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const router = useRouter();

  async function POST(enteredMeetupData: any) {
    const response = await fetch("/api/", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response;
    console.log(data);
    router.push("/");
  }
  return <NewMeetUpForm onAddMeetup={POST}></NewMeetUpForm>;
}
