import { NextSeo } from 'next-seo'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Transitions from '../components/transitions'

const posts = [
    {
      title: 'HTML',
      category: { name: 'Language Balistique', href: '#' },
      description:
        'HyperText Markup Language (HTML) est le code utilisé pour structurer une page web et son contenu. Par exemple, le contenu de votre page pourra être structuré en un ensemble de paragraphes, une liste à puces ou avec des images et des tableaux de données.',
      imageUrl: 'https://i.postimg.cc/SJ7NYHF1/html.png'
    },
    {
      title: 'CSS',
      category: { name: 'Language', href: '#' },
      description:
        'CSS est un langage basé sur des règles — on définit des règles de styles destinées à des éléments ou des groupes d\'éléments particuliers dans la page. Par exemple, « Je veux que le titre principal de ma page s\'affiche en rouge en gros caractères. » La règle commence par un sélecteur, l\'élément HTML mis en forme.',
      imageUrl:
        'https://i.postimg.cc/c63J0rDS/css.png',
    },
    {
      title: 'Git',
      category: { name: 'VERSION', href: '#' },
      description:
        'Git est de loin le système de contrôle de version le plus largement utilisé aujourd\'hui. Git est un projet open source avancé, qui est activement maintenu. À l\'origine, il a été développé en 2005 par Linus Torvalds, le créateur bien connu du noyau du système d\'exploitation Linux.',
      imageUrl:
        'https://i.postimg.cc/QHrdthPW/git.png',
    },
    {
        title: 'SASS',
        category: { name: 'Language', href: '#' },
        description:
          'Sass (Syntactically awesome stylesheets) est un langage de script préprocesseur qui est compilé ou interprété en CSS (Cascading Style Sheets). SassScript est le langage de script en lui-même. Sass est disponible en deux syntaxes.',
        imageUrl:
          'https://i.postimg.cc/kVZndmKG/sass.png',
    },
    {
      title: 'Typescript',
      category: { name: 'SUPERSET', href: '#' },
      description:
        'TypeScript est un langage open-source pris en charge par Microsoft, qui s\'appuie sur JavaScript en ajoutant une fonction de type statique facultative. Les types fournissent un moyen de structurer et de valider son code avant de l\'exécuter.',
      imageUrl:
        'https://i.postimg.cc/FdLhrBVZ/ts.png',
    },
    {
      title: 'React',
      category: { name: 'BIBLIOTHEQUE', href: '#' },
      description:
        'React est une bibliothèque JavaScript utilisée pour construire des composants d\'interface utilisateur réutilisables. Selon la documentation officielle de React, la définition est la suivante - React est une bibliothèque permettant de construire des interfaces utilisateur composables.',
      imageUrl:
        'https://i.postimg.cc/210k2v54/react.png',
    },
    {
      title: 'Tailwind',
      category: { name: 'FRAMEWORK CSS', href: '#' },
      description:
        'Tailwind Css est un framework CSS complètement personnalisable, basé sur le principe de classes utilitaires, dont la version 2.0 a été annoncée hier avec encore plus de nouveautés sympathiques. Le site officiel nous annonce la couleur immédiatement : construisez rapidement des sites sans quitter votre code HTML.',
      imageUrl:
        'https://i.postimg.cc/gwrY5Jw1/tailwind.png',
    },
    {
      title: 'NodeJS',
      category: { name: 'RUNTIME', href: '#' },
      description:
        'NodeJS est une plateforme construite sur le moteur JavaScript V8 de Chrome qui permet de développer des applications en utilisant du JavaScript. Il se distingue des autres plateformes gràce à une approche non bloquante permettant d\'effectuer des entrées/sorties (I/O) de manière asynchrone.',
      imageUrl:
        'https://i.postimg.cc/jDxqHvRx/node.png',
    },
  ]

const AboutMe = () => {
    const [selectedId, setSelectedId] = useState(null)
    return (
        <div>
            <NextSeo title='About Me' />
            <Transitions>
            <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Technologies utilisées</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Tout développeur se doit de maitriser les standards du web mais également d'autres technologies selon sa spécialité.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={ post.imageUrl } alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"> { post.category.name } </span>
                    </a>
                  </p>
                  <a className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
            </Transitions>
        </div>
    )
}

export default AboutMe
