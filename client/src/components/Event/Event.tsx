import React from 'react'
import { IEvent } from '../../models/Event'
import { Container } from './Event.css'
import Time from '../Time/Time'
import EventInfo from '../EventInfo/EventInfo'

interface IProps {
    event: IEvent
}

const Event: React.FC<IProps> = ({ event }) => {
    const { eventId } = event

    return (
    <Container key={eventId}>
        <Time startTime={event.startTime}/>
        <EventInfo event={event} />
    </Container>
)}

export default Event