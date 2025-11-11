"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

const TableOfContent = ({ headings = [] }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.3,
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
    }
  };

  return (
    <div className="w-full bg-white   border-b overflow-hidden">

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between p-4 font-semibold text-sm md:text-base "
      >
        <span className="uppercase text-sm md:text-xl tracking-wide">Table of Contents</span>
        {isOpen ? (
          <ChevronDown size={18} className="text-gray-600" />
        ) : (
          <ChevronRight size={18} className="text-gray-600" />
        )}
      </button>


      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className=""
          >
            {headings.length > 0 ? (
              headings.slice(1).map((heading, index) => (
                <Link 
                href={`#${heading}`}
                  key={index}
                  className={`cursor-pointer hover:font-bold transition-all ease-linear rounded-2xl hover:bg-gray-100 px-5 py-3 text-sm md:text-lg  flex items-center gap-2 ${
                    activeId === heading.id
                      ? "bg-gray-100 font-semibold text-red-600"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleClick(heading.id)}
                >
                  <ChevronRight size={20}/>
                 <span dangerouslySetInnerHTML={{__html:heading}} /> 
                </Link>
              ))
            ) : (
              <p className="p-4 text-gray-500 text-sm">No sections found</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TableOfContent;
