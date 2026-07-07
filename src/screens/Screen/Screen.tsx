import { XIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const featureCards = [
  {
    title: "1분 피부 고민 체크",
    description: ["나의 피부 타입과 고민을 정밀하게 분석", "합니다."],
    icon: "/background.svg",
    alt: "Background",
  },
  {
    title: "입문자용 제품만 추천",
    description: ["복잡한 단계 없이 꼭 필요한 필수템만 골", "라드려요."],
    icon: "/background-border.svg",
    alt: "Background border",
  },
];

const miniCards = [
  {
    title: "매장 테스트",
    description: ["무신사 뷰티 스토어에서 바", "로 확인"],
    icon: "/margin.svg",
    alt: "Margin",
  },
  {
    title: "샘플 후 재구매",
    description: ["샘플 써보고 앱에서 편하게", "결제"],
    icon: "/margin-1.svg",
    alt: "Margin",
  },
];

export const Screen = (): JSX.Element => {
  return (
    <main className="min-h-screen w-full bg-[linear-gradient(0deg,rgba(248,249,255,1)_0%,rgba(248,249,255,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[390px] justify-center px-0">
        <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-white shadow-[0px_25px_50px_-12px_#00000040]">
          <div className="pointer-events-none absolute inset-0 opacity-20 bg-[url(/image.png)] bg-cover bg-[50%_50%]" />
          <header className="relative z-10 flex items-center justify-between px-5 py-7 bg-[#ffffffcc] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
            <h1 className="flex items-center [font-family:'Manrope',Helvetica] text-xl font-normal leading-7 tracking-[-1.00px] text-transparent">
              <span className="font-extrabold tracking-[-0.20px] text-[#0b1c30]">
                MUSINSA{" "}
              </span>
              <span className="tracking-[-0.20px] text-[#7e7576]">
                MEN&apos;S BEAUTY
              </span>
            </h1>
            <Button
              variant="ghost"
              size="icon"
              className="h-auto w-auto p-0 text-[#0b1c30] hover:bg-transparent hover:text-[#0b1c30]"
              aria-label="닫기"
            >
              <XIcon className="h-7 w-7" strokeWidth={2.25} />
            </Button>
          </header>
          <div className="relative z-10 flex flex-1 flex-col px-5 pt-4 pb-8">
            <section className="flex flex-col gap-8 pb-8">
              <div className="flex flex-col gap-2">
                <div className="[font-family:'WenQuanYi_Zen_Hei-Medium',Helvetica] text-[32px] font-medium leading-10 tracking-[-0.64px] text-[#0b1c30]">
                  어떤 제품을 써야 할지
                  <br />
                  모르겠다면?
                </div>
                <p className="[font-family:'WenQuanYi_Zen_Hei-Medium',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#4c4546]">
                  1분만 투자하면 지금 필요한 제품만 추천해드려
                  <br />
                  요.
                </p>
              </div>
              <Card className="overflow-hidden rounded-2xl border-0 bg-[#e5eeff] shadow-[0px_1px_2px_#0000000d]">
                <CardContent className="relative h-[340px] p-0">
                  <div className="h-full w-full bg-[url(/ab6axuaw5qws79bxmipqaahxbyzg6hjrgzfrwugzzlgmwqty4loyacqtqba5uzks.png)] bg-cover bg-[50%_50%]" />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(203,219,245,0.2)_0%,rgba(203,219,245,0)_100%)]" />
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a]">
                    <img
                      className="relative h-auto w-auto flex-[0_0_auto]"
                      alt="Container"
                      src="/container.svg"
                    />
                    <span className="[font-family:'Inter',Helvetica] text-xs font-normal leading-4 tracking-[1.20px] text-white">
                      ONLY 1 MIN
                    </span>
                  </div>
                </CardContent>
              </Card>
              <section className="flex flex-col gap-4">
                {featureCards.map((card) => (
                  <Card
                    key={card.title}
                    className="rounded-xl border border-solid border-[#cfc4c5] bg-[#eff4ff] shadow-none"
                  >
                    <CardContent className="flex items-center gap-4 p-4">
                      <img
                        className="h-12 w-12 shrink-0"
                        alt={card.alt}
                        src={card.icon}
                      />
                      <div className="flex flex-col">
                        <h2 className="[font-family:'WenQuanYi_Zen_Hei-Medium',Helvetica] text-base font-medium leading-6 tracking-[0] text-[#0b1c30]">
                          {card.title}
                        </h2>
                        <p className="[font-family:'WenQuanYi_Zen_Hei-Medium',Helvetica] text-sm font-medium leading-5 tracking-[0] text-[#4c4546]">
                          {card.description[0]}
                          <br />
                          {card.description[1]}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="grid grid-cols-2 gap-4">
                  {miniCards.map((card) => (
                    <Card
                      key={card.title}
                      className="rounded-xl border border-solid border-[#cfc4c5] bg-[#eff4ff] shadow-none"
                    >
                      <CardContent className="flex min-h-[112px] flex-col items-center justify-start p-4 text-center">
                        <img
                          className="mb-2 h-auto w-auto flex-[0_0_auto]"
                          alt={card.alt}
                          src={card.icon}
                        />
                        <h3 className="[font-family:'WenQuanYi_Zen_Hei-Medium',Helvetica] text-xs font-medium leading-4 tracking-[0.60px] text-[#0b1c30]">
                          {card.title}
                        </h3>
                        <p className="pt-[2.88px] [font-family:'WenQuanYi_Zen_Hei-Medium',Helvetica] text-[11px] font-medium leading-[13.8px] tracking-[0] text-[#4c4546]">
                          {card.description[0]}
                          <br />
                          {card.description[1]}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </section>
            <footer className="mt-auto pt-3">
              <div className="bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_50%,rgba(255,255,255,0)_100%)] pt-6 pb-5">
                <div className="flex flex-col gap-3">
                  <Button className="h-auto w-full rounded-xl bg-black px-6 py-4 [font-family:'Abel',Helvetica] text-base font-normal leading-6 text-white shadow-[0px_8px_10px_-6px_#0000001a,0px_20px_25px_-5px_#0000001a] hover:bg-black">
                    <span>내 피부 타입 찾기</span>
                    <img
                      className="ml-2 h-3 w-3"
                      alt="Container"
                      src="/container-1.svg"
                    />
                  </Button>
                  <button
                    type="button"
                    className="flex h-10 w-full items-center justify-center px-0 pt-[11.5px] pb-[12.5px] [font-family:'WenQuanYi_Zen_Hei-Medium',Helvetica] text-xs font-medium leading-4 tracking-[0.60px] text-[#4c4546]"
                  >
                    설문 없이 제품 둘러보기
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
};
