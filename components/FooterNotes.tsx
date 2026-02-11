
import React from 'react';
import { HelpCircle, FileText, ShieldCheck, Instagram, Twitter, Facebook } from 'lucide-react';

const FooterNotes: React.FC = () => {
  return (
    <div className="bg-[#121826] rounded-3xl p-6 text-gray-400">
      <div className="flex flex-wrap gap-4 mb-6 border-b border-gray-800 pb-4">
        <a href="/cs" className="flex items-center gap-1 text-xs hover:text-white transition-colors">
          <HelpCircle className="w-3 h-3" /> 고객센터
        </a>
        <a href="/terms" className="flex items-center gap-1 text-xs hover:text-white transition-colors">
          <FileText className="w-3 h-3" /> 이용약관
        </a>
        <a href="/privacy" className="flex items-center gap-1 text-xs hover:text-white transition-colors">
          <ShieldCheck className="w-3 h-3" /> 개인정보처리방침
        </a>
      </div>

      <h4 className="text-white font-bold mb-4 text-sm">꼭 읽어주세요! (주의사항)</h4>
      <ul className="text-[11px] leading-relaxed space-y-2 list-disc pl-4 mb-6">
        <li>모든 보상은 당사 사정에 의해 예고 없이 변경될 수 있습니다.</li>
        <li>이미 사용된 슬롯 티켓은 어떠한 경우에도 복구가 불가능합니다.</li>
        <li>보상은 명시된 수량만큼만 지급되며 타인에게 양도가 불가능합니다.</li>
        <li>부적절한 방법으로 참여 시 당첨 취소 및 서비스 이용이 제한됩니다.</li>
        <li>이벤트 관련 문의는 1:1 고객센터를 이용해 주시기 바랍니다.</li>
      </ul>

      <div className="flex items-center justify-between mt-8 border-t border-gray-800 pt-6">
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        <p className="text-[10px] text-gray-600">© 2024 META HOUSE Co., Ltd.</p>
      </div>
    </div>
  );
};

export default FooterNotes;
