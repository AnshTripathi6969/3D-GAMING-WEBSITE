import 'boxicons/css/boxicons.min.css'

const socials = [
  {
    href: 'https://www.instagram.com/anshtripathi8989/',
    icon: 'bxl-instagram',
    label: 'Instagram',
  },
  {
    href: 'https://github.com/AnshTripathi6969',
    icon: 'bxl-github',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/anshtripathi20/',
    icon: 'bxl-linkedin',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:anshtripathi2022@vitbhopal.ac.in',
    icon: 'bxl-gmail',
    label: 'Gmail',
  },
]

const Footer = () => {
  return (
    <footer className="relative isolate flex flex-col sm:flex-row items-center justify-between gap-y-6 sm:gap-y-0 lg:mt-[15%] mt-[25%] py-8 lg:px-32 md:px-16 px-8 border-t border-purple-400/40 bg-gradient-to-r from-black via-[#0f0f33] to-black animate-gradient-x overflow-hidden">
      
      {/* floating glow */}
      <div className="absolute -z-10 top-1/2 left-0 h-80 w-80 bg-purple-600/20 blur-3xl rounded-full animate-pulse-slow" />

      {/* logos */}
      <img
        className="h-10 drop-shadow-[0_0_12px_rgba(167,139,250,0.6)]"
        src="/images/illu-text.png"
        alt="Illuvium Text"
      />
      <img
        className="h-16 drop-shadow-[0_0_20px_rgba(167,139,250,0.4)]"
        src="/images/illu-logo.png"
        alt="Illuvium Logo"
      />

      {/* social icons */}
      <div className="flex gap-4">
        {socials.map(({ href, icon, label }) => (
          <a
            key={icon}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group relative text-2xl md:text-3xl text-white/80 transition-transform duration-300 hover:scale-110"
          >
            {/* animated ring on hover */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-600 opacity-0 blur-sm group-hover:opacity-60 transition-opacity duration-300 animate-gradient-x" />
            <i className={`bx ${icon} relative`} />
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
