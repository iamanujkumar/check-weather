import React from "react";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYandexInternational } from "@fortawesome/free-brands-svg-icons";


export default function Footer()
{
   
    
 return(
   <>
   <footer className="p-4 bg-gray-800 shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">2024 by Anuj
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-xl text-white sm:mt-0">

        <li>
        <a href="https://github.com/iamanujkumar" target="_blank" className="mr-4 hover:underline md:mr-6 "><FontAwesomeIcon icon={faGithub}/> Anuj Kumar </a>
        </li>
    </ul>
  </footer>
 </>)
}

