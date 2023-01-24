import React from 'react'
import navStyles from '@/components/common/nav/Nav.module.css'
import Image from 'next/image'

const Nav = () => {
  return (
    <div className={navStyles.main}>
         <Image
            className={navStyles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
      <span> icon </span>
    </div>
  )
}

export default Nav