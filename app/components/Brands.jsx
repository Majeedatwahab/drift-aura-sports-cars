import data from "@/app/data/Brands.json";

export default function Brands() {
    return (
        <section className="w-full py-12 px-4 sm:px-8 lg:px-16 bg-zinc-900 text-white">
            <div className="text-center mb-10">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                    Featured Brands
                </h1>
                <p className="text-zinc-400 mt-2">Explore iconic sports car manufacturers</p>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {data.Brands.map((brand) => (
                    <div
                        key={brand.id}
                        className="flex flex-col items-center justify-center bg-zinc-800 p-4 rounded-xl shadow-md hover:shadow-lg hover:bg-zinc-700 transition-all duration-300 ease-in-out"
                    >
                        <img
                            src={brand.image}
                            alt={`${brand.name} logo`}
                            className="w-16 h-16 mb-3 object-contain rounded-md"
                        />
                        <h2 className="font-semibold text-lg text-white">{brand.name}</h2>
                        <p className="text-sm text-zinc-400">{brand.country}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
