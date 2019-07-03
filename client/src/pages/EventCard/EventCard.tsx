import React, { Component } from 'react'
import { Container } from './EventCard.css'
import { wsEndpoint } from '../../utils/config'

interface IEventCardProps {
    match: {
        params: {
            eventId: number
        }
    }
}

class EventCard extends Component<IEventCardProps, {event: any}> {
    private w: WebSocket
    constructor(props: IEventCardProps) {
        super(props)
        this.w = new WebSocket(wsEndpoint)
        this.state = {
            event: {}
        }
    }

    componentDidMount() {
        const { eventId } = this.props.match.params
        this.w.onmessage = (e:MessageEvent) => {
            this.setState({
                event: JSON.parse(e.data)
            })}
        this.w.onopen = () =>
            this.w.send(JSON.stringify({type:'subscribe', keys:[`e.${eventId}`]}));
    }

    componentWillUnmount() {
        this.w.close()
    }

    render() {
        const { event } = this.state

        return (
            <Container>
                {JSON.stringify(event)}
            </Container>
        )
    }
}

export default EventCard