import React, { Component } from 'react'
import { IMarket } from '../../models/Market'
import { wsEndpoint } from '../../utils/config'
import { Container } from './Markets.css'

interface IProps {
    markets: number[]
}

interface IState {
    markets: IMarket[] | null
}

class Markets extends Component<IProps, IState> {
    w: WebSocket
    constructor(props: IProps) {
        super(props)
        this.w = new WebSocket(wsEndpoint)
        this.state = {
            markets: null
        }
    }

    componentDidMount() {
        this.w.onmessage = (e:MessageEvent) => {
            this.setState({
                markets: JSON.parse(e.data)
            })}
        this.w.onopen = () =>
            this.w.send(JSON.stringify({ type: "getMarket", id: this.props.markets[0] })); // try the first
    }

    componentWillUnmount() {
        this.w.close()
    }

    render() {
        const { markets } = this.state

        return(
            <Container>
                {JSON.stringify(markets)}
            </Container>
        )
    }
}

export default Markets