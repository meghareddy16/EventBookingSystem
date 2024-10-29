import React from 'react';
import { useParams } from 'react-router-dom';
import { mockEvents } from '../data/Events';
const EventDetail = () => {
    const { eventId } = useParams();
    const event = mockEvents.find(event => event.id === parseInt(eventId));

    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Category: {event.category}</p>
            <p>Date: {event.date}</p>
            <p>Available Seats: {event.seats}</p>
            <p>Price: ${event.price}</p>
        </div>
    );
};

export default EventDetail;
