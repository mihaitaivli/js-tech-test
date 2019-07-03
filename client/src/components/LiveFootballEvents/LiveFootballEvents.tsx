import React, { Component } from 'react'
import { IEvent } from '../../models/Event'
import get from 'lodash/get'
import Event from '../Event/Event'
import { Container } from './LiveFootballEvents.css'

class LiveFootballEvents extends Component<{}, {data: any}> {
    private w: WebSocket
    constructor(props: any) {
        
        super(props)
        this.w = new WebSocket('ws://localhost:8889')
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        this.w.onmessage = (e:MessageEvent) => {
            this.setState({
                data: JSON.parse(e.data)
            })}
        this.w.onopen = () => this.w.send(JSON.stringify({ type: "getLiveEvents" }));
    }
    componentWillUnmount() {
        this.w.close()
    }

    render() {
        const  { data } = this.state
        
        return (
            <Container>
                {data
                    && data.type === 'LIVE_EVENTS_DATA'
                    && get(data, 'data', [])
                        .map((event: IEvent) => <Event event={event} />)
                }
            </Container>
        )
    }
    
}

export default LiveFootballEvents