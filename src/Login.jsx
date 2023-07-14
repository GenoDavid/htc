import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../src/Login.module.css'
// import OtpInput from 'otp-input-react'

export const Login = () => {

    const [otp, setOtp] = useState(new Array(4).fill(''))
    const handleChange = (e, index) => {
        if (isNaN(e.value))
            return false;
        setOtp([...otp.map((d, idx) => (idx === index) ? e.value : d)])

        if (e.nextinput) {
            e.nextinput.focus();
        }

    }
    console.log(otp);

    return (
        <div>
            <Container>
                <Row className={classes.row}>
                    <Col className={classes.col}>
                        <div className={classes.wrap}>
                            <h2>Welcome to the channel!!!</h2>
                            <p>Enter the OTP sent to you to verify your identity</p>
                            {
                                otp.map((data, index) => {
                                    return (
                                        <input
                                            className={classes.otpfield}
                                            type="text"
                                            name="otp"
                                            maxLength="1"
                                            value={data}
                                            key={index}
                                            onChange={e => (handleChange(e.target, index))}
                                            onFocus={e => e.target.select()}
                                        />
                                    )

                                })
                            }
                            {/* <OtpInput></OtpInput> */}

                            <p>OTP Entered -{otp.join('')}</p>
                            <p>

                                <button className={`${classes.btn, 'btn-secondary'}`}>
                                    Clear
                                </button>
                                <button
                                    className={`${classes.btn, 'btn-primary'}`}>
                                    Verify OTP
                                </button>

                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
