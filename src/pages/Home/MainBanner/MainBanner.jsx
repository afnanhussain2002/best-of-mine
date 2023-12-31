import { FaSearch } from "react-icons/fa";
import banner from '../../../assets/main-banner.png'

const MainBanner = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/19XYVfS/Best-Of-Mine-website-banner-1.png)] bg-cover">
    <div className="dark:bg-transparent">
        <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                <h1
                    className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                    Showcasing Your 
                    <span className="text-primary-color"> Favorites</span>
                    , Celebrating Your Style
                </h1>
                <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
                    A Community build tailwind component library.
                </p>
            </div>
            <div className="flex w-11/12 md:w-8/12 xl:w-6/12">
                <div className="flex rounded-md w-full">
                    <input type="text" name="q"
                        className="w-full p-3 rounded-md rounded-r-none border border-gray-300 placeholder-current dark:bg-white  dark:text-gray-300 dark:border-none "
                        placeholder="keyword" />
                    <button
                        className="inline-flex items-center gap-2 bg-primary-color text-white text-lg font-semibold py-3 px-6 rounded-r-md">
                        <span>Find</span>
                        <span>

                     <FaSearch/>
                        </span>
                </button>
                </div>
            </div>
        </div>
    </div>
</div>
    );
};

export default MainBanner;