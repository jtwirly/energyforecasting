'use client'

import React, { useState, useEffect } from 'react';
import { Wind, Sun, Activity, ArrowRight } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const generateWaveData = (offset) => {
  return Array(24).fill().map((_, i) => ({
    time: i,
    value: Math.sin((i + offset) / 4) * 200 + 600,
    forecast: Math.sin((i + offset) / 4) * 190 + 600
  }));
};

export default function MarblismHero() {
  const [data, setData] = useState(generateWaveData(0));
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset(prev => prev + 1);
      setData(generateWaveData(offset));
    }, 100);
    return () => clearInterval(timer);
  }, [offset]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Stats Banner */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 rounded-full px-6 py-2 flex items-center space-x-8">
            <span className="flex items-center">
              <Activity className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-sm">97% Accuracy</span>
            </span>
            <span className="flex items-center">
              <Wind className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm">Wind Forecasting</span>
            </span>
            <span className="flex items-center">
              <Sun className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm">Solar Prediction</span>
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-yellow-400 bg-clip-text text-transparent">
                Predict Tomorrow's Energy Today
              </span>
            </h1>
            
            <p className="text-xl text-slate-300">
              Marblism delivers precise renewable energy forecasting powered by advanced AI. Transform your grid operations with real-time wind and solar generation predictions.
            </p>

            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center transition-all">
                Start Forecasting
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all">
                View Demo
              </button>
            </div>
          </div>

          {/* Animated Chart */}
          <div className="bg-slate-800/50 rounded-2xl p-6 h-96">
            <div className="text-sm text-slate-400 mb-4">Live Prediction Demo</div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#60a5fa" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#34d399" 
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <Wind className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Wind Generation</h3>
            <p className="text-slate-400">Advanced wind power forecasting with real-time accuracy monitoring.</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <Sun className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Solar Production</h3>
            <p className="text-slate-400">Precise solar generation predictions accounting for weather patterns.</p>
          </div>
          <div className="bg-slate-800/50 p-6 rounded-xl">
            <Activity className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Grid Optimization</h3>
            <p className="text-slate-400">Balance supply and demand with AI-powered insights.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
