import React, { useState } from 'react'
import classes from '../src/Page.module.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import img from './assets/car.jpg'
import { LiaBarsSolid } from 'react-icons/lia'
import { MdLocationOn } from 'react-icons/md'
import { AiFillClockCircle } from 'react-icons/ai'
import { FiArrowUpRight } from 'react-icons/fi'

const Page = () => {
    const [click, setClick] = useState(false)
    const value = [{
        name: 'View all',
        id: 1
    },
    {
        name: 'Development',
        id: 2
    },
    {
        name: "Desing",
        id: 3
    },
    {
        name: 'Markrting',
        id: 4
    },
    {
        name: 'Customer Experience',
        id: 5
    },
    {
        name: 'Operations',
        id: 6
    },
    {
        name: 'Finance',
        id: 7
    },
    {
        name: 'Managment',
        id: 8
    }]
    const jobs = [{
        name: 'Product Designer',
        para: `we' re looking for a mid-level product desinger to join our team`,
        location: '100% remote',
        worktime: 'Full-time',
        link: 'Apply',
        id: 1
    },
    {
        name: 'Engineering Manager',
        para: `we' re looking for an expereinced engineering manager to join our team`,
        location: '100% remote',
        worktime: 'Fulltime',
        link: 'Apply',
        id: 2
    }
    ]

    return (
        <div className={classes.container}>
            <Row className={classes.wrap}>
                <Col lg='12'><LiaBarsSolid className={`${classes.barbtn}`} /></Col>
                <Col lg='4'>
                    <Image fluid src={img} alt='image' />
                </Col>
                <Col lg='8' >
                    <h1 className={classes.content}>Be part of our mission</h1>
                    <p className={classes.para}>We're looking for passionate people to join us on our mission. We value flat hierarchies,clear communication,and full ownership and responsibility.</p>
                </Col>
            </Row>

            <button className={classes.filter} onClick={(e) => (setClick(!click))}>Filter</button>
            <div className={classes.list}>

                {
                    click ? value.map((value, index) => {
                        return (
                            <>
                                <p className={classes.lists}>{value.name}</p>
                            </>
                        )
                    }) : null
                }
            </div>

            <Row>
                {
                    jobs.map((value, index) => {
                        return (
                            <>
                                <Col lg='8'>
                                    <div>
                                        <h1>{value.name}</h1>
                                        <p>{value.para}</p>
                                    </div>
                                    <div className={classes.line}>
                                        <button className={classes.btn}><span><MdLocationOn className={classes.icon} /></span>{value.worktime}</button>
                                        <button className={classes.btn}><span><AiFillClockCircle className={classes.icon} /></span>{value.worktime}</button>
                                    </div>
                                </Col>
                                <Col lg='4'>
                                    <p className={classes.apply}>Apply <FiArrowUpRight /></p>
                                </Col>
                                <hr className={classes.hr} />
                            </>
                        )
                    })
                }
            </Row>
        </div>
    )
}

export default Page