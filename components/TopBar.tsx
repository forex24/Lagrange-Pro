/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useState,useEffect } from 'react'
import Link from 'next/link'
// @ts-ignore
import { ConnectWalletButton } from 'components'
import { useRouter } from 'next/router'


const TopBar = () => {
  const [a, setA] = useState(false)
  const router = useRouter()
  const [matches, setMatches] = useState(
    window.matchMedia('(max-width: 768px)').matches
  )


  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches))
  }, [])

  

  const burger = (e) => {
    setA((prevState) => !prevState)
    console.log(
      e.target.parentNode.parentNode.previousElementSibling.children[1]
    )

    if (a === true) {
      e.target.classList.remove('deactivemenu')
      e.target.parentNode.parentNode.previousElementSibling.children[1].style.display =
        'hidden'
    } else {
      e.target.classList.add('deactivemenu')
      e.target.parentNode.parentNode.previousElementSibling.children[1].style.visibility =
        'visible'
    }
  }

  const times = (e) => {
    setA((prevState) => !prevState)

    if (a === true) {
      e.target.classList.remove('deactivemenu')
      e.target.parentNode.parentNode.style.visibility = 'hidden'
    } else {
      e.target.classList.add('deactivemenu')
      e.target.parentNode.parentNode.style.visibility = 'visible'
    }
  }




  return (
    <>
    <div className="topbar">
      <nav>
        <div className="imgandul">
          <Link href="/">
            <a>
              <img src="/Lagrange-logo-light.png" alt="next" />
            </a>
          </Link>
          <ul>
            <li>
              <img
                src="/assets/icons/cancel.png"
                className="fa-times"
                alt=""
                onClick={times}
              />
            </li>
            <li className={router.asPath == '/trade' ? 'active' : ''}>
              <Link href="/trade">
                <a>Trade</a>
              </Link>
            </li>
            <li className={router.asPath == '/multipanel' ? 'active' : ''}>
              <Link href="/multipanel">
                <a>Multipanel</a>
              </Link>
            </li>
            <li className={router.asPath == '/dashboard' ? 'active' : ''}>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li className={router.asPath == '/dashboard' ? 'active' : ''}>
              <Link href="/bots">
                <a>Bots</a>
              </Link>
            </li>
            <li>{matches && <ConnectWalletButton />}</li>
          </ul>
        </div>

        <div className="imgandul">
          {!matches && <ConnectWalletButton />}
          <div className="burger" onClick={burger}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </div>
  </>
  )
}

export default TopBar