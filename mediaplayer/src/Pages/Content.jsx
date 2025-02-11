import React from 'react'
import musicImg from '../assets/neon.gif'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import musical from '../assets/img1.jpg'
import musical2 from '../assets/img2.jpg'
import musical3 from '../assets/Img4.jpg'

const Content = () => {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className="col-5 ">
                    <h1>Welcome To <span style={{ color: "red" }}>Media Player</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptate dolore voluptates culpa non quidem rerum harum fugit aliquid, magni aut obcaecati officiis! Tempora alias architecto esse sed odio doloremque.</p>
                    <Link to={"/home"}> <Button variant="primary">Let's Start</Button></Link>
                </div>
                <div className="col-1"></div>
                <div className="col-6">

                    <img className='mt-5 ' src={musicImg} alt="" />

                </div>

                <div className='row'>
                    <h2 className='d-flex justify-content-center mt-5'>Features</h2>
                    <div className="col-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={musical} />
                            <Card.Body>
                                <Card.Title>Managing Videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={musical2} />
                            <Card.Body>
                                <Card.Title>Categorise Videos</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={musical3} />
                            <Card.Body>
                                <Card.Title>Managing History</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

            <div className='row border rounded mt-5 p-5'>

                <div className="col-5">
                    <h3 style={{ color: "primary" }}>Simple,Fast and Powerful</h3>
                    <p style={{}}>
                        {""}
                        <span className='fs-5 fw-bolder ' style={{color:'red'}}>Play Everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quas inventore dignissimos enim error in adipisci quasi quos voluptatem, veniam quod aspernatur reprehenderit fuga, maiores mollitia omnis itaque illum nihil.</p>

                    <p> {""}
                        <span className='fs-5 fw-bolder' style={{color:'red'}}>Categorise Videos</span>:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit minus animi dicta laudantium, porro quasi a itaque asperiores. Ducimus quo omnis labore incidunt earum voluptatum fugiat blanditiis quaerat sunt.</p>

                    <p> {""}
                        <span className='fs-5 fw-bolder' style={{color:'red'}}>Managing History</span>:Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur odit minus animi dicta laudantium, porro quasi a itaque asperiores. Ducimus quo omnis labore incidunt earum voluptatum fugiat blanditiis quaerat sunt.</p>

                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6COmYeLsz4c?si=K0ohMp9-Sw4boA_C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>




            </div>
        </div>



    )
}

export default Content