import classes from './MeetupDetails.module.css'
import Image from 'next/image'

function MeetupDetail(props) {
    return  (
        <section className={classes.detail}>
            <Image 
            src={props.image}
            alt={props.title}
            width={600}
            height={600}
            />
        <h1>{props.title}</h1>            
        <address>{props.address}</address>            
        <p>{props.description}</p>            
        </section>

    )
}

export default MeetupDetail