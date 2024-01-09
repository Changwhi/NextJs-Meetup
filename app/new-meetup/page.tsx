'use client'

import NewMeetUpForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    function addMeetupHandler(enteredMeetupData: any) {

    }
    return <NewMeetUpForm onAddMeetup={addMeetupHandler}></NewMeetUpForm>

}

export default NewMeetupPage;