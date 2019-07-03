import React, { Component } from 'react'
import { Container, MarketsButton } from './EventCard.css'
import { wsEndpoint } from '../../utils/config'
import { IEvent } from '../../models/Event';
import Loading from '../../components/Loading/Loading'
import Markets from '../../components/Markets/Markets'

interface IEventCardProps {
    match: {
        params: {
            eventId: number
        }
    }
    location: {
        state: {
            event: IEvent
        }
    }
}

interface IState {
    event: IEvent
    loading: boolean
    updatedFields: any
    marketsVisible: boolean
}
class EventCard extends Component<IEventCardProps, IState> {
    private w: WebSocket
    constructor(props: IEventCardProps) {
        super(props)
        console.log({props})
        this.w = new WebSocket(wsEndpoint)
        this.state = {
            event: props.location.state.event,
            loading: true,
            updatedFields: {},
            marketsVisible: false
        }
    }

    updateInfo = (e: MessageEvent) => {
        const data = JSON.parse(e.data)
        if(data && data.type === 'OUTCOME_STATUS') {
            this.setState({
                updatedFields: JSON.parse(e.data),
                loading: false
            })
        }
    }

    expandMarkets = () => {
        this.setState({
            marketsVisible: true
        })
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
        const { event, loading, marketsVisible, updatedFields } = this.state
        const {
            name,
            startTime,
            typeName,
            scores,
            status: {
                active,
                started,
                live,
                resulted,
                finished,
                cashoutable
            },
            markets
        } = event

        return (
            <Container>
                <MarketsButton
                    onClick={this.expandMarkets}
                >
                    Display markets
                </MarketsButton>
                <div>
                    <div>{name}</div>
                    <div>{startTime}</div>
                    <div>{typeName}</div>
                    <div>{JSON.stringify(scores)}</div>
                    <div>{active}</div>
                    <div>{started}</div>
                    <div>{live}</div>
                    <div>{resulted}</div>
                    <div>{finished}</div>
                    <div>{cashoutable}</div>
                </div>
                { loading && <Loading /> }
                { !loading && <div>
                    <p>Update info to be used</p>
                    <p>{JSON.stringify(updatedFields)}</p>
                </div>}
                { marketsVisible && <Markets markets={markets} />}
            </Container>
        )
    }
}

export default EventCard