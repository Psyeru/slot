
import React from 'react';
import { ChevronRight } from 'lucide-react';

const InfoSections: React.FC = () => {
  return (
    <div className="space-y-4 mb-8">
      <a href="/guide/slot" className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50 hover:border-blue-200 transition-all group">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
          👻
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 text-sm">슬롯머신 이용 가이드</h4>
          <p className="text-xs text-gray-500">추첨 방식과 확률이 궁금하신가요?</p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
      </a>

      <a href="/events/bonus" className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border-l-4 border-l-blue-500 border-gray-50 hover:bg-blue-50/30 transition-all group">
        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">
          👶
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 text-sm">티켓 추가 증정 이벤트</h4>
          <p className="text-xs text-gray-500">친구 초대 시 슬롯 티켓을 더 드려요!</p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-blue-400" />
      </a>

      <a href="/notice/tickets" className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50 hover:border-orange-200 transition-all group">
        <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center text-2xl text-white">
          💂
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-gray-800 text-sm">중요: 티켓 유효기간 안내</h4>
          <p className="text-xs text-gray-500">보유하신 티켓은 이번 달 말까지 유효합니다.</p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-orange-400" />
      </a>
    </div>
  );
};

export default InfoSections;
