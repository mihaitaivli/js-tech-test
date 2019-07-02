import React, { Component, Fragment } from 'react'
import { IEvent } from '../models/Event'

class LiveFootballEvents extends Component<{}, {data: any}> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: null
        }
    }
    componentDidMount() {
        const w = new WebSocket('ws://localhost:8889')
        w.onmessage = (e:MessageEvent) => {
            this.setState({
                data: JSON.parse(e.data)
            })}
        w.onopen = () => w.send(JSON.stringify({ type: "getLiveEvents" }));
    }
        
    render() {
        const  { data } = this.state
        if(data) {
            console.log(data.data)
        }
        return (
            <Fragment>
                {data && data.type === 'LIVE_EVENTS_DATA' && data.data.map((event: IEvent) => (
                    <div key={event.eventId}>
                        {event.name}
                    </div>
                ))}
            </Fragment>
        )
    }
    
}

export default LiveFootballEvents