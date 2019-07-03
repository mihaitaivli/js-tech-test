import React from 'react'
import { Container } from './Time.css'

interface IProps {
    startTime: string
}

const Time: React.FC<IProps> = ({ startTime }) => {
    const date = new Date(startTime)
    const time = date.toTimeString().slice(0,5)

    return <Container>
        {time}
    </Container>
}

export default Time