import Link from "next/link";

const Info = async () => {
    return (
        <div className="inner flex justify-center flex-col items-center min-h-[100vh]">
            <div className=" text-xs font-bold text-center text-gray-900 sm:text-sm dark:text-gray-300 lg:text-lg xl:text-xl 2xl:text-2xl !leading-[2.3]">
                <p>
                    <strong className="text-3xl lg:text-4xl">저는, </strong>
                    2020년 08월에 웹퍼블리셔로 취직하여, <br className="visible md:hidden" />
                    다양한 웹사이트를 제작하였습니다. <br />
                    저의 프로젝트가 궁금하시다면,&nbsp;
                    <br className="visible md:hidden" />
                    <Link target="_blank" className="font-bold border-b border-white text-point" href="https://portfolio-publisher.vercel.app/">
                        퍼블리싱 포트폴리오
                    </Link>
                    &nbsp;&&nbsp;
                    <Link target="_blank" className="font-bold border-b border-white text-point" href="https://portfolio-goodaseuls-projects.vercel.app/">
                        리액트 포트폴리오
                    </Link>
                    <br className="visible md:hidden" />
                    링크를 방문해주세요. <br />
                </p>
                <p>
                    현재 React, Next.js, TypeScript에 관심이 많아, <br className="visible md:hidden" />
                    관련된 프로젝트를 진행하고 있습니다.
                </p>
                <p>
                    저의 프로젝트가 궁금하시다면, <br className="visible md:hidden" />
                    <Link className="font-bold border-b border-white text-point" href="/project">
                        프로젝트 링크 바로가기
                    </Link>
                    링크를 방문해주세요.
                    <br />
                    하단에 저의 정보를 간단히 적었으니 참고부탁드립니다 :&#65289;
                </p>
            </div>
        </div>
    );
};

export default Info;
