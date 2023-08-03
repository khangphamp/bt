import React from 'react'

function Trending() {
  return (
    <div className="flex flex-col min-h-[601px] min-w-[1440px] p-8 relative w-full max-w-[2560px]">
      
    <div className="h-[601px] relative w-[1376px]">
    
      <div className="flex justify-between absolute top-0 left-0 w-full">
      
        <div className="inline-flex bg-white bg-opacity-10 rounded-lg overflow-hidden min-h-[48px] p-1 relative">

          <div className="absolute top-1 left-2 bg-white rounded-lg w-[116px] h-[44px]"></div>

          <div className="inline-flex flex-col items-center justify-center min-w-[116px] rounded-lg p-4 relative">
            <div className="text-base font-semibold text-gray-900">Trending</div>
          </div>

          <div className="inline-flex flex-col items-center justify-center min-w-[116px] rounded-lg p-7 relative">
            <div className="text-base font-semibold text-gray-700">Top</div> 
          </div>

        </div>
      
        <div className="inline-flex gap-4 relative">

          <div className="absolute top-1 left-[91px] bg-white rounded-lg w-[55px] h-[44px]"></div>

          <div className="inline-flex flex-col items-center justify-center min-w-[44px] rounded-lg p-3 relative">
            <div className="text-base font-semibold">1h</div>
          </div>

          <div className="inline-flex flex-col items-center justify-center min-w-[44px] rounded-lg p-3 relative">
            <div className="text-base font-semibold">6h</div>
          </div>
          
          {/* etc */}

        </div>
      
        <div className="inline-flex bg-white bg-opacity-10 rounded-lg h-[48px] relative w-[134.84px]">
          
          <div className="absolute top-[-84px] left-[16px] w-[107px] h-[216px]">
            
            <div className="inline-flex flex-col justify-center p-1 absolute top-[92px] left-0">
              <div className="text-base font-semibold text-gray-900">All chains</div>
            </div>
            
            <div className="inline-flex flex-col justify-center pl-2 absolute top-0 left-[75px]">
              <div className="text-base font-normal text-gray-900">keyboard_arrow_down</div>
            </div>

          </div>
          
        </div>
      
        <div className="inline-flex relative">
          <div className="inline-flex flex items-center justify-center bg-white bg-opacity-10 rounded-lg p-4 relative">
            <div className="text-base font-semibold text-gray-900">View all</div>
          </div>
        </div>
      
      </div>

      <div className="flex flex-col gap-2 absolute top-[80px] left-0 w-[650px]">
      
        <div className="bg-white shadow-[-8px_0px_0px_#ffffff] shadow-[8px_0px_0px_#ffffff] h-[33px] relative w-[649.8px] border-b border-gray-200 border-opacity-10"></div>
      
        <div className="relative h-auto max-h-[480px] max-w-[649.8px] w-full">
          
          <div className="flex justify-between rounded-lg p-3 absolute top-[96px] left-0 w-[650px]">
            
            {/* table row */}
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  </div>

  )
}

export default Trending