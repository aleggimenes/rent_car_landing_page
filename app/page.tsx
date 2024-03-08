"use client"
import Header from "./Components/Header";
import Image from "next/image";
import FirstLook from "./Components/FirstLook";
import ChooseCar from "./Components/ChooseCar";
import Services from "./Components/Serivces";
import Advantages from "./Components/Advantages";
import ContactUs from "./Components/ContactUs";
import Costumers from "./Components/Costumers";
import Subscribe from "./Components/Subscribe";
import { Button } from "./page_style";
import { Bruno_Ace } from "next/font/google";
export default function Home() {
  return (
    <div>
      <Header />
      <FirstLook />
      <div style={{ backgroundColor: '#fee7e7', width: '100%', height: '280px', marginBottom: '100px' }}>
      </div>
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginBottom: '120px' }}>
        <Image
          src="/images/logo.png"
          alt="Map image"
          width={100}
          height={100}
          sizes='cover'
          style={{ width: '80%', alignSelf: 'center' }}
        />
      </div>
      <ChooseCar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0px', marginBottom: '70px' }}>
        <Button style={{ width: '8%' }}>See All</Button>
      </div>
      <Services />
      <div style={{ display: 'flex', margin: '0px auto', alignItems: 'center', justifyContent: 'center', width: '80%', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column', paddingTop: 30, zIndex: 99 }}>
          <text style={{ color: '#fbb7b7', fontSize: '23px', marginBottom: '10px' }}>ADVANTAGES</text>
          <text style={{ color: '#737373', fontSize: '55px', marginBottom: '10px' }}>Why Choose Us ?</text>
          <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '55px' }}>We present many guarantees and advantages when you rent a car with us for your trip. Here are some of the advantages that you will get.</text>
        </div>
      </div>
      <Advantages />
      <ContactUs />
      <div style={{ display: 'flex', margin: '0px auto', alignItems: 'center', justifyContent: 'center', width: '80%', flexDirection: 'column', marginBottom: '50px' }}>
        <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
          <text style={{ color: '#fbb7b7', fontSize: '23px', marginBottom: '10px' }}>OUR REVIEW</text>
          <text style={{ color: '#737373', fontSize: '55px', marginBottom: '10px' }}>What They Say ?</text>
          <text style={{ color: '#A6A6A6', fontSize: '17px', marginBottom: '55px' }}>Here are some comments from our customers, be one of them</text>
        </div>
      </div>
      <Costumers />
      <div style={{ display: 'flex', margin: '0px auto', width: '80%', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
        <Button style={{ marginLeft: '0px', width: '10%' }}>See All</Button>
      </div>
      <Subscribe />
      <div style={{ display: 'flex',  margin: '0px auto', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width:'50%', marginRight:'40px' }}>
          <Image
            src="/images/logo_header.png"
            alt="Hero image"
            width={100}
            height={100}
            sizes='cover'
            style={{ marginBottom: '30px' }}
          />
          <text style={{ color: '#A6A6A6', marginBottom: '40px' }}>
            We are a well-known car rental service that has many partners in each
            region to connect with you to assist in your trip in meetings, events, holidays or long trips.
          </text>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '8%' }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', width:'40%' }}>
          <text style={{ color: '#737373', fontSize: '25px' }}>Company</text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            About Us
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Services
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Cars
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Our Partners
          </text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width:'40%' }}>
          <text style={{ color: '#737373', fontSize: '25px' }}>Services</text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Instant Rent
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Private Driver
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Long Trip
          </text>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width:'40%' }}>
          <text style={{ color: '#737373', fontSize: '25px' }}>Support</text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Blog
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            FAQ
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Call Center
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Partner With Us
          </text>
          <text style={{ color: '#A6A6A6', marginBottom: '10px' }}>
            Terms & Condition
          </text>
        </div>
      </div>
    </div>
  );
}
