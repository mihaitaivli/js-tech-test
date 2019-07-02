import React, { Component, Fragment } from 'react'
import { IEvent } from '../models/Event';


class LiveFootballEvents extends Component<{}, {data: IEvent | null}> {
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
                    data: e.data
                })}
        w.onopen = () => w.send(JSON.stringify({ type: "getLiveEvents" }));
    }

    render() {
        const  { data } = this.state
        return (
            <Fragment>
                {data && <div>{data}</div>}
            </Fragment>
        )
    }
}

export default LiveFootballEvents