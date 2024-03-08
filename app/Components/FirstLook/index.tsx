"use client"
import React from 'react'
import { Contain, Button } from './style'
import Image from "next/image";

export default function FirstLook() {
  return (
    <Contain>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 50 }}>
        <div style={{ marginTop: 40, display: 'flex', alignItems: 'left', flexDirection: 'column', marginLeft: 120, width: '40%', justifyItems: 'left' }}>
          <span style={{ fontWeight: 'bold', color: '#595959', fontSize: '50px', textAlign: 'left' }}>We Have Prepared a Car For Your Trip</span>
          <span style={{ color: '#737373', textAlign: 'left', fontSize: '20px', }}>We have many types of cars that are ready for you to travel anywhere and anytime.</span>
          <div style={{ marginTop: 90, width: '60%', justifyContent: 'space-around', display: 'flex' }}>
            <Button>Get in Touch</Button>
            <Button style={{ backgroundColor: 'white', color: '#f55f5f', border: '1px solid', borderColor: '#f55f5f' }}>Our Car</Button>
          </div>
        </div>
        <div style={{ marginTop: 100, display: 'flex', width: '90%', flex: 1 }}>
          <Image
            src="/images/map_header.png"
            alt="Map image"
            width={10}
            height={10}
            sizes='contain'
            style={{ zIndex: -1, position: 'absolute', left: '40%', width: '60%', top: '13%', height: '60%' }}
          />
          <Image
            src="/images/car_header.png"
            alt="Hero image"
            width={50}
            height={50}
            sizes='cover'
            style={{ width: '100%', height: '90%' }}
          />
        </div>
      </div>
    </Contain>
  )
}
