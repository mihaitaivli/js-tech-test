import React from 'react'
import { IEvent } from '../../models/Event'
import { Container } from './Event.css'

interface IProps {
    event: IEvent
}

const Event: React.FC<IProps> = ({ event }) => (
    <Container key={event.eventId}>
        {event.name}
        {event.sort}
    </Container>
)

export default Event