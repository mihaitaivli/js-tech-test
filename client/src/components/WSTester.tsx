import React, { Component, Fragment } from 'react';

class WSTester extends Component<{}, {data: any}> {
    constructor(props: any) {
        super(props)
        this.state = {
            data: undefined
        }
    }
    componentDidMount() {
        const w = new WebSocket('ws://localhost:8889')
        w.onmessage = e => this.setState({
                data: e.data
            })
        w.onopen = () => w.send(JSON.stringify({ type: "getMarket", id: 93650821 }));
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

export default WSTester