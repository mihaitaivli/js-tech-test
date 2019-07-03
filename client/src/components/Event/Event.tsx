import React from 'react'
import { IEvent } from '../../models/Event'
import { Container } from './Event.css'
import { Link } from "react-router-dom"

interface IProps {
    event: IEvent
}

const Event: React.FC<IProps> = ({ event }) => {
    const { eventId } = event

    return (
    <Container key={eventId}>
        {event.name}
        <Link to={`/events/${eventId}`}>More..</Link>
    </Container>
)}

export default Event