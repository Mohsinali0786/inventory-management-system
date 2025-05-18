import Link from "next/link";
import React from "react";

export default function Card({ item }) {
  return (
    <div className="flex flex-col items-center max-w-100 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {item.title}
      </h5>
      <div>{<item.icon className="w-20 h-20 font-thin" />}</div>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {item.description}
      </p>
      <Link
        href={item.link}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {item?.linkTitle}
      </Link>
    </div>
  );
}
