import React from 'react';
import { Container } from './styles';
import { Heading, Button } from '@people/styles';

const Thought = () => {
    return (
        <Container>
            <Heading type="h1">
                People's Thoughts
            </Heading>
            <Button type="primary">Halo</Button>
        </Container>
    )
}

export default Thought;