import { useState } from 'react'
import 'boxicons/css/boxicons.min.css'

const Header = () => {
  // 💡 React way → state drives the UI
  const [open, setOpen] = useState(false)

  return (
    <header className="py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b border-[#babaff]/30 backdrop-blur-md bg-gradient-to-r from-black via-[#0f0f33] to-black animate-gradient-x">

      {/* --- logo + desktop CTAs --- */}
      <div className="flex lg:gap-4 gap-2 items-center">
        {/* 👇 Put logo in /public/images/logo.png and reference with leading slash */}
        <img className="md:w-16 w-12" src="/images/logo.png" alt="logo-img" />

        {/* desktop-only buttons */}
        <div className="hidden md:flex gap-5 items-center">
          <button className="h-9 px-6 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600 rounded-lg font-medium text-nowrap shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
            PLAY NOW
          </button>

          <button className="h-9 px-6 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 rounded-lg font-medium text-nowrap shadow-md hover:scale-105 transition-all duration-300 ease-in-out">
            NFT STORE
          </button>
        </div>
      </div>

      {/* --- desktop nav --- */}
      <nav className="hidden md:flex lg:gap-8 gap-4">
        {[
          { icon: 'bx-user-circle', label: 'Avatar' },
          { icon: 'bx-diamond',      label: 'Arena'  },
          { icon: 'bx-chevrons-up',  label: 'Beyond' },
          { icon: 'bx-store',        label: 'Shop'   }
        ].map(({ icon, label }) => (
          <a
            key={label}
            href="#"
            className="relative py-1 text-lg text-white hover:text-purple-300 transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
          >
            <i className={`bx ${icon} mr-1`} /> {label}
          </a>
        ))}
      </nav>

      {/* --- mobile burger --- */}
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl p-2 md:hidden text-white"
        aria-label="Toggle mobile navigation"
      >
        <i className="bx bx-menu" />
      </button>

      {/* --- mobile slide-down menu --- */}
      {open && (
        <div className="fixed top-14 right-0 left-0 bg-black/90 backdrop-blur-xl border-t border-purple-700 p-5 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4 items-center text-white">
            {[
              { icon: 'bx-user-circle', label: 'Avatar' },
              { icon: 'bx-diamond',      label: 'Arena'  },
              { icon: 'bx-chevrons-up',  label: 'Beyond' },
              { icon: 'bx-store',        label: 'Shop'   }
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                className="relative py-1 text-lg hover:text-purple-300 transition-colors duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-400 after:left-0 after:bottom-0 after:transition-all hover:after:w-full"
              >
                <i className={`bx ${icon} mr-1`} /> {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 w-full mt-4">
            <button className="bg-gradient-to-r from-purple-700 to-indigo-600 py-2 rounded shadow hover:scale-105 transition-all duration-300 ease-in-out">
              PLAY NOW
            </button>

            <button className="bg-gradient-to-r from-gray-700 to-gray-900 py-2 rounded shadow hover:scale-105 transition-all duration-300 ease-in-out">
              NFT STORE
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
