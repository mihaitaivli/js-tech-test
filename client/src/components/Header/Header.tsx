import React from 'react'
import { Container, Title } from './Header.css'

const Header: React.FC<{}> = () => (
    <Container>
        <Title>SuperBet</Title>
        <select id='oddStyle'>
            <option value='fractional'>Fractional Odds</option>
            <option value='decimal'>Decimal Odds</option>
        </select>
    </Container>
)

export default Header