/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from 'react'
import { Dialog, Menu, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { MdOutlineDarkMode } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { DarkModeContext } from '../Context/ModeProvider'
import { GiBarbedSun, } from 'react-icons/gi'
import { GrAddCircle } from 'react-icons/gr'
import { AiOutlineUser, AiOutlineHome, AiOutlinePlusCircle, AiFillInfoCircle } from 'react-icons/ai'
import { BiHomeAlt } from 'react-icons/bi'
import copy from "copy-to-clipboard";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const { setDarkMode, darkMode } = useContext(DarkModeContext);
  const [open, setOpen] = useState(false)
  const [solflare, setSolflare] = useState(localStorage.getItem('isConnected') === 'true')
  const [clip, setClip] = useState(window.location.pathname)
  const copyToClipboard = () => {
    copy(clip);
  }
  const connect = () => {
    window?.solflare?.connect()
      .then(() => {
        setSolflare(window?.solflare?.isConnected)
        localStorage.setItem('isConnected',true)
        localStorage.setItem('puKey',window?.solflare?.publicKey?.toString())
      })
  }

  const disconnect = () => {
    window?.solflare?.disconnect()
      .then(() => {
        setSolflare(window?.solflare?.isConnected)
        localStorage.setItem('isConnected',false)
        localStorage.setItem('puKey','')

      })
  }
 

  const navigation = [
    { name: 'My Raffle', href: '/my', icon: <BiHomeAlt /> },
    { name: 'My Profile', href: '/profile', icon: <AiOutlineUser /> },
    { name: 'Create Raffle', href: '/create/raffle', icon: <AiOutlinePlusCircle /> },
    { name: 'Raffles Home', href: '/', icon: <AiOutlineHome /> },
    { name: 'Buyers Guid', href: '#', icon: <AiFillInfoCircle /> },
  ]
  return (
    <div className="fixed z-10 bg-white pb-5 w-full" style={{ background: '#281E35' }} >
      <Popover >
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-between " aria-label="Global">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <div className='lg:flex items-center block' >
                  <Link to="/">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt="Your Company"
                      className="h-20 w-30 "
                      src="https://i.ibb.co/Wt787GZ/logo.png"
                    />
                  </Link>
                  <div>
                    <p style={{ color: '#42296A' }} className="hidden lg:block text-sm">Solana Network: <span className="text-sm" style={{ color: '#8b5cf6' }}> 2837 TPS </span></p>
                    <img
                      alt="Your Company"
                      className="hidden lg:block h-10 w-30 "
                      src="https://i.ibb.co/18Tgkph/adsasdasdasdas.png"
                    />
                  </div>
                </div>

                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon onClick={() => setOpen(true)} className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8 md:pr-4 items-center">
              <p onClick={() => setDarkMode(!darkMode)} style={{ cursor: 'pointer', fontSize: '20px', color: '#8b5cf6', border: '3px solid #8b5cf6', padding: "10px", borderRadius: '50px' }}>
                {
                  darkMode ?
                    <GiBarbedSun />
                    :
                    <MdOutlineDarkMode />
                }

              </p>
              <Link to="/create/raffle" style={{ background: 'linear-gradient(to right, #56ab2f, #a8e063)' }} className="text-white inline-flex items-center py-3 px-6 text-lg font-medium text-center  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <p className='text-lg text-white'>Create Raffle</p>
              </Link>

              {
                !solflare ? (
                  <WalletMultiButton/>
                )
                  :
                  (
                    <>

                      <Menu as="div" className="relative inline-block text-left">
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center bg-[#6366f1] rounded-md  bg- px-8 py-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-[#6366f1] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            <img className='w-[20px]' src='data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmMxMGIiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmYjNmMmUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI2LjQ3ODM1IiB4Mj0iMzQuOTEwNyIgeGxpbms6aHJlZj0iI2EiIHkxPSI3LjkyIiB5Mj0iMzMuNjU5MyIvPjxyYWRpYWxHcmFkaWVudCBpZD0iYyIgY3g9IjAiIGN5PSIwIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQuOTkyMTg4MzIgMTIuMDYzODc5NjMgLTEyLjE4MTEzNjU1IDUuMDQwNzEwNzQgMjIuNTIwMiAyMC42MTgzKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHI9IjEiIHhsaW5rOmhyZWY9IiNhIi8+PHBhdGggZD0ibTI1LjE3MDggNDcuOTEwNGMuNTI1IDAgLjk1MDcuNDIxLjk1MDcuOTQwM3MtLjQyNTcuOTQwMi0uOTUwNy45NDAyLS45NTA3LS40MjA5LS45NTA3LS45NDAyLjQyNTctLjk0MDMuOTUwNy0uOTQwM3ptLTEuMDMyOC00NC45MTU2NWMuNDY0Ni4wMzgzNi44Mzk4LjM5MDQuOTAyNy44NDY4MWwxLjEzMDcgOC4yMTU3NGMuMzc5OCAyLjcxNDMgMy42NTM1IDMuODkwNCA1LjY3NDMgMi4wNDU5bDExLjMyOTEtMTAuMzExNThjLjI3MzMtLjI0ODczLjY5ODktLjIzMTQ5Ljk1MDcuMDM4NTEuMjMwOS4yNDc3Mi4yMzc5LjYyNjk3LjAxNjEuODgyNzdsLTkuODc5MSAxMS4zOTU4Yy0xLjgxODcgMi4wOTQyLS40NzY4IDUuMzY0MyAyLjI5NTYgNS41OTc4bDguNzE2OC44NDAzYy40MzQxLjA0MTguNzUxNy40MjM0LjcwOTMuODUyNC0uMDM0OS4zNTM3LS4zMDc0LjYzOTUtLjY2MjguNjk0OWwtOS4xNTk0IDEuNDMwMmMtMi42NTkzLjM2MjUtMy44NjM2IDMuNTExNy0yLjEzMzkgNS41NTc2bDMuMjIgMy43OTYxYy4yNTk0LjMwNTguMjE4OC43NjE1LS4wOTA4IDEuMDE3OC0uMjYyMi4yMTcyLS42NDE5LjIyNTYtLjkxMzguMDIwM2wtMy45Njk0LTIuOTk3OGMtMi4xNDIxLTEuNjEwOS01LjIyOTctLjI0MTctNS40NTYxIDIuNDI0M2wtLjg3NDcgMTAuMzk3NmMtLjAzNjIuNDI5NS0uNDE3OC43NDg3LS44NTI1LjcxMy0uMzY5LS4wMzAzLS42NjcxLS4zMDk3LS43MTcxLS42NzIxbC0xLjM4NzEtMTAuMDQzN2MtLjM3MTctMi43MTQ0LTMuNjQ1NC0zLjg5MDQtNS42NzQzLTIuMDQ1OWwtMTIuMDUxOTUgMTAuOTc0Yy0uMjQ5NDcuMjI3MS0uNjM4MDkuMjExNC0uODY4LS4wMzUtLjIxMDk0LS4yMjYyLS4yMTczNS0uNTcyNC0uMDE0OTMtLjgwNmwxMC41MTgxOC0xMi4xMzg1YzEuODE4Ny0yLjA5NDIuNDg0OS01LjM2NDQtMi4yODc2LTUuNTk3OGwtOC43MTg3Mi0uODQwNWMtLjQzNDEzLS4wNDE4LS43NTE3Mi0uNDIzNS0uNzA5MzYtLjg1MjQuMDM0OTMtLjM1MzcuMzA3MzktLjYzOTQuNjYyNy0uNjk1bDkuMTUzMzgtMS40Mjk5YzIuNjU5NC0uMzYyNSAzLjg3MTgtMy41MTE3IDIuMTQyMS01LjU1NzZsLTIuMTkyLTIuNTg0MWMtLjMyMTctLjM3OTItLjI3MTMtLjk0NDMuMTEyNi0xLjI2MjEuMzI1My0uMjY5NC43OTYzLS4yNzk3IDEuMTMzNC0uMDI0OWwyLjY5MTggMi4wMzQ3YzIuMTQyMSAxLjYxMDkgNS4yMjk3LjI0MTcgNS40NTYxLTIuNDI0M2wuNzI0MS04LjU1OTk4Yy4wNDU3LS41NDA4LjUyNjUtLjk0MjU3IDEuMDczOS0uODk3Mzd6bS0yMy4xODczMyAyMC40Mzk2NWMuNTI1MDQgMCAuOTUwNjcuNDIxLjk1MDY3Ljk0MDNzLS40MjU2My45NDAzLS45NTA2Ny45NDAzYy0uNTI1MDQxIDAtLjk1MDY3LS40MjEtLjk1MDY3LS45NDAzcy40MjU2MjktLjk0MDMuOTUwNjctLjk0MDN6bTQ3LjY3OTczLS45NTQ3Yy41MjUgMCAuOTUwNy40MjEuOTUwNy45NDAzcy0uNDI1Ny45NDAyLS45NTA3Ljk0MDItLjk1MDctLjQyMDktLjk1MDctLjk0MDIuNDI1Ny0uOTQwMy45NTA3LS45NDAzem0tMjQuNjI5Ni0yMi40Nzk3Yy41MjUgMCAuOTUwNi40MjA5NzMuOTUwNi45NDAyNyAwIC41MTkzLS40MjU2Ljk0MDI3LS45NTA2Ljk0MDI3LS41MjUxIDAtLjk1MDctLjQyMDk3LS45NTA3LS45NDAyNyAwLS41MTkyOTcuNDI1Ni0uOTQwMjcuOTUwNy0uOTQwMjd6IiBmaWxsPSJ1cmwoI2IpIi8+PHBhdGggZD0ibTI0LjU3MSAzMi43NzkyYzQuOTU5NiAwIDguOTgwMi0zLjk3NjUgOC45ODAyLTguODgxOSAwLTQuOTA1My00LjAyMDYtOC44ODE5LTguOTgwMi04Ljg4MTlzLTguOTgwMiAzLjk3NjYtOC45ODAyIDguODgxOWMwIDQuOTA1NCA0LjAyMDYgOC44ODE5IDguOTgwMiA4Ljg4MTl6IiBmaWxsPSJ1cmwoI2MpIi8+PC9zdmc+' />
                            {localStorage.getItem('puKey').slice(1,6)}
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#2c2d30] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    style={{ cursor: 'pointer' }}
                                    onClick={copyToClipboard}
                                    className={classNames(
                                      active ? ' text-white' : 'text-white',
                                      'block rounded-lg mx-2 px-1 py-2 text-lg text-center bg-[#404144]'
                                    )}
                                  >
                                    Copy Address
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    style={{ cursor: 'pointer' }}

                                    className={classNames(
                                      active ? ' text-white' : 'text-white',
                                      'block rounded-lg mx-2 px-1 py-2 text-lg text-center bg-[#404144]'
                                    )}
                                  >
                                    Connect a different wallet
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    onClick={() => disconnect()}
                                    style={{ cursor: 'pointer' }}
                                    className={classNames(
                                      active ? ' text-white' : 'text-white',
                                      'block rounded-lg mx-2 px-1 py-2 text-lg text-center bg-[#404144]'
                                    )}
                                  >
                                    Disconnect
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <Link to='/my'>
                        <p style={{ cursor: 'pointer', background: '#6366f1' }} className="inline-flex items-center p-4 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          <AiOutlineUser />
                        </p>
                      </Link>
                    </>
                  )
              }




            </div>
          </nav>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-[rgba(54,37,68)] shadow-xl">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              <Link to="/">
                                <span className="sr-only">Your Company</span>
                                <img
                                  alt="Your Company"
                                  className="h-20 w-44 "
                                  src="https://i.ibb.co/Wt787GZ/logo.png"
                                />
                              </Link>
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="-m-2 p-2  text-gray-400 hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className=" h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <p href="#" style={{ background: '#6366f1' }} className=" w-full p-4  text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Select Wallet
                              </p>
                              {navigation.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.href}
                                  className="flex items-center mx-3 my-2 rounded-xl px-3 py-7 text-xl font-medium text-white bg-[rgba(0,0,0,.1)] hover:bg-[#4C1D95] hover:text-white"
                                >
                                  {item.icon}
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </Popover>
    </div>

  )
}
