"use client"
import React from 'react'
import { Contain, Button } from './style'
import Image from 'next/image'
export default function Advantages() {
    return (
        <Contain>
            <div style={{ display: 'flex', width: '80%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', margin: '0px auto' }}>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '30%', marginBottom: '120px' }}>
                    <Image
                        src="/images/icon/rocket.png"
                        alt="Map image"
                        width={65}
                        height={65}
                        sizes='cover'
                        style={{ marginRight: '40px', marginTop: '20px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '65%' }}>
                        <text style={{ color: '#737373', fontSize: '25px', marginBottom: '5px' }}>Easy Rent</text>
                        <text style={{ color: '#A6A6A6', fontSize: '15px' }}> Rent a car at our rental with an easy and fast process without disturbing your productivity</text>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '30%', marginBottom: '120px' }}>
                    <Image
                        src="/images/icon/premium.png"
                        alt="Map image"
                        width={65}
                        height={65}
                        sizes='cover'
                        style={{ marginRight: '40px', marginTop: '20px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '65%' }}>
                        <text style={{ color: '#737373', fontSize: '25px', marginBottom: '5px' }}>Premium Quality</text>
                        <text style={{ color: '#A6A6A6', fontSize: '15px' }}>Our cars are always maintained engine health and cleanliness to provide a more comfortable driving experience</text>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '30%', marginBottom: '120px' }}>
                    <Image
                        src="/images/icon/agent.png"
                        alt="Map image"
                        width={65}
                        height={65}
                        sizes='cover'
                        style={{ marginRight: '40px', marginTop: '20px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '65%' }}>
                        <text style={{ color: '#737373', fontSize: '25px', marginBottom: '5px' }}>Professional Agent</text>
                        <text style={{ color: '#A6A6A6', fontSize: '15px' }}>You can ask your travel companion to escort and guide your journey.</text>
                    </div>
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '30%' }}>
                    <Image
                        src="/images/icon/safety.png"
                        alt="Map image"
                        width={65}
                        height={65}
                        sizes='cover'
                        style={{ marginRight: '40px', marginTop: '20px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '65%' }}>
                        <text style={{ color: '#737373', fontSize: '25px', marginBottom: '5px' }}>Car Safety</text>
                        <text style={{ color: '#A6A6A6', fontSize: '15px' }}>
                            We guarantee the safety of the engine on the car always running well with regular checks on the car engine.</text>
                    </div>
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '30%' }}>
                    <Image
                        src="/images/icon/refund.png"
                        alt="Map image"
                        width={65}
                        height={65}
                        sizes='cover'
                        style={{ marginRight: '40px', marginTop: '20px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '65%' }}>
                        <text style={{ color: '#737373', fontSize: '25px', marginBottom: '5px' }}>Refund</text>
                        <text style={{ color: '#A6A6A6', fontSize: '15px' }}>
                            Our service guarantee provides a money back opportunity if the car does not match the information provided.</text>
                    </div>
                </div>


                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '30%' }}>
                    <Image
                        src="/images/icon/live.png"
                        alt="Map image"
                        width={65}
                        height={65}
                        sizes='cover'
                        style={{ marginRight: '40px', marginTop: '20px' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '65%' }}>
                        <text style={{ color: '#737373', fontSize: '25px', marginBottom: '5px' }}>Live Monitoring</text>
                        <text style={{ color: '#A6A6A6', fontSize: '15px' }}>Our service provides direct customer monitoring to monitor trips in terms of safety and comfort.</text>
                    </div>
                </div>

            </div>
        </Contain>
    )
}
