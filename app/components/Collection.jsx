'use client'

import { useState } from 'react'
import BrandFilter from './BrandFilter'
import CarCards from './CarCards'

export default function ExploreCollection() {
    const [selectedBrand, setSelectedBrand] = useState('Audi')

    return (
        <section className="px-4 py-10 bg-black text-white" id='collection'>
            <h2 className="text-3xl font-bold mb-4">Explore Our Collections</h2>
            <BrandFilter selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />

            <CarCards selectedBrand={selectedBrand} />
        </section>
    )
}
