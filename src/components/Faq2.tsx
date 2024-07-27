import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import star from '@/images/imara_star.ico'

const faqs = [
  [
    {
      question: 'What is Imara TV?',
      answer:
        "Imara TV is a youth-centered social enterprise harnessing the talents of young people using digital innovations to create entertaining and educational content that promote continous learning for our audiences to make the world a better place. Imara Tv is the outcome of a co-creation process by young people in Kenya and the United Nations Population Fund (UNFPA-K), Governemnt of Kenya's Ministry of Health and Nailab Accelerator Business Incubator. It is registered as Imara Digital Media Foundation Limited, a non-profit company limited by guarantee.",
    },
    {
      question: 'How does Imara Tv work?',
      answer:
        "Imara Tv is a virtual film studio and broadcast platform that enables young people with complimentary skills like storytelling and animating to collaborate online and offline to create short funny films based on a sponsor's product, service or message for public education in a locally contexutallised, relatable and memorable way. Imara Tv monetizes the films using advertising, product placement, institutional sponsorships and other royalties for business sustainability.",
    },
  ],
  [
    {
      question:
        'Who owns the films on Imara Tv?',
      answer:
        'The young people who collaborate to produce the film jointly own the copyright and royalties to the digital film asset unless the sponsor explicitly buys out the film rights as per agreements made during the contracting stage of the film production process. The young people earn upto 90% of net revenue generated by the films they own on Imara Tv forever to create sustainable jobs and digital wealth for themselves in the local and global film industries.',
    },
    {
      question:
        'What type of content does Imara Tv show?',
      answer:
        "Imara Tv shows wholesome positive content that will make you laugh and learn something new everyday. We show the following types of content: Films, Music, Podcasts, Animations, Comics, Webinars and Sports Shows. We broadcast content on non-partisan youth centered themes like Health, Academics (STEAM), Business, Agriculture, Hospitality and Sports.",
    },
  ],
]

export function Faq2() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-white py-20 sm:py-8"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
        </div>
        <div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
          >
            {faqs.map((column, columnIndex) => (
              <li key={columnIndex}>
                <ul role="list" className="flex flex-col gap-y-8">
                  {column.map((faq, faqIndex) => (
                    <li key={faqIndex}>
                      <h3 className="font-display text-lg leading-7 text-slate-900">
                        <div className='flex'>
                          <Image
                            src={star} alt={''}>
                          </Image>
                          {faq.question}
                        </div>
                      </h3>
                      <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <ul className="mt-16 grid max-w-100">
            <li className="font-display text-lg leading-7 text-slate-900">
              <div className='flex'>
                <Image
                  src={star} alt={''}>
                </Image>
                <h3>How can I join the platform?</h3>
              </div>
              <p className="mt-4 text-sm text-slate-700">There are four (4) user roles on the Imara TV Platform:</p>
              <ul>
                <li className="mt-4 text-sm text-slate-700">{' '}
                      <a
                        className="font-medium"
                        href="https://dashboard.imara.tv/register?r=admin"
                        target='_blank'
                      >
                        Content Creators:  
                      </a> A young person who has a natural talent or digital skill looking for an opportunity to earn money, build their craft and create films. <br></br>
                      <a
                        className="font-medium"
                        href="https://dashboard.imara.tv/register?r=admin"
                        target='_blank'
                      >
                        Content Sponsors:  
                      </a> A person or organisation selling a product, service or advocacy message looking for a mass media platform to advertise and reach targeted members of the public. <br></br>
                      <a
                        className="font-medium"
                        href="/sign-up"
                        target='_blank'
                      >
                        Content Consumers:  
                      </a> A person looking for wholesome edutainment content for themselves and/or their students and/or their children to enjoy and know more. <br></br>
                      <a
                        className="font-medium"
                        href="https://dashboard.imara.tv/register"
                        target='_blank'
                      >
                        Content Administrators:  
                      </a>  A person working for Imara Tv at the Local User & Content Administration level or Global Affairs, Innovation & Accountability Level.</li>
              </ul>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  )
}