import React from 'react'
import { Container } from './Loading.css'

const Loading: React.FC<{}> = () => (
    <Container>
        <h3>Loading...</h3>
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Container>
)

export default Loading