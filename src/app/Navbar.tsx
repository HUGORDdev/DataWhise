import { ChevronDownIcon, ChevronUpIcon, Menu, X } from "lucide-react"
import Butttons from "../components/Butttons"
import { useState } from "react"
import NavDropdown from "../components/NavDropdown"

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
        <nav className="mx-10 py-5  flex gap-5 flex-col  border-b border-border-color">
            <div className="flex flex-row justify-between items-center">

                <div className="flex flex-row items-center gap-14">
                    <div className="flex gap-2 items-center ">
                        <span className="body-medium font-bold dark:text-white">
                            DataWise
                        </span>
                        <img src="/Icons/Vector.png" className="w-4 h-4" alt="logo of Data Whise" />
                    </div>
                    <div className=" hidden lg:flex gap-14 ">

                        <NavDropdown title="Features" items={menuData} />
                        <NavDropdown title="Case Studies" items={menuData} />
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
                    <Butttons name="Get a demo" variant="outline" className=" sm:flex hidden " />
                    <Butttons name="Start your free trial" className="sm:flex hidden" />
                    <button className="lg:hidden p-2 rounded-b-full text-gray-300  "
                        onClick={() => { setMobileMenuIsOpen((prev) => !prev) }}
                    >
                        {MobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6 dark:text-text-color  dark:group-hover:text-brand-dark " />
                        ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6 dark:text-text-color dark:group-hover:text-brand-dark" />
                        )}
                    </button>
                </div>
            </div>
            {MobileMenuIsOpen && (
                <ul className="">
                    <li className="group border-b  items-center border-border-color flex flex-row justify-between py-3">

                        <NavDropdown title="Other content page" items={menuData} />
                    </li>
                    <li className="group border-b  items-center border-border-color flex flex-row justify-between py-3">

                        <NavDropdown title="Other main pages" items={menuData} />
                    </li>
                    <li className="group border-b  items-center border-border-color flex flex-row justify-between py-3">

                        <NavDropdown title="Home layout" items={menuData} />
                    </li>
                    <li className="group border-b  items-center border-border-color flex flex-row justify-between py-3 hover:text-brand-green hover:border-b hover:border-brand-green">About us

                    </li>
                    <li className="group border-b  items-center border-border-color flex flex-row justify-between py-3  hover:text-brand-green hover:border-b hover:border-brand-green">Blog
                    </li>
                    <li className="group   items-center border-border-color flex flex-row justify-between py-2  hover:text-brand-green ">Contact
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar