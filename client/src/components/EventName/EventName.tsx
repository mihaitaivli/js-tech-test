import React from 'react'
import { IEvent } from '../../models/Event'
import { Container } from './EventName.css'

interface IProps {
    event: IEvent
}

const EventName: React.FC<IProps> = ({ event }) => {
    // const name = 
    return (<Container>
        {event.name}
    </Container>)
}

export default EventName