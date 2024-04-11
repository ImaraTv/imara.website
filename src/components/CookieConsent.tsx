"use client"
import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const CookieConsentComponent: React.FC = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="I Understand"
      cookieName="myAwesomeCookieName"
      style={{
        background: '#2B373B',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
      buttonStyle={{
        color: '#4e503b',
        fontSize: '13px',
        backgroundColor: '#ffffff',
        padding: '5px 10px',
        borderRadius: '3px',
        marginLeft: '10px',
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.{' '}
      <span style={{ fontSize: '10px' }}>
        More info{' '}
        <a href="/privacy-policy">privacy policy</a>
      </span>
    </CookieConsent>
  );
};

export default CookieConsentComponent;