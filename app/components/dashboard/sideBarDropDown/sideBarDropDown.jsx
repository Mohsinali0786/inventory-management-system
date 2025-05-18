// "use client";
// import {
//   BaggageClaim,
//   Check,
//   CheckCircle2,
//   ChevronDown,
//   CreditCard,
//   PlusCircle,
//   X,
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export default function DropDown({ title, href, items, icon: Icon }) {
//   console.log(items,'items')
//   console.log(title,'title')

//   return (
//     <div className="z-1 flex items-center hover:bg-blue-600 text-slate-50 p-2 rounded-md">
//       <button
//         id="dropdownDefaultButton"
//         data-dropdown-toggle="dropdown"
//         // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         className="text-white rounded-lg text-sm space-x-2 p-1 text-center inline-flex items-center w-100"
//         type="button"
//       >
//         <div className="flex items-center w-full justify-between" href={href}>
//           {/* <BaggageClaim className="w-4 h-4 mr-2" /> */}
//           <div className="flex items-center" >
//             <Icon className="w-4 h-4 mr-2" />
//             <span className="text-base">{title} </span>
//           </div>
//           <ChevronDown className="w-4 h-4" />
//         </div>
//         {/* <svg
//           className="w-2.5 h-2.5 ms-3"
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 10 6"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="m1 1 4 4 4-4"
//           />
//         </svg> */}
//       </button>

//       <div
//         id="dropdown"
//         className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700"
//       >
//         <ul
//           className="py-2 text-sm text-gray-700 dark:text-gray-200"
//           aria-labelledby="dropdownDefaultButton"
//         >
//           {items.map((item, index) => {
//             return (
//               <li key={index}>
//                 <Link
//                   href={item?.href}
//                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   <div className="flex justify-between items-center">
//                     <span>{item.title}</span>
//                     <PlusCircle className="w-4 h-4" />

//                     {/* <span>{item.icon}</span> */}
//                   </div>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./sideBarDropDown.module.css";
import { PlusCircle } from "lucide-react";
export default function DropDown({ title, href, items, icon: Icon }) {
  const pathName = usePathname();
  console.log(pathName);
  console.log(href, "href");
  return (
    <div>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="panel1-content"
          id="panel1-header"
          // className={styles.testClass}
          className={`${
            pathName == href
              ? styles.testClassActive
              : styles.testClass
          }`}
        >
          {/* <Typography component="span">{title }</Typography> */}
          <Link href={href} className="flex">
            <Icon  className="mr-2"/>
            {title}
          </Link>
        </AccordionSummary>
        <ul
          className="py-2 text-sm text-white dark:bg-gray-200 bg-slate-800"
          aria-labelledby="dropdownDefaultButton"
        >
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item?.href}
                  className="block px-4 py-2 rounded-md hover:bg-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <div className="flex justify-between items-center">
                    <span>{item.title}</span>
                    <PlusCircle className="w-4 h-4" />

                    {/* <span>{item.icon}</span> */}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </Accordion>
    </div>
  );
}
