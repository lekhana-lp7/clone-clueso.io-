"use client";

import { useEffect, useState } from "react";

export default function InsightsPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/feedback")
      .then((res) => res.json())
      .then((data) => setCount(data.length));
  }, []);

  return (
    <div className="text-black">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Insights
        </h1>
        <p className="text-gray-600 mt-1">
          AI-powered overview of user feedback
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow border">
          <h3 className="text-sm text-gray-600">
            Total Feedback
          </h3>
          <p className="text-4xl font-bold text-black mt-2">
            {count}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border">
          <h3 className="text-sm text-gray-600">
            Top Issue
          </h3>
          <p className="text-lg font-semibold text-black mt-2">
            Pricing Confusion
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow border">
          <h3 className="text-sm text-gray-600">
            Sentiment
          </h3>
          <p className="text-lg font-semibold text-black mt-2">
            Mostly Negative
          </p>
        </div>
      </div>
    </div>
  );
}
