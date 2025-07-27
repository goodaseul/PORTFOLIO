const Bio = ({ styles }: any) => {
    return (
        <div className={`${styles.filter} intro inner sticky left-0 top-0 flex items-center text-center z-[2] min-h-[100vh]`}>
            <div className="w-full mx-auto 2xl:w-4/5">
                {/* <h1 className="mb-20 text-2xl md:text-3xl lg:text-5xl text-point">Hello, I am Ahram Kim 👋</h1> */}

                <div className="text-gray-700 break-keep introduction dark:text-gray-300 text-1xl 2xl:text-2xl">
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">안녕하세요! 한 사람 몫은 꼭 해내는 웹 프론트엔드 정다슬입니다.</p>
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">저는 긍정적인 방향으로 프로젝트를 완수하는 것을 좋아하며, 맡은 일은 끝까지 책임지고 최선을 다합니다.</p>
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">프로젝트를 진행할 때 단순히 주어진 대로만 만드는 것이 아니라,</p>
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">더 좋은 사용성과 실용적인 코드를 고민하고 제안하며 퍼블리싱합니다.</p>
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">웹 표준과 웹 접근성을 준수하고, 깔끔하면서도 실용적인 스타일시트를 지향합니다.</p>
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">동료들과의 커뮤니케이션과 협업을 중요하게 생각하며, 의견을 제시하고 또 수용하면서 함께 성장하는 과정을 즐깁니다.</p>
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">새로운 것을 배우는 데 두려움이 없고, 꼼꼼하게 정리하며, 활발한 대화를 통해 화합과 융화를 만들어갑니다.</p>
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">긍정적인 마음, 시간 약속, 끊임없는 성장을 삶의 중요한 가치로 두고 있습니다.</p>
                    <p className="mt-5 leading-relaxed break-words whitespace-pre-line">앞으로도 더 넓은 시야로 고민하고 배우며, 어제보다 성장한 나를 만들어 가겠습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default Bio;
