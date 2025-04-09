import React from "react";
import FooterBox from "./FooterBox";

function Footer() {
  return (
    <footer>
      <div className="block border-t-1 border-gray-200 p-10 sm:flex">
        <FooterBox
          title="매장안내"
          content={["대한민국", "일본", "중국", "전시"]}
        />
        <FooterBox
          title="고객서비스"
          content={[
            "비회원 주문 조회",
            "교환 및 반품",
            "자주 묻는 질문",
            "1:1 문의",
            "기업 구매",
          ]}
        />
        <FooterBox
          title="법적 고지"
          content={["공지사항", "이용 약관", "개인정보처리방침"]}
        />
        <FooterBox
          title="소셜미디어"
          content={["인스타그램", "카카오톡", "페이스북", "웨이보"]}
        />
      </div>
      <div className="flex justify-between items-center py-10 px-10 border-t-1 border-gray-200 gap-20">
        <div className="text-[10px] w-1/2">
          주)아이아이컴바인드 | 사업자등록번호: 119-86-38589 | 대표자: 김한국 |
          서울특별시 마포구 어울마당로5길 41 | 대표번호: 1644-1246 |
          이메일:cs@tamburins.com | 개인정보 보호 책임자: 정태호 | 호스팅 서비스
          사업자: Aws | 통신판매업신고: 제 2014-서울마포-1050 호
        </div>
        <div className="text-[10px] w-1/2 ">
          고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을
          체결하여 보장해드리고 있습니다.
        </div>
      </div>
      <div className="border-t-1 border-gray-200 px-10 py-3">
        <p className="text-sm m-0">© Tamburins</p>
      </div>
    </footer>
  );
}

export default Footer;
