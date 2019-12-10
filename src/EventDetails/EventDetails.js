import React from 'react';
import './EventDetails.css';

function EventDetails(props){
    const eventId = parseInt(localStorage.getItem("eventId"));
    const event = props.events.find((event) => {
        return event.id === eventId;
    });
    function getEventName(event){
        let eventName;
        if(event.purpose === 'Social' || event.purpose === 'Networking'){
            eventName = `${event.purpose} event at ${event.restaurant}`;
        }else{
            eventName = `${event.purpose} at ${event.restaurant}`;
        }
    return eventName;
    }

    return(
        <section>
            <table className="event-details">
                <thead><tr><th>{getEventName(event)}</th></tr></thead>
                <tbody>
                    <tr>
                        <td>Organizer:</td><td>{event.organizer}</td>
                    </tr>
                    <tr>
                        <td>Restaurant:</td><td>{event.restaurant}</td>
                    </tr>
                    <tr>
                        <td>Address:</td><td>{event.address}</td>
                    </tr>
                    <tr>
                        <td>Description:</td><td>{event.description}</td>
                    </tr>
                    <tr>
                        <td>Purpose:</td><td>{event.purpose}</td>
                    </tr>
                    <tr>
                        <td>Date:</td><td>{event.date}</td>
                    </tr>
                    <tr>
                        <td>Attendees:</td><td>7</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default EventDetails;