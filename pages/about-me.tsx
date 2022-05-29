import { NextSeo } from 'next-seo'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const test = [
    { id: '1', label: 'test', descrition: 'test'},
    { id: '2', label: 'test', descrition: 'test'},
    { id: '3', label: 'test', descrition: 'test'}
]

const AboutMe = () => {
    const [selectedId, setSelectedId] = useState(null)
    return (
        <div>
            <NextSeo title='About Me' />
            <h1>About me</h1>
        </div>
    )
}

export default AboutMe
