import { NextSeo } from 'next-seo'
import React from 'react'

const Contact = () => {
    return (
        <div>
            <NextSeo title='Contact' />
            <h1>Contact</h1>

            <form>
                <label>
                    Nom:
                </label>
                <input type='submit' value='Send' />
            </form>
        </div>
    )
}

export default Contact
