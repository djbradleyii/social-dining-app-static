import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
import EVENTS from '../events';
import './UserDashboard.css';

export default class UserDashboard extends React.Component{
    render(){
        const userId = parseInt(localStorage.getItem("userId"));
        const users = this.props.users;
        const user = users.find((user)=>{
            return user.id === userId;
        }); 

        let events;
        let eventName;

        if(user.events.length === 0){
            events = <li>No Events Found</li>;
        }else{
            events = user.events.map((eventId, i) => {
                const userEvent = EVENTS.find((event, i) => {
                    return event.id === eventId;
                });
                if(userEvent.purpose === 'Social' || userEvent.purpose === 'Networking'){
                    eventName = `${userEvent.purpose} event at ${userEvent.restaurant}`;
                }else{
                    eventName = `${userEvent.purpose} at ${userEvent.restaurant}`;
                }
                events = <li key={i}>{eventName} on {userEvent.date}</li>; 
                return events;
            });
        }
        return(
            <div className="user-dashboard">
                <UserDetails user={user} events={EVENTS} />
                <section className="user-upcoming-events">
                    <h2>Upcoming Events:</h2>
                    <ul>
                        {events}
                    </ul>
                </section>
            </div>
        );
    }
}