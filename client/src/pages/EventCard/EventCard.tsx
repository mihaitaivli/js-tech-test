import React, { Component } from 'react'
import { Container } from './EventCard.css'
import { wsEndpoint } from '../../utils/config'
import { IEvent } from '../../models/Event';
import Loading from '../../components/Loading/Loading'

interface IEventCardProps {
    match: {
        params: {
            eventId: number
        }
    }
}

interface IState {
    event: IEvent | null,
    loading: boolean
}
class EventCard extends Component<IEventCardProps, IState> {
    private w: WebSocket
    constructor(props: IEventCardProps) {
        super(props)
        this.w = new WebSocket(wsEndpoint)
        this.state = {
            event: null,
            loading: true
        }
    }

    updateInfo = (e: MessageEvent) => {
        const data = JSON.parse(e.data)
        if(data && data.type === 'OUTCOME_STATUS') {
            this.setState({
                event: JSON.parse(e.data),
                loading: false
            })
        }
    }

    componentDidMount() {
        const { eventId } = this.props.match.params
        this.w.onmessage = (e:MessageEvent) => this.updateInfo(e)
        this.w.onopen = () =>
            this.w.send(JSON.stringify({type:'subscribe', keys:[`e.${eventId}`]}));
    }

    componentWillUnmount() {
        this.w.close()
    }

    render() {
        const { event, loading } = this.state

        return (
            <Container>
                <Loading />
                {/* { loading && <Loading /> } */}
                {/* { !loading && JSON.stringify(event)} */}
            </Container>
        )
    }
}

export default EventCard