"use client";

import { Building2, Mail, MessageSquareQuote } from "lucide-react";
import Text from "../atoms/Text";

export default function UserGrid({ users, onSelectUser }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {users.map((u) => (
        <div
          key={u.id}
          onClick={() => onSelectUser(u)}
          className="bg-white p-5 shadow-sm rounded-xl cursor-pointer hover:shadow-lg hover:-translate-y-1 border border-gray-100 transition-all duration-200"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && onSelectUser(u)}
          aria-label={`View details for ${u.name}`}
        >
          <Text className="font-bold text-lg mb-3 text-gray-900">{u.name}</Text>

          <div className="flex items-center gap-2 mb-2 text-gray-600">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <Text className="text-sm truncate">{u.email}</Text>
          </div>

          <div className="flex items-center gap-2 mb-3 text-gray-600">
            <Building2 className="w-4 h-4 flex-shrink-0" />
            <Text className="text-sm truncate">{u.company.name}</Text>
          </div>

          <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
            <MessageSquareQuote className="w-4 h-4 flex-shrink-0 text-gray-400 mt-0.5" />
            <Text className="text-sm italic text-gray-500 line-clamp-2">"{u.bio}"</Text>
          </div>
        </div>
      ))}
    </div>
  );
}
