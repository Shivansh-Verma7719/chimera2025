'use client';

import React from 'react'
import Card from '@/components/Card'

import { motion } from 'framer-motion'

import Image from 'next/image';

import { competitions, type Competition, type Round } from '../competitions'
import CompetitionContent from '../competition-content'

const Competition = () => {
  const competition = competitions.find((c) => c.id === 'math-expo')

  if (!competition) {
    return null
  }

  return (
    <div className='min-h-screen pt-32'>
        <Card title="">
            <CompetitionContent {...competition} />
        </Card>
    </div>
  )
}

export default Competition