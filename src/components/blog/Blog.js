
import React from 'react';
import {CardDeck, Card} from 'react-bootstrap';
import blog1 from '../../assets/MinecraftMaze7.jpg';
import blog2 from '../../assets/lab2.jpg';
import blog3 from '../../assets/escape_room.jpg';
import './Blog.css';

function blog() {
    return (
        <CardDeck className="m-0">
            <Card>
                <Card.Img variant="top" src={blog1} />
                <Card.Body>
                    <Card.Title>Amazing Escape Game!!!</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={blog2} />
                <Card.Body>
                    <Card.Title>Lab escape is too difficult for me...</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={blog3} />
                <Card.Body>
                    <Card.Title>Team work is good.</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    )
}

export default blog
