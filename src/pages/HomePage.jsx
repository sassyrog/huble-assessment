"use client";

import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import Layout from "../components/templates/Layout";
import SearchBar from "../components/molecules/SearchBar";
import UserGrid from "../components/organisms/UserGrid";
import Sidebar from "../components/organisms/Sidebar";
import Pagination from "../components/molecules/Pagination";

export default function HomePage() {
  const { users, loading } = useUsers();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const filtered = users
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "company") return a.company.name.localeCompare(b.company.name);
      return 0;
    });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  return (
    <Layout>
      <SearchBar
        value={search}
        onChange={handleSearchChange}
        sortBy={sortBy}
        onSortChange={(e) => setSortBy(e.target.value)}
        totalUsers={users.length}
        filteredUsers={filtered.length}
      />
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <p className="text-gray-500 mt-4">Loading users...</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No users found matching "{search}"</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search</p>
        </div>
      ) : (
        <>
          <UserGrid users={paginatedUsers} onSelectUser={setSelectedUser} />
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          )}
        </>
      )}
      {selectedUser && <Sidebar user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </Layout>
  );
}
