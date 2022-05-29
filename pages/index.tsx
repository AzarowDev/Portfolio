import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
      <div>
        <NextSeo title='Home' />

        <main className="lg:relative">
            <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl">
                <span className="block xl:inline">Thibault </span>
                <span className="block text-indigo-600 xl:inline">Pointurier</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-2 md:text-xl lg:mx-0">
                Développeur d'applications web depuis 2020 ! <br />
                Je travail principalement avec AdonisJs/Laravel pour la partie backend et react pour la partie frontend
              </p>
              <div className="mt-5 sm:mt-4 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Votre devis gratuit
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Mes réalisations
                  </a>
                </div>
              </div>
            </div>
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
                  <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Heading picture" className="absolute inset-0 w-full h-full object-cover" />
                </div>
          </main>
      </div>
  )
}

export default Home
