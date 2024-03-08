"use client"
import React from 'react'
import { Contain, Button } from './style'
import Image from "next/image";

export default function Services() {
    return (
        <Contain>
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url("/images/bk_2.png")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column', paddingTop: 30, zIndex: 99 }}>
                    <text style={{ color: '#fbb7b7', fontSize: '23px', marginBottom: '10px', opacity: 1, zIndex: 99 }}>SERVICES</text>
                    <text style={{ color: '#737373', fontSize: '55px', marginBottom: '10px', opacity: 1, zIndex: 99 }}>Our Services</text>
                    <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '55px', opacity: 1, zIndex: 99 }}>Our service is not only renting a car, but we also provide a private chauffeur service that can guide you on your trip and also longtrip packages to support your travel needs.</text>
                </div>
                <div style={{ width: '80%', display: 'flex', margin: '0 auto', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div
                        style={{
                            backgroundImage: `url("/images/rent_image.png")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '32%',
                            height: '65vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            src="/images/key_icon.png"
                            alt="Map image"
                            width={100}
                            height={100}
                            sizes='cover'
                            style={{ width: '25%', alignSelf: 'center', marginBottom: '30px', marginTop: '75px' }}
                        />
                        <div style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                            <text style={{ fontSize: '28px', color: 'white', marginBottom: '30px' }}>Instant Rent</text>
                            <text style={{ fontSize: '16px', color: 'white' }}>We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task . . .</text>
                        </div>
                        <Button style={{ marginLeft: '0px', width: '40%' }}>Read More</Button>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url("/images/private_image.png")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '32%',
                            height: '65vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            src="/images/private_icon.png"
                            alt="Map image"
                            width={100}
                            height={100}
                            sizes='cover'
                            style={{ width: '25%', alignSelf: 'center', marginBottom: '30px', marginTop: '75px' }}
                        />
                        <div style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                            <text style={{ fontSize: '28px', color: 'white', marginBottom: '30px' }}>Private Driver</text>
                            <text style={{ fontSize: '16px', color: 'white' }}>
                                We have professional agents to accompany your trip useful for your protection from disturbances that you do not like . . .</text>
                        </div>
                        <Button style={{ marginLeft: '0px', width: '40%' }}>Read More</Button>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url("/images/long_trip_image.png")`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            width: '32%',
                            height: '65vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            src="/images/trip_icon.png"
                            alt="Map image"
                            width={100}
                            height={100}
                            sizes='cover'
                            style={{ width: '25%', alignSelf: 'center', marginBottom: '30px', marginTop: '75px' }}
                        />
                        <div style={{ width: '70%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                            <text style={{ fontSize: '28px', color: 'white', marginBottom: '30px' }}>Long Trip</text>
                            <text style={{ fontSize: '16px', color: 'white' }}>Long trips whenever and wherever you want can comfortably use our car collection that supports long and long trips . . .</text>
                        </div>
                        <Button style={{ marginLeft: '0px', width: '40%' }}>Read More</Button>
                    </div>
                </div>
            </div>
        </Contain>
    )
}
