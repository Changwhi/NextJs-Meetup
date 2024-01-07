import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg/1024px-Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg',
    address: "Vancouver BC CANADA",
    description: "this is 1 meetup"
  },
  {
    id: 'm2',
    title: '2nd meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg/640px-Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg',
    address: "Vancouver BC CANADA",
    description: "this is 2 meetup"
  },
  {
    id: 'm3',
    title: '3rd meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg/640px-Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg',
    address: "Vancouver BC CANADA",
    description: "this is 3 meetup"
  },
  {
    id: 'm4',
    title: '4th meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg/640px-Sonoma_chipmunk_at_Samuel_P._Taylor_State_Park.jpg',
    address: "Vancouver BC CANADA",
    description: "this is 4 meetup"
  },
]
export default function Home() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS}> </MeetupList>
    )
}
