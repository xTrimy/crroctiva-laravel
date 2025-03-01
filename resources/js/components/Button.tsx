
function Button({className, children, onClick}: {className?: string, children: string, onClick?: () => void}) {
  return (
      <button 
        onClick={onClick}
      className={className + ` bg-[#913E49] text-white py-4 px-6 cursor-pointer rounded-md
      hover:bg-white group hover:text-red-900 group-hover:text-red-900 group-hover:bg-white border-2 border-red-900 transition-all

      `}>
        <p className='group-hover:scale-105 transition-transform duration-700 group-hover:-translate-y-0.5'>
           {children}
        </p>
      </button>
  )
}

export default Button