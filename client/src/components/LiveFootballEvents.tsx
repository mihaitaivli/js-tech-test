import React, { Component, Fragment } from 'react'
import { IEvent } from '../models/Event'

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
        // const w = new WebSocket('ws://localhost:8889')
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