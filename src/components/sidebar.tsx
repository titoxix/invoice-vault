"use client";

import { useState, useEffect } from "react";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { HiChartPie, HiX, HiMenu } from "react-icons/hi";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById("sidebar")?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <button
        className="p-2 m-2 bg-gray-800 text-white rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FlowbiteSidebar className="w-64 h-full bg-gray-900 text-white">
          <FlowbiteSidebar.Items>
            <FlowbiteSidebar.ItemGroup>
              <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </FlowbiteSidebar.Item>
              {/* Add more Sidebar Items here */}
            </FlowbiteSidebar.ItemGroup>
          </FlowbiteSidebar.Items>
        </FlowbiteSidebar>
      </div>
    </div>
  );
}
