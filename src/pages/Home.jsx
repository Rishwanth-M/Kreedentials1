import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ShopGiftsBySport from '../components/ShopGiftsBySport'
import Featured from '../components/Featured'
import ColourOfSeason from '../components/ColourOfSeason'
import ShopBySport from '../components/ShopBySport'
import ShopByIcons from '../components/ShopByIcons'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <main>
        <Hero />
        <ShopGiftsBySport />
        <Featured />
        <ColourOfSeason />
        <ShopBySport />
        <ShopByIcons />
      </main>
    </div>
  )
}
