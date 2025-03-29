import React, { useState } from 'react';

interface UrlInputFormProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const UrlInputForm: React.FC<UrlInputFormProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim() && !isLoading) {
      onSubmit(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
      <div className="relative flex-grow">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-terracotta" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </div>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste a Youtube video URL here"
          required
          className="w-full pl-10 pr-4 py-3 border-2 border-tan bg-white rounded-xl shadow-sm text-black focus:outline-none focus:ring-2 transition duration-200 ease-in-out text-sm"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        className={`px-3 rounded-xl text-white font-semibold bg-terracotta text-sm transition duration-200 ease-in-out shadow-sm ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Extract Recipe'}
      </button>
    </form>
  );
};

export default UrlInputForm;