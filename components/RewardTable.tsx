
import React from 'react';
import { Target } from 'lucide-react';

const RewardTable: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-3">
        <Target className="w-5 h-5 text-blue-500" />
        <h3 className="font-black text-gray-900">보상 안내</h3>
      </div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="py-3 px-4 font-bold text-gray-600 border-b border-gray-50">슬롯 아이콘</th>
              <th className="py-3 px-4 font-bold text-gray-600 border-b border-gray-50">당첨 보상</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-50">
              <td className="py-5 px-4 text-center">
                <span className="text-3xl font-black text-yellow-500">7</span>
              </td>
              <td className="py-5 px-4">
                <p className="font-bold text-gray-800">울트라 레어 박스</p>
                <p className="text-[10px] text-gray-400">(한정판 굿즈 세트)</p>
              </td>
            </tr>
            <tr className="border-b border-gray-50">
              <td className="py-5 px-4 text-center">
                <span className="text-3xl">🤖</span>
              </td>
              <td className="py-5 px-4">
                <p className="font-bold text-gray-800">LED 키트 2개 세트</p>
              </td>
            </tr>
            <tr>
              <td className="py-5 px-4 text-center">
                <span className="text-3xl">🎁</span>
              </td>
              <td className="py-5 px-4">
                <p className="font-bold text-gray-800">랜덤 굿즈 세트</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RewardTable;
