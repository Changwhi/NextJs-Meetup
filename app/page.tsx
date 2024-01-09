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

interface HomeProps {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }
  
}
export default async function Home() {
  const meetups = await getProps()
  return (
    <MeetupList meetups={meetups}> </MeetupList>
    )
}

async function getProps() {

  //Async, fetch data before rendering Home page. And pass that props to Home component.
  //So, Home component can be pre rendered with fetched data
   
  //To update fetched data. 
  //becaues this function will pass the data while it builts. So after building this 
  //website, if you update data, it does not apply to the website. to apply new data to your website,
  //You should redploy the website, but it will handle it without redploying if you use revalidate.
  
  //const res = await fetch(`https://.../posts`, { next: { revalidate: 60 } })

    return DUMMY_MEETUPS
}
