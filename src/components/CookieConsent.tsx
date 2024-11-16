'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
// import CookieConsent, { Cookies } from 'react-cookie-consent';

const CookieConsentComponent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowBanner(false)
  }

  if (!showBanner) return null
  return (
    // <CookieConsent
    //   location="bottom"
    //   buttonText="I Understand"
    //   cookieName="myAwesomeCookieName"
    //   style={{
    //     background: '#2B373B',
    //     fontSize: '16px',
    //     fontWeight: 'bold',
    //   }}
    //   buttonStyle={{
    //     color: '#4e503b',
    //     fontSize: '13px',
    //     backgroundColor: '#ffffff',
    //     padding: '5px 10px',
    //     borderRadius: '3px',
    //     marginLeft: '10px',
    //   }}
    //   expires={150}
    // >
    //   This website uses cookies to enhance the user experience.{' '}
    //   <span style={{ fontSize: '10px' }}>
    //     More info{' '}
    //     <a href="/privacy-policy">privacy policy</a>
    //   </span>
    // </CookieConsent>
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm text-gray-300 dark:text-gray-300">
          This website uses cookies to enhance the user experience.{' '}
          <Link href="/privacy-policy" className="underline hover:text-primary">
            More info privacy policy
          </Link>
        </p>
        <div className="flex items-center space-x-4">
          <Button onClick={acceptCookies} variant="default" size="sm">
            Accept
          </Button>
          <Button onClick={() => setShowBanner(false)} variant="ghost" size="sm">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentComponent;