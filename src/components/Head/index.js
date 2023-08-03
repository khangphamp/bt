import React from "react";
import Logo from "../../assets/images/logo.png"

export default function Head() {
  return (
      <div className="wrap-head">
      <div className="pseudo"></div>
      <div className="container">
      <div className="flex items-start border-none max-w-[2560px] min-h-[72px] relative w-[100%]">
        <div className="flex items-start justify-between">
          <div className="inline-flex items-center py-[6px] relative">
            <img className="w-[250px]" src={Logo} alt=""/>

            <div className="flex items-start relative w-[167.48px]">
              <div className="inline-flex items-start px-[24px] relative">
                <div className="bg-[#ffffff33] h-[32px] relative w-[1px]" />
              </div>

              <div className="inline-flex items-center gap-[31.08px] mr-[-0.6px] px-[3px] py-[4px] relative">
                <div className="inline-flex items-start px-[0px] py-[1px] relative">
                  <div className="text-[16px] font-[600] text-white font-['Inter'] leading-[24px] mt-[-1px] relative whitespace-nowrap width-[fit-content]">
                    Drops
                  </div>
                </div>

                <div className="inline-flex items-start px-[0px] py-[1px] relative">
                  <div className="text-[16px] font-[600] text-white font-['Inter'] leading-[24px] mt-[-1px] relative whitespace-nowrap width-[fit-content]">
                    Stats
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-1 flex-grow justify-center px-[12px] py-[12px] relative">
            <div className="bg-[#ffffff1f] h-[48px] relative rounded-[12px] w-[723.11px]">
              <div className="absolute font-[400] h-[24px] left-[9px] text-[16px] text-white top-[11px] font-['Inter'] leading-[24px] opacity-[0.8] whitespace-nowrap width-[24px]">
                search
              </div>

              <div className="absolute flex items-start left-[41px] px-[2px] py-[4.5px] top-[10px] w-[647px]">
                <div className="flex items-start opacity-[0.8] px-[339.11px] py-[0.5px] relative w-[639.11px]">
                  <p className="font-[400] mt-[-1px] relative text-[16px] text-white font-['Inter'] leading-[normal] whitespace-nowrap width-[fit-content]">
                    Search items, collections, and accounts
                  </p>
                </div>
              </div>

              <div className="absolute bg-[#ffffff29] h-[26px] left-[688px] rounded-[8px] top-[11px] w-[26px]">
                <div className="absolute font-[400] h-[14px] left-[11px] text-[12px] text-white top-[4px] font-['Inter'] leading-[26px] whitespace-nowrap width-[4px]">
                  /
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex relative">
            <div className="flex items-center flex-col justify-center px-[12px] py-[12px] relative w-[243.41px]">
              <div className="flex relative w-[231.41px]">
                <div className="bg-[#ffffff1f] h-[48px] relative rounded-[12px_0px_0px_12px] w-[177.41px]">
                  <div className="absolute flex items-start justify-center left-[13px] top-[1px]">
                    <div className="font-[400] mt-[-1px] relative text-[16px] text-white text-center font-['Inter'] leading-[24px] w-[24.2px]">
                      wallet
                    </div>
                  </div>

                  <div className="absolute flex items-start justify-center left-[49px] top-[12px]">
                    <div className="font-[600] mt-[-1px] relative text-[16px] text-white text-center whitespace-nowrap font-['Inter'] leading-[24px] width-[fit-content]">
                      Connect wallet
                    </div>
                  </div>
                </div>

                <div className="bg-[#ffffff1f] h-[48px] relative rounded-[0px_12px_12px_0px] w-[54px]">
                  <div className="absolute font-[400] h-[28px] left-[13px] text-[19px] text-white top-[9px] font-['Inter'] leading-[28px] whitespace-nowrap w-[28px]">
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center flex-col py-[12px] relative">
              <div className="bg-[#ffffff1f] h-[48px] relative rounded-[12px] w-[48px]">
                <div className="absolute font-[400] h-[24px] left-[12px] text-[16px] text-white text-center top-[11px] font-['Inter'] leading-[24px] whitespace-nowrap w-[24px]">
                  cart  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center relative w-full  min-h-[40px]">
      <div className="inline-flex flex-shrink-0 gap-[8px] relative items-start">
        <div className="inline-flex flex-shrink-0 bg-[#ffffff1f] rounded-full relative py-[7px] px-[16px]">
          <div className="text-white font-semibold text-[16px] leading-[24px] relative whitespace-nowrap w-[fit-content] -mt-[1px]">All</div>
        </div>
        <div className="inline-flex flex-shrink-0 rounded-full relative py-[7px] px-[16px]">
          <div className="text-white font-semibold text-[16px] leading-[24px] relative whitespace-nowrap w-[fit-content] -mt-[1px]">Art</div>
        </div>
        <div className="inline-flex flex-shrink-0 rounded-full relative py-[7px] px-[16px]">
          <div className="text-white font-semibold text-[16px] leading-[24px] relative whitespace-nowrap w-[fit-content] -mt-[1px]">Gaming</div>
        </div>
        <div className="inline-flex flex-shrink-0 rounded-full relative py-[7px] px-[16px]">
          <div className="text-white font-semibold text-[16px] leading-[24px] relative whitespace-nowrap w-[fit-content] -mt-[1px]">Memberships</div>
        </div>
        <div className="inline-flex flex-shrink-0 rounded-full relative py-[7px] px-[16px]">
          <div className="text-white font-semibold text-[16px] leading-[24px] relative whitespace-nowrap w-[fit-content] -mt-[1px]">PFPs</div>
        </div>
        <div className="inline-flex flex-shrink-0 rounded-full relative py-[7px] px-[16px]">
          <div className="text-white font-semibold text-[16px] leading-[24px] relative whitespace-nowrap w-[fit-content] -mt-[1px]">Photography</div>
        </div>
        <div className="inline-flex flex-shrink-0 rounded-full relative py-[7px] px-[16px]">
          <div className="text-white font-semibold text-[16px] leading-[24px] relative whitespace-nowrap w-[fit-content] -mt-[1px]">Music</div>
        </div>
      </div>
     </div>
     {/*  */}
     <div className="flex flex-col min-h-[454.08px] min-w-[1376px] relative">
      
      <div className="absolute top-0 left-0 w-full h-[454px] bg-cover bg-center" style={{backgroundImage: `url(https://generation-sessions.s3.amazonaws.com/d295524ff2f920e467cda4248d699773/img/27805749-hero-desktop-hero-media-38d45eaf-5768-4977-ab88-211735c-1.png)`}}></div>

      <div className="absolute top-0 left-0 w-full h-[454px] bg-black bg-opacity-20"></div>

      <div className="absolute top-0 left-0 w-full h-[454px] bg-gradient-to-b from-transparent to-black bg-opacity-40"></div>

      <div className="flex flex-col flex-1 justify-end p-10 relative">

        <div className="bg-black border border-white rounded-lg w-16 h-16 overflow-hidden relative">
          <div className="bg-cover bg-center w-14 h-14 relative top-1 left-1" style={{backgroundImage: `url(https://generation-sessions.s3.amazonaws.com/c9451da56b46b1bd14b525c0c3f1db69/img/27805749-hero-partner-logo-url-36bbb4ad-9c40-45af-af0f-23a428def@2x.png)`}}></div>
        </div>

        <div className="flex justify-between items-end w-[1296px] p-6">
          
          <div className="flex-1 h-[174.5px] relative">
            
            <div className="absolute top-0 left-0 h-9 w-[726px]">
              <h1 className="text-white font-semibold text-[32px] leading-[36px]">Haas x RENGA Racing</h1>
              <img src="https://generation-sessions.s3.amazonaws.com/c9451da56b46b1bd14b525c0c3f1db69/img/svg---verified-icon.svg" alt="" className="absolute top-[7px] left-[354px] w-6 h-6"/>
            </div>

            <div className="absolute top-[40px] left-0 w-36 h-6 flex">
              <div className="text-white font-semibold text-base">By</div>
              
              <div className="flex items-start ml-[-0.29px] pt-px">
                <div className="text-white font-semibold text-base">Haas-RENGA</div>
              </div>
              
              <img src="image.svg" alt="" className="absolute top-[5px] left-[130px] w-3.5 h-3.5"/>
            </div>

            <div className="absolute top-[68px] left-0 w-44 h-5.5 flex">
              <div className="text-white font-semibold text-sm">1,000 items</div>
              <div className="text-white font-semibold text-sm">·</div>
              <div className="text-white font-semibold text-sm">0.088</div>
              <div className="text-white font-semibold text-sm">ETH</div>
            </div>

            <div className="absolute top-[114px] left-0 flex gap-2">
            <div className="w-16 h-16 flex items-center justify-center flex-col rounded-lg bg-white bg-opacity-25 relative p-1">
              <div className="flex flex-auto relative">
                <div className="text-white font-semibold text-lg whitespace-nowrap w-auto mt-[-1px]">
                  0
                </div>
              </div>
              <div className="flex flex-auto relative ">
                <div className="text-white font-semibold text-base leading-[20px] whitespace-nowrap">
                  days
                </div>
              </div>
            </div>
            <div className="w-16 h-16 flex items-center justify-center flex-col rounded-lg bg-white bg-opacity-25 relative p-1">
              <div className="flex flex-auto relative">
                <div className="text-white font-semibold text-lg whitespace-nowrap w-auto mt-[-1px]">
                  4
                </div>
              </div>
              <div className="flex flex-auto relative ">
                <div className="text-white font-semibold text-base leading-[20px] whitespace-nowrap">
                  hrs
                </div>
              </div>
            </div>
            <div className="w-16 h-16 flex items-center justify-center flex-col rounded-lg bg-white bg-opacity-25 relative p-1">
              <div className="flex flex-auto relative">
                <div className="text-white font-semibold text-lg whitespace-nowrap w-auto mt-[-1px]">
                  12
                </div>
              </div>
              <div className="flex flex-auto relative ">
                <div className="text-white font-semibold text-base leading-[20px] whitespace-nowrap">
                  mins
                </div>
              </div>
            </div>
            <div className="w-16 h-16 flex items-center justify-center flex-col rounded-lg bg-white bg-opacity-25 relative p-1">
              <div className="flex flex-auto relative">
                <div className="text-white font-semibold text-lg whitespace-nowrap w-auto mt-[-1px]">
                  47
                </div>
              </div>
              <div className="flex flex-auto relative ">
                <div className="text-white font-semibold text-base leading-[20px] whitespace-nowrap">
                  secs
                </div>
              </div>
            </div>  
            </div>

          </div>
          
          <div className="flex gap-2.5">
            
            <div className="w-16 h-16 rounded-lg bg-white bg-opacity-25 relative">
              <div className="text-white text-base absolute top-6.5 left-4.5"></div>
            </div>
            
            <div className="flex items-center justify-center rounded-lg bg-white bg-opacity-25 px-6 py-3.5">
              <div className="text-white font-semibold text-base">View drop</div> 
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>



      </div>
      
      </div>
      
  );
};