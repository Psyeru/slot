
import React, { useState, useCallback, useEffect } from 'react';
import { 
  Home, Search, Gift, Share2, ChevronLeft, 
  ExternalLink, ChevronRight, Target, HelpCircle, 
  FileText, ShieldCheck, Instagram, Twitter, Facebook 
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// --- Types & Constants ---
export enum SlotItem {
  CHERRY = '🍒',
  SEVEN = '7',
  STAR = '⭐',
  ROBOT = '🤖',
  GIFT = '🎁'
}

export interface HistoryItem {
  id: string;
  timestamp: Date;
  result: SlotItem[];
  reward: string;
}

const SYMBOLS = [SlotItem.CHERRY, SlotItem.SEVEN, SlotItem.STAR, SlotItem.ROBOT, SlotItem.GIFT];

// --- Sub-Components ---

const Header: React.FC = () => {
  const handleShare = () => {
    const dummyUrl = window.location.href;
    navigator.clipboard.writeText(dummyUrl);
    alert('초대 링크가 클립보드에 복사되었습니다!');
  };

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-14 bg-white/95 backdrop-blur-md flex items-center justify-between px-4 z-50 border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-2">
        <a href="/" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </a>
        <h1 className="font-bold text-gray-900 truncate max-w-[150px]">메타하우스</h1>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={handleShare} className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="공유하기">
          <Share2 className="w-5 h-5 text-gray-600" />
        </button>
        <a href="/search" className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Search className="w-5 h-5 text-gray-600" /></a>
        <a href="/rewards" className="p-2 hover:bg-gray-100 rounded-full transition-colors"><Gift className="w-5 h-5 text-gray-600" /></a>
        <div className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden border border-gray-100">
          <img src="https://picsum.photos/seed/user/100/100" alt="avatar" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
};

const Hero: React.FC = () => (
  <section className="relative h-[380px] pt-14 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=1200" alt="Casino" className="w-full h-full object-cover brightness-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50" />
    </div>
    <div className="absolute left-[-20px] bottom-10 z-10 w-64 h-80">
      <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600" alt="Dealer" className="w-full h-full object-contain filter drop-shadow-2xl" style={{ transform: 'scale(1.2)' }} />
    </div>
    <div className="relative z-20 text-center px-4 mb-20">
      <h2 className="text-4xl font-black text-white italic tracking-tighter drop-shadow-lg">
        <span className="gold-text">메타 슬롯머신</span><br />
        <span className="text-white text-5xl">OPEN!</span>
      </h2>
    </div>
  </section>
);

const SlotCard: React.FC<{
  tickets: number;
  onPlay: (result: SlotItem[]) => void;
  activeTab: 'play' | 'history';
  onTabChange: (tab: 'play' | 'history') => void;
  history: HistoryItem[];
  isSpinning: boolean;
}> = ({ tickets, onPlay, activeTab, onTabChange, history, isSpinning }) => {
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
        <button onClick={() => onTabChange('play')} className={`flex-1 py-4 font-bold ${activeTab === 'play' ? 'bg-[#2b4c8c] text-white' : 'text-gray-500'}`}>슬롯 머신</button>
        <button onClick={() => onTabChange('history')} className={`flex-1 py-4 font-bold ${activeTab === 'history' ? 'bg-[#2b4c8c] text-white' : 'text-gray-500'}`}>당첨 내역</button>
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
                <h3 className="text-lg font-black text-gray-800 flex items-center gap-1">100% 당첨 기회 <ExternalLink className="w-4 h-4 text-gray-400" /></h3>
              </a>
            </div>
            <div className="bg-[#4a3324] p-4 rounded-2xl shadow-inner relative border-4 border-[#3a281c]">
              <div className="bg-white rounded-xl h-24 flex items-center justify-around gap-2 px-4 shadow-inner overflow-hidden">
                {reels.map((symbol, idx) => (
                  <div key={idx} className="flex-1 h-16 flex items-center justify-center text-4xl bg-gray-50 rounded-lg shadow-sm border border-gray-100">{symbol}</div>
                ))}
              </div>
            </div>
            <button onClick={handleSpin} disabled={tickets <= 0 || isSpinning} className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition active:scale-95 ${tickets > 0 ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gray-400'}`}>
              {isSpinning ? 'SPINNING...' : '슬롯머신 플레이 START'}
            </button>
          </div>
        ) : (
          <div className="max-h-[300px] overflow-y-auto space-y-3">
            {history.length === 0 ? <p className="text-center text-gray-400 py-10">내역이 없습니다.</p> : history.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex gap-2 text-xl">{item.result.map((s, i) => <span key={i}>{s}</span>)}</div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400">{item.timestamp.toLocaleTimeString()}</p>
                  <p className="text-sm font-bold text-blue-600">{item.reward}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const InfoSections: React.FC = () => (
  <div className="space-y-4 mb-8">
    <a href="/guide" className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50 hover:border-blue-200 transition-all">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl">👻</div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-800 text-sm">슬롯머신 이용 가이드</h4>
        <p className="text-xs text-gray-500">추첨 방식과 확률이 궁금하신가요?</p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-300" />
    </a>
    <a href="/events" className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border-l-4 border-l-blue-500 border-gray-50 hover:bg-blue-50/30 transition-all">
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">👶</div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-800 text-sm">티켓 추가 증정 이벤트</h4>
        <p className="text-xs text-gray-500">친구 초대 시 슬롯 티켓을 더 드려요!</p>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-300" />
    </a>
  </div>
);

const RewardTable: React.FC = () => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-3"><Target className="w-5 h-5 text-blue-500" /><h3 className="font-black text-gray-900">보상 안내</h3></div>
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden text-sm">
      <div className="grid grid-cols-2 bg-gray-50 p-3 font-bold text-gray-600 border-b border-gray-100"><div>슬롯 아이콘</div><div>당첨 보상</div></div>
      <div className="grid grid-cols-2 p-4 border-b border-gray-50 items-center"><div className="text-3xl font-black text-yellow-500">7</div><div><p className="font-bold">울트라 레어 박스</p></div></div>
      <div className="grid grid-cols-2 p-4 items-center"><div className="text-3xl">🤖</div><div><p className="font-bold">LED 키트 세트</p></div></div>
    </div>
  </div>
);

const FooterNotes: React.FC = () => (
  <div className="bg-[#121826] rounded-3xl p-6 text-gray-400">
    <div className="flex flex-wrap gap-4 mb-6 border-b border-gray-800 pb-4">
      <a href="/cs" className="text-xs hover:text-white">고객센터</a>
      <a href="/terms" className="text-xs hover:text-white">이용약관</a>
      <a href="/privacy" className="text-xs hover:text-white">개인정보처리방침</a>
    </div>
    <h4 className="text-white font-bold mb-4 text-sm">꼭 읽어주세요!</h4>
    <ul className="text-[11px] space-y-2 list-disc pl-4 mb-6">
      <li>이미 사용된 슬롯 티켓은 복구가 불가능합니다.</li>
      <li>보상은 명시된 수량만큼만 지급되며 양도가 불가능합니다.</li>
    </ul>
    <div className="flex items-center justify-between mt-8 border-t border-gray-800 pt-6">
      <div className="flex gap-4"><Instagram className="w-5 h-5" /><Twitter className="w-5 h-5" /><Facebook className="w-5 h-5" /></div>
      <p className="text-[10px]">© 2024 META HOUSE Co., Ltd.</p>
    </div>
  </div>
);

// --- Main App Component ---

const App: React.FC = () => {
  const [tickets, setTickets] = useState(10);
  const [activeTab, setActiveTab] = useState<'play' | 'history'>('play');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handlePlay = useCallback(async (result: SlotItem[]) => {
    if (tickets <= 0) return;
    setTickets(prev => prev - 1);
    setIsSpinning(true);

    setTimeout(async () => {
      const rewardMap: Record<string, string> = {
        '7-7-7': 'Ultra Rare Box',
        '🤖-🤖-🤖': 'LED Kit x2',
        '🎁-🎁-🎁': 'Goods Set',
        '🍒-🍒-🍒': 'Bonus Ticket x1',
        'default': '100 Point Lucky Prize'
      };

      const key = result.join('-');
      const rewardName = rewardMap[key] || rewardMap['default'];

      const newItem: HistoryItem = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date(),
        result,
        reward: rewardName
      };

      setHistory(prev => [newItem, ...prev]);
      setIsSpinning(false);

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        const response = await ai.models.generateContent({
          model: 'gemini-3-flash-preview',
          contents: `The user just played a slot machine and got ${result.join(', ')}. They won: ${rewardName}. Give a short, energetic 1-sentence reaction as a casino dealer character.`
        });
        setAiInsight(response.text || null);
      } catch (err) {
        console.error("Gemini failed", err);
      }
    }, 2000);
  }, [tickets]);

  return (
    <div className="min-h-screen pb-20 bg-gray-50 max-w-lg mx-auto shadow-xl relative overflow-x-hidden font-sans">
      <Header />
      <Hero />
      <main className="px-4 -mt-16 relative z-10">
        <SlotCard tickets={tickets} onPlay={handlePlay} activeTab={activeTab} onTabChange={setActiveTab} history={history} isSpinning={isSpinning} />
        {aiInsight && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-800 text-sm animate-pulse">
            <span className="font-bold">Dealer: </span>"{aiInsight}"
          </div>
        )}
        <InfoSections />
        <RewardTable />
        <FooterNotes />
      </main>
    </div>
  );
};

export default App;
