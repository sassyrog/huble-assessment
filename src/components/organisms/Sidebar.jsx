"use client";

import { X, Mail, Phone, Globe, Building2, Briefcase, MessageSquareQuote } from "lucide-react";
import Text from "../atoms/Text";

export default function Sidebar({ user, onClose }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/10 bg-opacity-30  transition-opacity duration-300 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl p-6 overflow-y-auto transition-transform duration-300 z-50"
        role="dialog"
        aria-modal="true"
        aria-label="User details sidebar"
      >
        <button
          className="flex items-center gap-2 text-gray-500 hover:text-gray-800 font-medium mb-6 transition-colors"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
          Close
        </button>

        <Text className="text-2xl font-bold mb-6 text-gray-900">{user.name}</Text>

        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <Text className="text-sm break-all">{user.email}</Text>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
            <Text className="text-sm">{user.phone}</Text>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <Globe className="w-5 h-5 text-purple-500 flex-shrink-0" />
            <Text className="text-sm">{user.website}</Text>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-5 h-5 text-gray-600" />
            <Text className="font-semibold text-gray-900">Company</Text>
          </div>
          <Text className="font-medium text-gray-800 mb-1">{user.company.name}</Text>
          <div className="flex items-start gap-2 mt-2">
            <Briefcase className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
            <Text className="text-sm text-gray-600">{user.company.catchPhrase}</Text>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start gap-2">
            <MessageSquareQuote className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <Text className="italic text-sm text-gray-700">"{user.bio}"</Text>
          </div>
        </div>
      </div>
    </>
  );
}
