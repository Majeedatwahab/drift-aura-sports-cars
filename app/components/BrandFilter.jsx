"use client"


const brands = [
    "Audi",
    "BMW",
    "Chevrolet",
    "Ferrari",
    "Lamborghini",
    "McLaren",
    "Porsche",

]

export default function BrandFilter({ selectedBrand, setSelectedBrand} ) {
    return (
        <div className="w-full max-w-xs mb-6">
            <label htmlFor="brand" className="block text-sm font-medium text-white mb-2">
                Choose a Brand
            </label>
            <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
                {brands.map((brand) => (
                    <option key={brand} value={brand}>
                        {brand}
                    </option>
                ))}
            </select>
        </div>
    )
}