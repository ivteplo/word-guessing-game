import { Dialog, Transition } from '@headlessui/react'
import {
  Children,
  FC,
  Fragment,
  ReactChildren,
  ReactElement,
} from 'react'
import { Button } from './controls/Button'

interface AlertProps {
  title: string
  isOpen?: boolean
  onClose?: () => void
  onLeaveTransition?: () => void
  children: ReactChildren | ReactElement
  buttons: ReactChildren | ReactElement
  showCloseButton?: boolean
}

export const Alert: FC<AlertProps> = ({
  title,
  isOpen,
  onClose,
  onLeaveTransition,
  buttons,
  children,
  showCloseButton = true,
}) => {
  const closeModal = () => onClose && onClose()

  return (
    <Transition
      appear
      show={isOpen}
      as={Fragment}
      afterLeave={onLeaveTransition}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-secondary bg-opacity-75" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-default shadow-xl rounded-2xl text-default">
              <Dialog.Title
                as="h3"
                className="text-3xl font-bold leading-6"
              >
                {title}
              </Dialog.Title>

              <div className="mt-2 flex flex-col">
                {children}
              </div>

              <div className="mt-8 flex flex-col gap-2 alert-buttons">
                {buttons}
                {showCloseButton && (
                  <Button onClick={closeModal}>
                    Close
                  </Button>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
