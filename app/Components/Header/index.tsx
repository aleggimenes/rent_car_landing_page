"use client"
import React from 'react'
import { Contain, Container, Button, ButtonBox } from './style'
import Image from 'next/image'
export default function Header() {
    return (
        <Contain>
            <Container>
                <div style={{ paddingRight: '14%' }}>
                    <Image
                        src="/images/logo_header.png"
                        alt="Hero image"
                        width={93.59}
                        height={25}
                        sizes='cover'
                    />
                </div>
                <ButtonBox>
                    <Button>About</Button>
                    <Button>Car</Button>
                    <Button>Become Partner</Button>
                    <Button>Terms & Conditions</Button>
                    <Button>Contact Us</Button>
                </ButtonBox>
            </Container>
        </Contain>
    )
}
