"use client";

import { Search, ArrowUpDown, Users } from "lucide-react";
import Input from "../atoms/Input";

export default function SearchBar({ value, onChange, sortBy, onSortChange, totalUsers, filteredUsers }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
        <Users className="w-4 h-4" />
        <span>
          Showing {filteredUsers} of {totalUsers} users
        </span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex-1 max-w-md relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <Input value={value} onChange={onChange} placeholder="Search by name..." className="pl-10" />
        </div>

        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <ArrowUpDown className="w-4 h-4" />
          </div>
          <select
            value={sortBy}
            onChange={onSortChange}
            className="border border-gray-300 rounded-lg pl-10 pr-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 appearance-none bg-white"
          >
            <option value="name">Sort by Name</option>
            <option value="company">Sort by Company</option>
          </select>
        </div>
      </div>
    </div>
  );
}
