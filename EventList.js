
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { mockEvents } from '../data/Events';

const EventList = () => {
    const { user } = useAuth();
    const [events, setEvents] = useState(mockEvents);
    const [loading, setLoading] = useState(true);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const bookTicket = (eventId) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === eventId && event.seats > 0
                    ? { ...event, seats: event.seats - 1 }
                    : event
            )
        );
    };

    const filteredEvents = events.filter(event =>
        (categoryFilter ? event.category === categoryFilter : true) &&
        (event.title.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (loading) return <p>Loading events...</p>;

    return (
        <div>
            <h2>Available Events</h2>

            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
                <option value="">All Categories</option>
                <option value="Music">Music</option>
                <option value="Art">Art</option>
                <option value="Food">Food</option>
                <option value="Technology">Technology</option>
                <option value="Sports">Sports</option>
                <option value="Theater">Theater</option>
                <option value="Education">Education</option>
            </select>

            <ul>
                {filteredEvents.map(event => (
                    <li key={event.id}>
                        <h3 onClick={() => navigate(`/events/${event.id}`)} style={{ cursor: 'pointer' }}>{event.title}</h3>
                        <p>{event.description}</p>
                        <p>Category: {event.category}</p>
                        <p>Date: {event.date}</p>
                        <p>Available Seats: {event.seats}</p>
                        <p>Price: ${event.price}</p>
                        <button onClick={() => bookTicket(event.id)} disabled={event.seats === 0}>
                            {event.seats > 0 ? 'Book Ticket' : 'Fully Booked'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
