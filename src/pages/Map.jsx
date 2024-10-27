import React from 'react';
import { Navbar } from '@/components/navbar';
import { Map } from '@/components/InteractiveMap';

export default function LandingPage() {
  return (
    <>
    <div className='flex flex-col h-screen'>
    <Navbar />
    <Map />
    </div>
    </>
  );
}
