import { ChevronDownIcon, ChevronUpIcon, Menu, X } from "lucide-react"
import Butttons from "../components/Butttons"
import { useState } from "react"

const Navbar = () => {
    const [MobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
    const menuData = [
        "AI-Powered Predictive Analytics",
        "Seamless Integrations",
        "Customizable Dashboards",
        "Real-time Data Processing",
        "Collaborative Tools",
        "Security & Compliance"]
    return (
        <nav className="mx-5 py-5 flex flex-row justify-between items-center border-b border-brand-dark">
            <div className="flex flex-row items-center gap-14">
                <div className="flex gap-2 items-center ">
                    <span className="body-medium font-bold dark:text-white">
                        DataWise
                    </span>
                    <img src="/Icons/Vector.png" className="w-4 h-4" alt="logo of Data Whise" />
                </div>
                <div className=" hidden lg:flex gap-14 ">
                    {/* Le parent 'group' est maintenant une div pour l'accessibilité */}
                    <div className="relative group inline-block">
                        <button className="flex items-center gap-2 cursor-pointer outline-none">
                            <span className="text-brand-dark dark:text-text-color body-base font-medium group-hover:text-brand-green transition-colors">
                                Features
                            </span>
                            <ChevronDownIcon className="w-4 h-4 block group-hover:hidden dark:text-text-color" />
                            <ChevronUpIcon className="w-4 h-4 text-brand-green hidden group-hover:block" />
                        </button>


                        <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">

                            {/* Le Menu Réel */}
                            <ul className="w-64 bg-white dark:bg-black border border-border-color rounded-2xl dark:shadow-xl/30 shadow-brand-green overflow-hidden">
                                {menuData.map((item, index, array) => (
                                    <li
                                        key={index}
                                        className={`py-3 px-4 text-sm text-brand-dark hover:bg-gray-50 dark:text-text-color cursor-pointer transition-colors
                                        ${index !== array.length - 1 ? 'border-b border-border-color' : ''}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="relative group inline-block">
                        <button className="flex items-center gap-2 cursor-pointer outline-none">
                            <span className="text-brand-dark dark:text-text-color body-base font-medium group-hover:text-brand-green transition-colors">
                                Case Studies
                            </span>
                            <ChevronDownIcon className="w-4 h-4 block group-hover:hidden dark:text-text-color" />
                            <ChevronUpIcon className="w-4 h-4 text-brand-green hidden group-hover:block" />
                        </button>


                        <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">

                            {/* Le Menu Réel */}
                            <ul className="w-64 bg-white dark:bg-black border border-border-color rounded-2xl dark:shadow-2xl/30 shadow-brand-green overflow-hidden">
                                {menuData.map((item, index, array) => (
                                    <li
                                        key={index}
                                        className={`py-3 px-4 text-sm text-brand-dark hover:bg-gray-50 dark:text-text-color cursor-pointer transition-colors
                                        ${index !== array.length - 1 ? 'border-b border-border-color' : ''}`}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <button className=" cursor-pointer">
                        <span className="body-base dark:text-text-color hover:text-brand-green hover:border-b  hover:border-brand-green font-medium text-brand-dark ">
                            English

                        </span>
                    </button>
                    <button className=" cursor-pointer">
                        <span className="dark:text-text-color body-base hover:text-brand-green hover:border-b  hover:border-brand-green font-medium text-brand-dark ">
                            Support
                        </span>
                    </button>
                </div>
            </div>
            <div className="flex gap-4">
                <Butttons name="Get a demo" variant="outline" className=" sm:flex hidden "  />
                <Butttons name="Start your free trial" className="sm:flex hidden"  />
                <button className="lg:hidden p-2 rounded-b-full text-gray-300  hover:bg-text-color  hover:rounded-full group "
                    onClick={() => { setMobileMenuIsOpen((prev) => !prev) }}
                >
                    {MobileMenuIsOpen ? (
                        <X className="w-5 h-5 sm:w-6 sm:h-6 dark:text-text-color  dark:group-hover:text-brand-dark " />
                    ) : (
                        <Menu className="w-5 h-5 sm:w-6 sm:h-6 dark:text-text-color dark:group-hover:text-brand-dark"  />
                    )}
                </button>
            </div>

        </nav>
    )
}

export default Navbar