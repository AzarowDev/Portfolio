import { NextSeo } from 'next-seo'
import React from 'react'
import Transitions from '../components/transitions'
import {
  CheckIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

const pricing = {
    tiers: [
      {
        title: 'Application Mobile',
        price: 'Sur devis uniquement',
        features: [
            'Plateform (IOS, Androïd)',
            'Développement sur mesure',
            'Performante et fluide',
            'Mise en production'
        ],
        cta: 'Contacter-moi',
        mostPopular: false,
      },
      {
        title: 'Site internet',
        price: 'Sur devis uniquement',
        features: [
          'Développement sur mesure',
          'Optimisation du référencelent',
          'Formation à l\'utilisation de la plateforme',
        ],
        cta: 'Contacter-moi',
        mostPopular: true,
      },
      {
        title: 'Spécifique',
        price: '€ 150 /jour',
        features: [
          'Développement BackEnd',
          'Développement FrontEnd',
        ],
        cta: 'Contacter-moi',
        mostPopular: false,
      },
    ],
  }

const Services = () => {
    return (
        <div>
            <NextSeo title='Services' />
            <Transitions>
            <div className="relative max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8">
          <div className="relative">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
                Plans tarifaires
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-gray-500">
                Choisissez un plan abordable doté des meilleures fonctionnalités
            </p>
          </div>
        </div>

        <main>
        {/* Pricing Section */}
        <section className="relative" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only">
            Pricing
          </h2>

          {/* Tiers */}
          <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-gray-900">{tier.title}</h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 py-1.5 px-4 bg-rose-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                      MEILLEUR VENTES
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-xl font-extrabold tracking-tight">{tier.price}</span>
                  </p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon className="flex-shrink-0 w-6 h-6 text-rose-500" aria-hidden="true" />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact">
                      <a className={classNames(
                    tier.mostPopular
                      ? 'bg-rose-500 text-white hover:bg-rose-600'
                      : 'bg-rose-50 text-rose-700 hover:bg-rose-100',
                    'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                  )}>
                    {tier.cta}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
            </Transitions>
        </div>
    )
}

export default Services
