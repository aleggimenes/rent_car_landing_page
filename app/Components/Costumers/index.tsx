"use client"
import React from 'react'
import { Contain, Button } from './style'
import Image from 'next/image'
export default function Costumers() {
    return (
        <Contain>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%', margin: '0px auto', marginBottom: '30px' }}>
                <div style={{ width: '32%', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', margin: '0px auto', marginBottom: '20px' }}>
                        <Image
                            src="/images/aspas.png"
                            alt="Map image"
                            width={55}
                            height={55}
                            sizes='cover'
                        />
                        <Image
                            src="/images/5_stars.png"
                            alt="Map image"
                            width={105}
                            height={105}
                            sizes='cover'
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', margin: '0px auto' }}>
                        <text style={{ fontSize: '19px', marginBottom: '40px', color: '#A6A6A6' }}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Neque nam suscipit amet nec eget fermentum, elementum purus aliquet.
                            Porttitor elementum a felis, tempus erat orci.
                        </text>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', margin: '0px auto', marginBottom: '30px' }}>
                        <Image
                            src="/images/costumer_1.png"
                            alt="Map image"
                            width={45}
                            height={45}
                            sizes='100vh'
                            style={{ marginRight: '50px', width: '120px' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <text style={{ fontSize: '24px', marginBottom: '10px', color: '#737373' }}>
                                Melinda Lenny
                            </text>
                            <text style={{ fontSize: '20px', color: '#BFBFBF' }}>
                                Medan
                            </text>
                        </div>
                    </div>
                </div>
                <div style={{ width: '32%', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', margin: '0px auto', marginBottom: '20px' }}>
                        <Image
                            src="/images/aspas.png"
                            alt="Map image"
                            width={55}
                            height={55}
                            sizes='cover'
                        />
                        <Image
                            src="/images/5_stars.png"
                            alt="Map image"
                            width={105}
                            height={105}
                            sizes='cover'
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', margin: '0px auto' }}>
                        <text style={{ fontSize: '19px', marginBottom: '40px', color: '#A6A6A6' }}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Neque nam suscipit amet nec eget fermentum, elementum purus aliquet.
                            Porttitor elementum a felis, tempus erat orci.
                        </text>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', margin: '0px auto', marginBottom: '30px' }}>
                        <Image
                            src="/images/costumer_2.png"
                            alt="Map image"
                            width={45}
                            height={45}
                            sizes='100vh'
                            style={{ marginRight: '50px', width: '120px' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <text style={{ fontSize: '24px', marginBottom: '10px', color: '#737373' }}>
                                Jacob Stevan
                            </text>
                            <text style={{ fontSize: '20px', color: '#BFBFBF' }}>
                                Bandung
                            </text>
                        </div>
                    </div>
                </div>
                <div style={{ width: '32%', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', alignItems: 'center', justifyContent: 'space-between', margin: '0px auto', marginBottom: '20px' }}>
                        <Image
                            src="/images/aspas.png"
                            alt="Map image"
                            width={55}
                            height={55}
                            sizes='cover'
                        />
                        <Image
                            src="/images/5_stars.png"
                            alt="Map image"
                            width={105}
                            height={105}
                            sizes='cover'
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '90%', margin: '0px auto' }}>
                        <text style={{ fontSize: '19px', marginBottom: '40px', color: '#A6A6A6' }}>
                            Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.
                            Neque nam suscipit amet nec eget fermentum, elementum purus aliquet.
                            Porttitor elementum a felis, tempus erat orci.
                        </text>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', width: '90%', margin: '0px auto', marginBottom: '30px' }}>
                        <Image
                            src="/images/costumer_3.png"
                            alt="Map image"
                            width={45}
                            height={45}
                            sizes='100vh'
                            style={{ marginRight: '50px', width: '120px' }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                            <text style={{ fontSize: '24px', marginBottom: '10px', color: '#737373' }}>
                                Roben Musstar
                            </text>
                            <text style={{ fontSize: '20px', color: '#BFBFBF' }}>
                                Bali
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </Contain>
    )
}
