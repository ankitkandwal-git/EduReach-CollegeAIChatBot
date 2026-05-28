import React, { useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar'; 
import { 
  PaperAirplaneIcon, 
  MicrophoneIcon, 
  PhoneIcon, 
  AcademicCapIcon, 
  TrophyIcon, 
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { sendChatMessage } from '../services/chat.service.js';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi, I am Ava. Ask me anything about admissions, scholarships, placements, courses, hostel life, or campus facilities.',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const quickPills = [
    'Admission Process',
    'Fee Structure',
    'Placements',
    'Scholarships',
    'Hostel Details',
    'Campus Tour',
  ];

  const handleSend = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    setError('');
    setMessages((prev) => [...prev, { role: 'user', text: trimmedQuery }]);
    setQuery('');
    setLoading(true);

    try {
      const answer = await sendChatMessage(trimmedQuery);
      setMessages((prev) => [...prev, { role: 'assistant', text: answer }]);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to send message');
      setMessages((prev) => [...prev, { role: 'assistant', text: 'Sorry, I could not get a response. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-screen h-screen bg-[#121318] text-white relative overflow-hidden font-sans flex flex-col">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <Navbar />

      <div className="relative flex flex-1 w-full h-full pt-16 overflow-hidden">
        <Sidebar />


        <div className="flex flex-1 w-full h-full min-w-0 gap-6 py-6 pl-64 pr-6 overflow-hidden">
          <div className="flex-1 flex flex-col bg-[#16171D]/80 backdrop-blur-md border border-white/[0.06] rounded-2xl p-6 shadow-2xl overflow-hidden min-w-0 h-full">
            <div className="mb-6 shrink-0">
              <h1 className="text-2xl font-extrabold tracking-tight text-transparent md:text-3xl bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text">
                Your AI College Counselor is Online
              </h1>
              <p className="mt-1.5 text-sm text-slate-400">
                Ask anything about admissions, placements, scholarships, courses, hostel, fees, and campus life.
              </p>
            </div>

            <div className="relative mb-4 group shrink-0">
              <input
                type="text"
                placeholder="Ask Ava anything..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full pl-5 pr-14 py-3.5 bg-[#1C1D24] text-white placeholder-slate-500 rounded-xl border border-white/[0.08] focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 outline-none transition-all duration-200"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={loading}
                className="absolute p-2 transition-all -translate-y-1/2 rounded-lg shadow-lg right-3 top-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <PaperAirplaneIcon className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 shrink-0">
              {quickPills.map((pill) => (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setQuery(pill)}
                  className="px-3 py-1.5 bg-[#1C1D24] hover:bg-[#252731] border border-white/[0.06] hover:border-white/[0.12] rounded-lg text-xs text-slate-300 transition-all"
                >
                  {pill}
                </button>
              ))}
            </div>

            {error && (
              <div className="mb-4 text-sm text-red-400">{error}</div>
            )}


            <div className="flex-1 space-y-4 overflow-y-auto pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {messages.map((message, index) => (
                <div key={`${message.role}-${index}`} className={message.role === 'user' ? 'flex justify-end' : 'flex items-start gap-3'}>
                  {message.role === 'assistant' && (
                    <div className="flex items-center justify-center text-xs font-bold rounded-full shadow-md w-7 h-7 bg-gradient-to-br from-purple-600 to-indigo-600 shrink-0">
                      Ava
                    </div>
                  )}

                  <div className={message.role === 'user' ? 'max-w-[80%] bg-blue-600 px-4 py-2.5 rounded-2xl rounded-tr-none text-sm shadow-md' : 'flex-1 min-w-0 bg-[#1C1D24] border border-white/[0.06] p-4 rounded-2xl rounded-tl-none text-sm text-slate-200 leading-relaxed shadow-inner'}>
                    {message.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center text-xs font-bold rounded-full shadow-md w-7 h-7 bg-gradient-to-br from-purple-600 to-indigo-600 shrink-0">
                    Ava
                  </div>
                  <div className="flex-1 min-w-0 bg-[#1C1D24] border border-white/[0.06] p-4 rounded-2xl rounded-tl-none text-sm text-slate-200 leading-relaxed shadow-inner">
                    <div className="flex items-center gap-2 text-xs font-medium text-cyan-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      Streaming typing...
                    </div>
                    <p>Please wait while Ava searches the knowledge base...</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex w-[320px] xl:w-[350px] shrink-0 flex-col gap-4 overflow-y-auto h-full pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="bg-[#1C1D24] border border-white/[0.06] rounded-2xl p-4 flex flex-col items-center relative overflow-hidden group shadow-lg shrink-0">
              <div className="flex items-center justify-between w-full mb-3">
                <span className="text-xs font-semibold tracking-wider uppercase text-slate-400">AI Voice Assistant</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              <div className="relative my-2">
                <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-md opacity-40" />
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center p-0.5 relative">
                  <div className="w-full h-full bg-[#1C1D24] rounded-full flex items-center justify-center">
                    <MicrophoneIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>
              </div>

              <span className="mt-1 text-xs font-medium">Talk to Ava</span>
              <button className="flex items-center justify-center w-full gap-2 py-2 mt-3 text-xs font-semibold transition-all bg-blue-600 hover:bg-blue-500 rounded-xl">
                <PhoneIcon className="w-3.5 h-3.5 text-white" />
                Call Ava
              </button>
            </div>

            <div className="bg-[#1C1D24] border border-white/[0.06] rounded-2xl p-4 shadow-lg shrink-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold tracking-wide text-slate-300">Placement Analytics</h3>
                <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">Live Stats</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-[#16171D] border border-white/[0.04] p-2.5 rounded-xl">
                  <span className="text-[10px] text-slate-400 block mb-0.5">Highest Package</span>
                  <span className="text-sm font-black text-emerald-400">₹53 LPA</span>
                </div>
                <div className="bg-[#16171D] border border-white/[0.04] p-2.5 rounded-xl">
                  <span className="text-[10px] text-slate-400 block mb-0.5">Average Package</span>
                  <span className="text-sm font-bold text-white">₹8.2 LPA</span>
                </div>
                <div className="bg-[#16171D] border border-white/[0.04] p-2.5 rounded-xl">
                  <span className="text-[10px] text-slate-400 block mb-0.5">Companies Visited</span>
                  <span className="text-sm font-bold text-slate-200">202+</span>
                </div>
                <div className="bg-[#16171D] border border-white/[0.04] p-2.5 rounded-xl">
                  <span className="text-[10px] text-slate-400 block mb-0.5">Placement %</span>
                  <span className="text-sm font-bold text-blue-400">92.4%</span>
                </div>
              </div>
            </div>


            <div className="bg-[#1C1D24] border border-white/[0.06] rounded-2xl p-4 shadow-lg space-y-3 shrink-0">
              <h3 className="text-xs font-bold tracking-wide text-slate-300">Personalized for You</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 bg-[#16171D] border border-white/[0.04] rounded-xl">
                  <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-400"><AcademicCapIcon className="w-3.5 h-3.5"/></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] font-semibold truncate">Recommended Course</h4>
                    <p className="text-[9px] text-slate-400 truncate">Advanced TypeScript Architecture</p>
                  </div>
                  <ChevronRightIcon className="w-3 h-3 text-slate-500" />
                </div>
                <div className="flex items-center gap-3 p-2 bg-[#16171D] border border-white/[0.04] rounded-xl">
                  <div className="p-1.5 bg-purple-500/10 rounded-lg text-purple-400"><TrophyIcon className="w-3.5 h-3.5"/></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[10px] font-semibold truncate">Scholarship Opportunity</h4>
                    <p className="text-[9px] text-slate-400 truncate">Merit Grant Application Open</p>
                  </div>
                  <ChevronRightIcon className="w-3 h-3 text-slate-500" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;