"use client"
import React from 'react'
import { Contain, Button } from './style'
import Image from "next/image";

export default function ChooseCar() {
    return (
        <Contain>
            <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
                <text style={{ color: '#fbb7b7', fontSize: '20px', marginBottom: '10px' }}>POPULAR CAR</text>
                <text style={{ color: '#737373', fontSize: '50px', marginBottom: '10px' }}>Choose Your Suitable Car</text>
                <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '10px' }}>We present popular cars that are rented by customers to maximize your comfort on long trips.</text>
            </div>
            <div style={{ display: 'flex', width: '80%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: '0 auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '33%' }}>
                    <div style={{ width: '100%', height: '269px', backgroundColor: '#f2eaea', marginRight: '10px', display: 'flex', justifyContent: 'center' }}>
                        <Image
                            src="/images/car_1.png"
                            alt="Map image"
                            width={297}
                            height={0}
                            sizes='100vh'
                            style={{ alignSelf: 'center' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, padding: 10 }}>
                        <text style={{ color: '#737373' }}>Lexus CT200H</text>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <text style={{ color: '#404040', fontWeight: 'bold' }}>$120/Day</text>
                            <div style={{ display: 'flex' }}>
                                <Image
                                    src="/images/map_icon.png"
                                    alt="Map image"
                                    width={17}
                                    height={18}
                                    sizes='100vh'

                                />
                                <text style={{ color: '#A6A6A6', marginRight: '10px', fontSize: '14px', marginLeft: '10px' }}>Djakarta</text>
                            </div>
                        </div>
                    </div>

                    <Button style={{ width: '100%', marginLeft: '0px' }}>Rent Now</Button>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '33%' }}>
                    <div style={{ width: '100%', height: '269px', backgroundColor: '#f2eaea', marginRight: '10px', display: 'flex', justifyContent: 'center' }}>
                        <Image
                            src="/images/car_2.png"
                            alt="Map image"
                            width={297}
                            height={0}
                            sizes='100vh'
                            style={{ alignSelf: 'center', alignContent: 'center' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, padding: 10 }}>
                        <text style={{ color: '#737373' }}>Jaguar F-Pace</text>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <text style={{ color: '#404040', fontWeight: 'bold' }}>$132/Day</text>
                            <div style={{ display: 'flex' }}>
                                <Image
                                    src="/images/map_icon.png"
                                    alt="Map image"
                                    width={17}
                                    height={18}
                                    sizes='100vh'
                                />
                                <text style={{ color: '#A6A6A6', marginRight: '10px', fontSize: '14px', marginLeft: '10px' }}>Bali</text>
                            </div>
                        </div>
                    </div>
                    <Button style={{ width: '100%', marginLeft: '0px' }}>Rent Now</Button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', width: '33%' }}>
                    <div style={{ width: '100%', height: '269px', backgroundColor: '#f2eaea', display: 'flex', justifyContent: 'center' }}>
                        <Image
                            src="/images/car_3.png"
                            alt="Map image"
                            width={297}
                            height={0}
                            sizes='100vh'
                            style={{ alignSelf: 'center' }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, padding: 10 }}>
                        <text style={{ color: '#737373' }}>Marcedes Benz</text>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <text style={{ color: '#404040', fontWeight: 'bold' }}>$132/Day</text>
                            <div style={{ display: 'flex' }}>
                                <Image
                                    src="/images/map_icon.png"
                                    alt="Map image"
                                    width={17}
                                    height={18}
                                    sizes='100vh'
                                />
                                <text style={{ color: '#A6A6A6', marginRight: '10px', fontSize: '14px', marginLeft: '10px' }}>Bandung</text>
                            </div>
                        </div>
                    </div>
                    <Button style={{ width: '100%', marginLeft: '0px', color: '#737373', border: '2px solid', borderColor: '#737373', backgroundColor: 'white' }}>Rent Now</Button>

                </div>
            </div>
        </Contain>
    )
}
