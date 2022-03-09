import React, { useState, useEffect, useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import gsap, { Power2 } from 'gsap'

const Header: React.FC = () => {
  const [isDropMenu, setIsDropMenu] = useState<boolean>(false)

  let tl = gsap.timeline({ paused: true })

  const handleOpenMenu = () => {
    tl.play()
  }

  const handleCloseMenu = () => {
    tl.reverse()
  }

  useEffect(() => {
    // This allow react commponent to complete render
    // the components before gsap access/find the class name
    tl.to(`.h-menu-drop`, {
      opacity: 1,
      duration: 1,
      top: 0,
      ease: Power2.easeInOut,
    })
    tl.to(
      `.menu-link-item`,
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.2,
      },
      '>-0.2'
    )
    tl.to(
      `.menu-info-item`,
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.2,
      },
      '>-0.2'
    )
  }, [])

  return (
    <HeaderContainer>
      <div className="h-logo hover-eff">Uniqo</div>
      <div className="h-menu-btn hover-eff" onClick={() => handleOpenMenu()}>
        Menu
      </div>
      <div className={`h-menu-drop`}>
        <div className="menu-container">
          <div className="menu-exit-btn" onClick={() => handleCloseMenu()}>
            x
          </div>
          <div className="menu-text-bg">Menu</div>
          <div className="menu-links-box">
            <div className="menu-link-item">
              <h2 className="hover-eff">Home</h2>
              <span className="hover-eff">01</span>
            </div>
            <div className="menu-link-item">
              <h2 className="hover-eff">Blog</h2>
              <span className="hover-eff">02</span>
            </div>
            <div className="menu-link-item">
              <h2 className="hover-eff">About</h2>
              <span className="hover-eff">03</span>
            </div>
          </div>
          <div className="menu-info-box">
            <div className="menu-info-item">
              <h2 className="hover-eff">Where am I?</h2>
              <span className="hover-eff">void is where I am</span>
            </div>
            <div className="menu-info-item">
              <h2 className="hover-eff">Contact</h2>
              <span className="hover-eff">john@email.com</span>
            </div>
            <div className="menu-info-item">
              <h2 className="hover-eff">Follow me</h2>
              <span className="hover-eff">Twitter @johndoe</span>
            </div>
          </div>
        </div>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  ${tw`
    flex
    items-center
    justify-between
    mx-auto
    py-4
    px-4
    lg:px-0
    w-full
    max-w-6xl
    overflow-y-hidden
  `}

  .hover-eff {
    ${tw`
        transition-all
        duration-200
        ease-in-out
    `}

    &:hover {
      ${tw`
        text-gray-100
      `}
    }
  }

  .h-logo {
    ${tw`
        text-xl
        md:text-2xl
        font-semibold
        text-gray-200/75
        cursor-pointer
    `}
  }

  .h-menu-btn {
    ${tw`
        font-semibold
        text-gray-200/75
        cursor-pointer
    `}
  }

  .h-menu-drop {
    ${tw`
        absolute
        top-[-100%]
        right-0
        w-screen
        h-screen
        bg-gray-800
    `}
    opacity: 0;

    .menu-container {
      ${tw`
        relative
        flex
        items-center
        justify-center
        mx-auto
        px-4
        lg:px-0
        h-full
        w-full
        max-w-6xl
      `}

      .menu-exit-btn {
        ${tw`
            absolute
            top-6
            right-6
            flex
            items-center
            justify-center
            w-12
            h-12
            text-lg
            text-gray-200
            rounded-full
            cursor-pointer

            transition
            duration-200
            ease-in-out
        `}

        &:hover {
          ${tw`
            bg-gray-200/20
          `}
        }
      }

      .menu-text-bg {
        ${tw`
            absolute
            top-1/2
            left-4
            text-[8rem]
            md:text-[12rem]
            font-semibold
            text-gray-700/80
            z-0
        `}
        transform: translateY(-50%);
      }

      .menu-links-box {
        ${tw`
            flex-grow
            z-10
        `}

        .menu-link-item {
          ${tw`
            flex
            items-end
            justify-start
            py-2
            opacity-0
            cursor-pointer
          `}
          transform: translateY(-25px);

          h2 {
            ${tw`
                text-2xl
                md:text-3xl
                text-gray-200/75
            `}
          }

          span {
            ${tw`
                ml-2
                text-sm
                font-semibold
                text-gray-300/75
            `}
          }

          &:hover {
            h2 {
              ${tw`
                text-gray-100
              `}
            }

            span {
              ${tw`
                text-gray-200
              `}
            }
          }
        }
      }

      .menu-info-box {
        ${tw`
            hidden
            md:inline-block
            w-full
            max-w-xs
            z-10
        `}

        .menu-info-item {
          ${tw`
            flex
            flex-col
            mb-3
            opacity-0
          `}
          transform: translateY(-25px);

          h2 {
            ${tw`
                text-xl
                md:text-2xl
                font-semibold
                text-gray-400/75
            `}
          }

          span {
            ${tw`
                font-semibold
                text-gray-300/75
            `}
          }
        }
      }
    }
  }
`

export default Header
