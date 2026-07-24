import { ChevronRight } from "lucide-react";
import React from "react";

const TabsList = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="w-full lg:w-1/3 flex flex-col space-y-3">
      {tabs?.map((tab, index) => {
        const isActive = index === activeTab;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`text-left p-4 rounded-2xl border transition-all relative z-20 duration-300 flex items-center justify-between group ${
              isActive
                ? "bg-white border-[#ef4444] shadow-md relative overflow-hidden"
                : "bg-white border-transparent shadow-sm hover:border-gray-200 hover:shadow-md text-gray-600"
            }`}
          >
            {isActive && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ef4444]"></div>
            )}
            <div className="flex items-center space-x-4 z-10 w-full pr-4">
              <div
                className={`p-2.5 rounded-xl transition-colors ${
                  isActive
                    ? "bg-[#ef4444] text-white shadow-sm"
                    : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span
                className={`text-sm md:text-[0.95rem] font-bold pr-2 leading-tight ${
                  isActive ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {tab.title}
              </span>
            </div>
            <ChevronRight
              size={16}
              className={`transition-transform duration-300 z-10 flex-shrink-0 ${
                isActive
                  ? "text-[#ef4444] translate-x-1 opacity-100"
                  : "text-gray-300 opacity-0 group-hover:opacity-100"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default TabsList;
