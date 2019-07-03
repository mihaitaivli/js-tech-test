import React from 'react'
import { IEvent } from '../../models/Event'
import { Container } from './EventInfo.css'
import { Link } from 'react-router-dom'


interface IProps {
    event: IEvent
}

const EventName: React.FC<IProps> = ({ event }) => {
    const { eventId, name } = event
    const displayName = name
    return (
        <Container>
            <Link
                style={{
                    textDecoration:'none',
                    color:'black'
                }}
                to={`/events/${eventId}`}
            >{displayName}</Link>
        </Container>
    )
}

export default EventName