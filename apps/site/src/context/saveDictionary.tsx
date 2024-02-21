'use client';
import { FormLoader } from '@/components/formLoader/FormLoader';
import { Locale } from 'i18n-config';
import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { useGlobalContext } from './store';

const SaveDictionary = ({ lang, children }: { lang: Locale, children: ReactNode }) => {
  const { changeLang } = useGlobalContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (lang && loading) {
      changeLang(lang)
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, loading])

  return loading ? (
    // NOTE: This is the full loading screen
    <div className='w-full h-screen flex flex-col justify-center items-center gap-5'>
      {/* NOTE: Site Name */}
      <Image src="/navlogo.png" alt="Logo" width={220} height={45} className='animate-pulse' />
      {/* NOTE: Spinner loader */}
      <FormLoader color='text-primary' size='w-10 h-10' />
    </div>
  ) : <>{children}</>
}

export default SaveDictionary