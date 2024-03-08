"use client"
import React from 'react'
import { Contain, Button } from './style'
import Image from 'next/image'
export default function ContactUs() {
    return (
        <Contain>
            <div style={{ width: '80%', display: 'flex', margin: '0px auto', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: "flex-start", flexDirection: 'column', width: '45%' }}>
                        <text style={{ color: '#fbb7b7', fontSize: '23px', marginBottom: '10px' }}>GET IN TOUCH</text>
                        <text style={{ color: '#737373', fontSize: '55px', marginBottom: '10px' }}>Contact Us</text>
                        <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '55px' }}>if you need consultation with us, you can write a message or call us, we will respond as quickly as possible</text>
                        <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '35px', display: 'flex', flexDirection: 'row' }}>
                            <Image
                                src="/images/icon/email.png"
                                alt="Map image"
                                width={25}
                                height={25}
                                sizes='cover'
                                style={{ marginRight: '35px' }}
                            />
                            ilorenna@gmail.com</text>
                        <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '35px', display: 'flex', flexDirection: 'row' }}>
                            <Image
                                src="/images/icon/phone.png"
                                alt="Map image"
                                width={25}
                                height={25}
                                sizes='cover'
                                style={{ marginRight: '35px' }}
                            />
                            +62 8221 1222 0001</text>
                        <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '35px', display: 'flex', flexDirection: 'row' }}>
                            <Image
                                src="/images/icon/clock.png"
                                alt="Map image"
                                width={25}
                                height={25}
                                sizes='cover'
                                style={{ marginRight: '35px' }}
                            />
                            Everyday : 08.00-21.00</text>
                        <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '55px', display: 'flex', flexDirection: 'row' }}>
                            <Image
                                src="/images/icon/location.png"
                                alt="Map image"
                                width={27}
                                height={27}
                                sizes='cover'
                                style={{ marginRight: '35px' }}
                            />
                            Jl. Raya Cihaluan No.112 Tangerang Selatan,
                            Indonesia 41222</text>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                src="/images/icon/linkedin.png"
                                alt="Map image"
                                width={27}
                                height={27}
                                sizes='cover'
                                style={{ marginRight: '35px' }}
                            />
                            <Image
                                src="/images/icon/twitter.png"
                                alt="Map image"
                                width={27}
                                height={27}
                                sizes='cover'
                                style={{ marginRight: '35px' }}
                            />
                            <Image
                                src="/images/icon/facebook.png"
                                alt="Map image"
                                width={27}
                                height={27}
                                sizes='cover'
                                style={{ marginRight: '35px' }}
                            />
                            <Image
                                src="/images/icon/instagram.png"
                                alt="Map image"
                                width={27}
                                height={27}
                                sizes='cover'
                                style={{ marginRight: '35px' }}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '55%' }}>
                        <Image
                            src="/images/map_location.png"
                            alt="Map image"
                            width={610}
                            height={447}
                            sizes='cover'
                            style={{ width: '90%' }}
                        />
                        <Button style={{ width: '40%' }}>Office Center Map</Button>
                    </div>
                </div>
            </div>
        </Contain>
    )
}
