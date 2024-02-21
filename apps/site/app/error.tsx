// Error components must be Client Components
'use client';
import { useGlobalContext } from '@/context/store';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { dictionaries } = useGlobalContext();
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-full min-h-[calc(100vh-206px)] flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full h-full py-10">
        <div className="w-full max-w-xl gap-8 px-10 py-10 rounded-xl bg-base-100/30 shadow">
          <div className={`pt-5 text-center`}>
            <h3 className="font-bold text-xl md:text-2xl sm:leading-8 font-sans text-error">
              {dictionaries.error.title}
            </h3>
            <p className="mt-2 text-base-content/90">
              {dictionaries.error.description}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:flex-nowrap sm:justify-start">
              <button
                className="mx-auto px-6 py-2.5 bg-primary text-primary-content hover:bg-secondary hover:text-secondary-content transition hover:duration-700 font-medium  rounded-md ease-in-out"
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                {dictionaries.error.btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}