"use client";

import { useEffect, useState, useTransition } from "react";
import { ChevronDown, Search } from "lucide-react";
import JobsList from "./JobList";

const LIMIT = 10;

export default function CareersClient({
  initialJobs,
  initialHasMore,
  departments,
}) {
  const [jobs, setJobs] = useState(initialJobs);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [selectedDeptId, setSelectedDeptId] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const roleTypes = [
    "All Types",
    ...new Set(initialJobs.map((j) => j.x_studio_role_type).filter(Boolean)),
  ];

  async function applyFilters({ deptId, type, search }) {
    const params = new URLSearchParams();
    params.set("offset", "0");
    params.set("limit", String(LIMIT));
    if (deptId) params.set("departmentId", String(deptId));
    if (type && type !== "All Types") params.set("roleType", type);
    if (search && search.trim()) params.set("search", search.trim());

    startTransition(async () => {
      try {
        const res = await fetch(`/api/jobs?${params.toString()}`);
        if (!res.ok) {
          console.error("Failed to fetch jobs:", res.status);
          return;
        }
        const { jobs: newJobs, hasMore: newHasMore } = await res.json();
        setJobs(newJobs);
        setHasMore(newHasMore);
      } catch (err) {
        console.error("Filter error:", err);
      }
    });
  }

  const handleDeptChange = (e) => {
    const val = e.target.value;
    setSelectedDeptId(val);

    applyFilters({
      deptId: val,
      type: selectedType,
      search: debouncedSearch,
    });
  };

  const handleTypeChange = (e) => {
    const val = e.target.value;
    setSelectedType(val);

    applyFilters({
      deptId: selectedDeptId,
      type: val,
      search: debouncedSearch,
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // const val = e.target.value;
    // setSearchQuery(val);
    // applyFilters({ deptId: selectedDeptId, type: selectedType, search: val });
  };

  useEffect(() => {
    applyFilters({
      deptId: selectedDeptId,
      type: selectedType,
      search: debouncedSearch,
    });
  }, [debouncedSearch]);

  const hasActiveFilters =
    selectedDeptId ||
    (selectedType && selectedType !== "All Types") ||
    searchQuery;

  if (initialJobs.length === 0 && !hasActiveFilters) {
    return (
      <div className="text-center py-24">
        <p className="text-xl font-semibold text-white mb-2">
          No open positions right now
        </p>
        <p className="text-gray-500 text-sm">
          Check back soon — we're always growing.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-end gap-3 w-full mt-14">
        {/* Department Dropdown */}
        <div className="relative group min-w-[170px]">
          <select
            value={selectedDeptId}
            onChange={handleDeptChange}
            className="appearance-none w-full bg-[#f4f5f7] hover:bg-[#ebedf1] border border-transparent focus:border-gray-300 focus:bg-white text-gray-800 font-medium py-3 pl-4 pr-10 rounded-[8px] outline-none transition-all cursor-pointer"
          >
            <option value="">All Departments</option>
            {departments.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
            <ChevronDown size={18} />
          </div>
        </div>

        {/* Type Dropdown */}
        <div className="relative group min-w-[140px]">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="appearance-none w-full bg-[#f4f5f7] hover:bg-[#ebedf1] border border-transparent focus:border-gray-300 focus:bg-white text-gray-800 font-medium py-3 pl-4 pr-10 rounded-[8px] outline-none transition-all cursor-pointer"
          >
            {roleTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
            <ChevronDown size={18} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow xl:flex-grow-0 min-w-[260px]">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-[#f4f5f7] focus:bg-white border border-transparent focus:border-gray-300 text-gray-900 font-medium py-3 pl-4 pr-12 rounded-[8px] outline-none transition-all placeholder:text-gray-500 placeholder:font-normal"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-600">
            <Search size={18} strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Results */}
      {isPending ? (
        <div className="text-center py-24 text-gray-400 min-h-[50vh] flex items-center justify-center px-5">
          Loading...
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center min-h-[70vh] pt-40">
          {/* <p className="text-xl font-semibold text-white mb-2">
            No matching positions found
          </p> */}
          <p className="text-gray-500 text-sm">No positions found</p>
        </div>
      ) : (
        <JobsList initialJobs={jobs} initialHasMore={hasMore} />
      )}
    </>
  );
}
