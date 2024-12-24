import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-black text-white h-6 py-6 flex justify-center gap-2 items-center'>
    <p className='md:text-lg text-sm text-center'>Created by Muhammad Saad Ahmed</p>
    <Link href='https://github.com/saadahmedacademy'>
    <FaGithub className='text-lg' />
    </Link>
  </div>
  )
}

export default Footer