import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div key={index} className="timeline-event">
                    <div className="timeline-content">
                        <h3>{event.title}</h3>
                        <h4>{event.date}</h4>
                        <h4>{event.location}</h4>
                        <p>{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;