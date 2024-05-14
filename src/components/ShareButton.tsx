import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { FacebookShareButton, FacebookIcon } from 'next-share'
import { TwitterShareButton, TwitterIcon } from 'next-share'
import { EmailShareButton, EmailIcon } from 'next-share'
import { ShareIcon } from '@heroicons/react/24/solid'

interface ShareButtonProps {
  videoId: number
}

const ShareButton: React.FC<ShareButtonProps> = ({ videoId }) => {
  const shareUrl = '/video'
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        onClick={openModal}
        type="button"
        className="inline-flex items-center justify-center gap-x-2 rounded-md bg-white px-6 py-2.5 text-[17px] font-medium text-[#525252] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <ShareIcon
          className="-ml-0.5 h-5 w-5 text-[#F2970F]"
          aria-hidden="true"
        />
        Share
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Share on Social Media
                  </Dialog.Title>
                  <div className="mt-2 flex gap-2">
                    <FacebookShareButton
                      url={`https://imara.tv/videos/${videoId}`}
                      quote={'ImaraTV videos are fun.'}
                      hashtag={'#imaratv'}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                    <TwitterShareButton
                      url={`https://imara.tv/videos/${videoId}`}
                      title={'ImaraTV videos are fun.'}
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <EmailShareButton
                      url={`https://imara.tv/videos/${videoId}`}
                      subject={'ImaraTV videos are fun.'}
                      body="body"
                    >
                      <EmailIcon size={32} round />
                    </EmailShareButton>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
export default ShareButton
