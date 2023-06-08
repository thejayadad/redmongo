import React from 'react'
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillAmazonCircle,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
 
        
<footer class="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
    <div class="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
        <ul class="flex flex-wrap justify-center pb-8 text-lg font-light">
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        CATEGORY
                    </h2>
                    <ul>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Sports
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Money
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                News
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Tech
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        CONTACTS
                    </h2>
                    <ul>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Youtube
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Instagram
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Tic Tok
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="w-1/2 md:w-1/3 lg:w-1/3">
                <div class="text-center">
                    <h2 class="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Join Us
                    </h2>
                    <ul>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Locations
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Career Opprotunities
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Sponsor
                            </a>
                        </li>
                        <li class="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Partner
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <div class="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
            <a href="#">
            <AiFillAmazonCircle className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />

            </a>
            <a href="#">
            <AiFillTwitterCircle className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />

            </a>
            <a href="#">
            <AiFillFacebook className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
            </a>
            <a href="#">
            <AiFillInstagram className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />

            </a>
            <a href="#">
            <AiFillYoutube className="w-6 h-auto text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" />
            </a>
        </div>
        <div class="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            thejayadad
        </div>
    </div>
</footer>

  
  )
}

export default Footer