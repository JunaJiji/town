import logo from '../assets/logoitis.png';

export default function AppHeader() {
  return (
    <header className="bg-white shadow-sm">
     <div className="w-full px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center lg:w-48">
            <img src={logo} alt="ITISMYTOWN" className="h-10" />
          </div>
          <div className="flex items-center justify-center gap-5 flex-1 mx-8">
          <div className="
  relative 
  flex-none 
  w-full 
  max-w-[280px] 
  sm:max-w-[300px] 
  md:max-w-[320px]
  h-[44px] 
  sm:h-[48px]
  bg-white 
  border 
  border-[#004481] 
  rounded-lg 
  p-3
">
  <input 
    type="text" 
    placeholder="Search Location" 
    className="w-full  h-full px-4 pl-9 sm:pl-10 border-none rounded-lg focus:outline-none focus:ring-0 bg-transparent placeholder-[#979797] font-['Inter_Tight'] font-normal text-[15px] sm:text-[16px] leading-[100%] tracking-normal"
  />
  <svg 
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#979797] absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2"
      
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeWidth="1.5" 
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
    />
    <path 
      strokeWidth="1.5" 
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
    />
  </svg>
</div>

<div className=" relative flex-none w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] h-[44px] sm:h-[48px] bg-white border border-[#004481] 
  rounded-lg 
  p-3">
  <input type="text" placeholder="Search products or stores" 
    className="w-full h-full px-4 pl-9 sm:pl-10 border-none rounded-lg focus:outline-none focus:ring-0 bg-transparent placeholder-[#979797] font-['Inter_Tight'] font-normal text-[15px] sm:text-[16px] leading-[100%] tracking-normal"
  />
 <svg 
  className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6  text-[#979797] absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2" 
  viewBox="0 0 24 24" 
  fill="none" 
  xmlns="http://www.w3.org/2000/svg"
>
  <path 
    d="M22 22H2" 
    stroke="#979797" 
    strokeWidth="1.5" 
    strokeLinecap="round"
  />
  <path 
    d="M20 22V11" 
    stroke="#979797" 
    strokeWidth="1.5" 
    strokeLinecap="round"
  />
  <path 
    d="M4 22V11" 
    stroke="#979797" 
    strokeWidth="1.5" 
    strokeLinecap="round"
  />
  <path 
    d="M16.5278 2H7.47214C6.26932 2 5.66791 2 5.18461 2.2987C4.7013 2.5974 4.43234 3.13531 3.89443 4.21114L2.49081 7.75929C2.16652 8.57905 1.88279 9.54525 2.42867 10.2375C2.79489 10.7019 3.36257 11 3.99991 11C5.10448 11 5.99991 10.1046 5.99991 9C5.99991 10.1046 6.89534 11 7.99991 11C9.10448 11 9.99991 10.1046 9.99991 9C9.99991 10.1046 10.8953 11 11.9999 11C13.1045 11 13.9999 10.1046 13.9999 9C13.9999 10.1046 14.8953 11 15.9999 11C17.1045 11 17.9999 10.1046 17.9999 9C17.9999 10.1046 18.8953 11 19.9999 11C20.6373 11 21.205 10.7019 21.5712 10.2375C22.1171 9.54525 21.8334 8.57905 21.5091 7.75929L20.1055 4.21114C19.5676 3.13531 19.2986 2.5974 18.8153 2.2987C18.332 2 17.7306 2 16.5278 2Z" 
    stroke="#979797" 
    strokeWidth="1.5" 
    strokeLinejoin="round"
  />
  <path 
    d="M9.5 21.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5V21.5" 
    stroke="#979797" 
    strokeWidth="1.5" 
    strokeLinecap="round"
  />
</svg>
</div>


<button className="
  w-[117px]
  h-[48px]
  bg-[#285A8C] 
  text-white 
  rounded-lg 
  font-['Inter_Tight']
  font-normal
  text-[16px]
  leading-[150%]
  tracking-normal
  hover:bg-[#234E79] 
  transition-colors
  duration-200
  px-[34px]
  py-3
">
  Search
</button>
          </div>

          <div className="lg:w-48 flex justify-end">
          <button className="
  // Exact dimensions from Figma
  w-[42px]
  h-[24px]
  
  // Typography from Figma
  font-['Inter_Tight']
  font-normal
  text-[16px]
  leading-[150%]
  tracking-normal
  
  // Colors
  text-[#285A8C] 
  
  // Interactions
  hover:opacity-90 
  hover:text-[#234E79]
  transition-all
  duration-200
  
  // Prevent text wrapping
  whitespace-nowrap
">
  Log In
</button>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-3">
            <img src={logo} alt="ITISMYTOWN" className="h-8 sm:h-10" />
            <button className="text-[#285A8C] text-sm sm:text-base font-medium hover:opacity-90 transition-colors">Log In</button>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <input type="text" placeholder="Search Location" className="w-full h-10 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input type="text" placeholder="Search products or stores" className="w-full h-10 px-4 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <button className="px-5 h-10 bg-[#285A8C] text-white rounded-lg font-medium hover:bg-[#234E79] transition-colors text-sm">Search</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


