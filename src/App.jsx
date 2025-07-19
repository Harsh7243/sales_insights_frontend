import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const App = () => {
  const [kpis, setKpis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  axios
    .get("https://sales-insights-backend.onrender.com/kpis", { timeout: 30000 })
    .then((res) => {
      setKpis(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("API Error:", err);
      setLoading(false);
    });
  }, []);


  if (loading || !kpis) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        📊 Retail Analytics Dashboard
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Total Sales</h2>
        <p className="text-3xl text-green-600 font-bold mt-2">
          ₹{kpis.total_sales.toLocaleString()}
        </p>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top 5 Products</h2>
        {kpis.top_products.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={kpis.top_products}>
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500">No products data available.</p>
        )}
      </div>
    </div>
  );
};

export default App;
