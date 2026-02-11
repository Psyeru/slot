
import React from 'react';
import { Home, Search, Gift, Share2, ChevronLeft } from 'lucide-react';

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
        <a href="/search" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Search className="w-5 h-5 text-gray-600" />
        </a>
        <a href="/rewards" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Gift className="w-5 h-5 text-gray-600" />
        </a>
        <a href="/profile" className="w-8 h-8 rounded-full bg-orange-200 flex items-center justify-center overflow-hidden border border-gray-100">
          <img src="https://picsum.photos/seed/user/100/100" alt="avatar" className="w-full h-full object-cover" />
        </a>
      </div>
    </header>
  );
};

export default Header;
