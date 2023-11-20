/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'



interface IRocketDetails {
  open: boolean,
  setOpen: any,
  details: any
}

export default function CategoryModal({ open, setOpen, details }: IRocketDetails) {

  const cancelButtonRef = useRef(null)

  console.log(details, "THE DETAILS IN MODAL")

  

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setOpen(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div
                    onClick={() => setOpen(!open)}
                    className="flex justify-end items-end">
                    <div className=" flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>



                  <div className="mt-3 text-start sm:ml-4 sm:mt-0 sm:text-left">
                    <p className='font-bold text-center'>PICTURES</p>

                    <div className='grid grid-cols-2 gap-3 my-5'>
                      {details?.flickr_images?.map((image: string) => (
                        <img src={image} alt="" />
                      ))}
                    </div>
                    <div className="mt-2">
                      <p className=' border-t-2 border-t-gray-300 my-2'></p>
                      <p className='font-bold text-center'>BASIC DETAILS</p>
                      <p className='text-sm font-bold py-2'>Name:  <span className='font-normal text-xs'> {details?.name}</span></p>
                      <p className='text-sm font-bold py-2'>Company:  <span className='font-normal text-xs'> {details?.company}</span></p>
                      <p className='text-sm font-bold py-2'>Country:  <span className='font-normal text-xs'> {details?.country}</span></p>
                      <p className='text-sm font-bold py-2'>Height:  <span className='font-normal text-xs'>{details?.height?.meters} M, {details?.height?.feet} FT </span></p>
                      <p className='text-sm font-bold py-2'>Diameter:  <span className='font-normal text-xs'>{details?.diameter?.meters} M, {details?.diameter?.feet} FT </span></p>
                      <p className='text-sm font-bold py-2'>Mass:  <span className='font-normal text-xs'>{details?.mass?.kg} KG, {details?.mass?.lb} LB </span></p>
                      <p className='text-sm font-bold py-2'>Cost Per Launch:  <span className='font-normal text-xs'> $ {details?.cost_per_launch}</span></p>
                      <p className='text-sm font-bold py-2'>Description:  <span className='font-normal text-xs'> {details?.description}</span></p>
                    </div>

                    <div className='flex justify-end items-end'>
                      <a 
                      href={details?.wikipedia}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-black text-white font-bold px-5 py-2 rounded-lg my-5  '>
                        Learn More
                      </a>
                    </div>
                  </div>



                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
