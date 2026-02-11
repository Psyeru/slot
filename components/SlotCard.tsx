
import React, { useState, useEffect } from 'react';
import { SlotItem, HistoryItem } from '../types';
import { ExternalLink } from 'lucide-react';

interface SlotCardProps {
  tickets: number;
  onPlay: (result: SlotItem[]) => void;
  activeTab: 'play' | 'history';
  onTabChange: (tab: 'play' | 'history') => void;
  history: HistoryItem[];
  isSpinning: boolean;
}

const SYMBOLS = [SlotItem.CHERRY, SlotItem.SEVEN, SlotItem.STAR, SlotItem.ROBOT, SlotItem.GIFT];

const SlotCard: React.FC<SlotCardProps> = ({ tickets, onPlay, activeTab, onTabChange, history, isSpinning }) => {
  const [reels, setReels] = useState<SlotItem[]>([SlotItem.CHERRY, SlotItem.SEVEN, SlotItem.STAR]);

  useEffect(() => {
    let interval: any;
    if (isSpinning) {
      interval = setInterval(() => {
        setReels([
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
          SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
        ]);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isSpinning]);

  const handleSpin = () => {
    if (tickets <= 0 || isSpinning) return;
    const finalResult = [
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    ];
    onPlay(finalResult);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-6">
      <div className="flex border-b border-gray-100">
        <button 
          onClick={() => onTabChange('play')}
          className={`flex-1 py-4 font-bold transition-all ${activeTab === 'play' ? 'bg-[#2b4c8c] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          슬롯 머신
        </button>
        <button 
          onClick={() => onTabChange('history')}
          className={`flex-1 py-4 font-bold transition-all ${activeTab === 'history' ? 'bg-[#2b4c8c] text-white' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          당첨 내역
        </button>
      </div>

      <div className="p-6">
        {activeTab === 'play' ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-gray-600">내 보유 티켓</span>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black text-gray-900 border-b-2 border-blue-500 px-2">{tickets}</span>
                <span className="text-gray-500 font-medium">회</span>
              </div>
            </div>

            <div className="text-center py-4 bg-red-50/50 rounded-2xl border border-red-100">
              <a href="/membership" className="group inline-flex flex-col items-center">
                <p className="text-xs text-red-500 font-bold mb-1 group-hover:underline">정기 멤버십 결제 바로가기</p>
                <h3 className="text-lg font-black text-gray-800 flex items-center gap-1">
                  100% 당첨 기회 <ExternalLink className="w-4 h-4 text-gray-400" />
                </h3>
                <p className="text-sm text-gray-500">결제 완료 시 티켓 즉시 지급!</p>
              </a>
            </div>

            <div className="bg-[#4a3324] p-4 rounded-2xl shadow-inner relative border-4 border-[#3a281c]">
               <div className="bg-white rounded-xl h-24 flex items-center justify-around gap-2 px-4 shadow-inner overflow-hidden">
                {reels.map((symbol, idx) => (
                  <div key={idx} className="flex-1 h-16 flex items-center justify-center text-4xl bg-gray-50 rounded-lg shadow-sm border border-gray-100 transition-all duration-75">
                    {symbol}
                  </div>
                ))}
               </div>
            </div>

            <button 
              onClick={handleSpin}
              disabled={tickets <= 0 || isSpinning}
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transform transition active:scale-95 flex items-center justify-center gap-2 ${
                tickets > 0 ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {isSpinning ? (
                <div className="flex gap-1">
                  <span className="animate-bounce">●</span>
                  <span className="animate-bounce delay-75">●</span>
                  <span className="animate-bounce delay-150">●</span>
                </div>
              ) : '슬롯머신 플레이 START'}
            </button>
          </div>
        ) : (
          <div className="max-h-[300px] overflow-y-auto space-y-3 pr-1 custom-scrollbar">
            {history.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-sm">아직 당첨 내역이 없습니다.</p>
                <button onClick={() => onTabChange('play')} className="mt-2 text-blue-500 text-sm font-bold hover:underline">첫 플레이 하러 가기</button>
              </div>
            ) : (
              history.map(item => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-white transition-colors">
                  <div className="flex gap-2 text-xl">
                    {item.result.map((s, i) => <span key={i} className="drop-shadow-sm">{s}</span>)}
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-gray-400 font-mono mb-1">{item.timestamp.toLocaleDateString()} {item.timestamp.toLocaleTimeString()}</p>
                    <p className="text-sm font-bold text-blue-600">{item.reward}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlotCard;
