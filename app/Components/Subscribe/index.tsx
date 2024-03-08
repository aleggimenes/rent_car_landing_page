"use client"
import React from 'react'
import { Contain, Button } from './style'
import Image from 'next/image'
export default function Subscribe() {
    return (
        <Contain>
            <div style={{ backgroundColor: '#fee7e7', width: '100%', marginBottom: '100px' }}>
                <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column', marginBottom: '50px', paddingTop: '40px' }}>
                    <text style={{ color: '#737373', fontSize: '45px', marginBottom: '20px', }}>SUBSCRIBE OUR NEWS</text>
                    <text style={{ color: '#A6A6A6', fontSize: '20px', marginBottom: '55px', }}> We can help you provide the latest news whenever and wherever you are via email</text>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '35%', marginBottom: '50px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', width: '65%', paddingLeft: 20, }}>
                            <Image
                                src="/images/email_input.png"
                                alt="Map image"
                                width={25}
                                height={25}
                                sizes='cover'
                                style={{ alignSelf: 'center' }}
                            />
                            <input type="text" style={{ backgroundColor: 'white', padding: '20px', paddingLeft: '10px', width: '100%' }} placeholder="example.@gmail.com" />
                        </div>
                        <Button style={{ marginLeft: '0px', width: '30%' }}>Subscribe</Button>
                    </div>
                </div>
            </div>
        </Contain>
    )
}
