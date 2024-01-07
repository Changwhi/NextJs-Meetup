'use client'

import NewMeetUpForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    function addMeetupHandler(enteredMeetupData: Object) {
        console.log(enteredMeetupData)

    }
    return <NewMeetUpForm onAddMeetup={addMeetupHandler}></NewMeetUpForm>

}

export default NewMeetupPage;