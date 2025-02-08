// Description: The page for the Astro Photography competition.

import React from 'react'
import Card from '@/components/Card'
const Astro = () => {
  return (
    <div className='min-h-screen pt-32'>
        <Card title="Astro Photography">
            <p className="text-lg text-[#98a0b3]">
            The Astro Photography competition is a competition where you can submit your best photos of the night sky. 
            The competition is open to all ages and skill levels. 
            The photos can be taken with any type of camera, including DSLR, mirrorless, and smartphone cameras. 
            The photos can be of any celestial object, including the moon, stars, planets, and galaxies. 
            The photos will be judged based on creativity, composition, and technical skill. 
            The winners of the competition will receive prizes, including cash prizes and photography equipment. 
            The winning photos will also be featured on our website and social media channels. 
            The deadline for submissions is August 31st. 
            We look forward to seeing your best astro photography photos!
            </p>
        </Card>
    </div>
  )
}

export default Astro