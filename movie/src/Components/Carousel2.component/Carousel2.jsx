import React from 'react'
import { banner } from '../../Utils/CarouselBanner'

export default function Carousel2() {
  const gallary = banner
  const currentGallary = gallary[4]
  return (
    <div class="grid w-full box-border box-height  border-sky-500 grid-cols-10 z-0">
      <div
        className="border-red-600 col-span-8 bg-custom relative"
        style={{
          backgroundImage: `url(${currentGallary.hinhAnh})`
        }}
      >
        <div
          style={{
            background:
              'linear-gradient(0deg,#202125,rgba(32,33,37,0.7) 50%,#202125)'
          }}
          className="absolute top-0 left-0 w-full h-full"
        />
        <div className="grid grid-cols-8 absolute top-0 left-0">
          <div className="col-span-6  box-border p-10 grid justify-items-start content-center min-max-box-carousel text-white">
            <h5 className="class-film  sub3">C Class</h5>
            <h2 className="my-5 head-title">{currentGallary.tenPhim}</h2>
            <p className="sub1 mb-5">{currentGallary.moTa.slice(0, 400)}...</p>
            <ul>
              <li>Action</li>
              <li>Honor</li>
            </ul>
            <div className="mt-10  w-full flex justify-start  ">
              <button className="btn-trailer mr-5" type="button">
                Trailer
              </button>
              <button className="btn-detail" type="button">
                Detail
              </button>
            </div>
          </div>
          <div className="col-span-2 box-border p-10 grid justify-items-start content-center ">
            <div
              className="bg-custom rounded-lg  "
              style={{
                backgroundImage: `url(${currentGallary.hinhAnh}`,
                width: '100%',
                height: '40vh'
              }}
            />
          </div>
        </div>
      </div>
      <div className=" col-span-2 main-bg p-2 ">
        <div className="w-full container grid grid-cols-4 h-25 text-white white-glassmorphism mb-2">
          <div className="col-span-1 w-full h-full ">
            <img
              src={currentGallary.hinhAnh}
              className="w-full h-full"
              alt="hinhAnh"
            />
          </div>
          <div className="p-2 col-span-3">
            <h2 className="">{currentGallary.tenPhim}</h2>
            <p className="sub3"> {currentGallary.moTa.slice(0, 100)}...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
