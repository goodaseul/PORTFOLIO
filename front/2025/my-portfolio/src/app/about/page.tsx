import { estonia } from "@/store/store";
import Link from "next/link";

const About = () => {
    return (
        <div className="w-full bg-gray-100  dark:bg-black min-h-[100vh]">
            <div className="sm:text-sm min-h-[100vh] relative">
                {/* w-full lg:w-[80%] m-auto  */}
                <div className="inner flex justify-center flex-col text-xs text-gray-900 dark:text-gray-300 min-h-[100vh] lg:text-lg xl:text-xl 2xl:text-2xl">
                    <h2 className={`text-6xl`}>저는,</h2>
                    <p className="m-2 ml-0 mr-0 overflow-hidden leading-relaxed">
                        2020년 08월에 웹퍼블리셔로 취직하여, 다양한 웹사이트를 제작하였습니다. <br />
                        저의 프로젝트가 궁금하시다면,&nbsp;
                        <Link target="_blank" className="pl-1 pr-1 font-bold bg-white text-point" href="https://portfolio-publisher.vercel.app/">
                            퍼블리싱 포트폴리오
                        </Link>
                        &nbsp;&&nbsp;
                        <Link target="_blank" className="pl-1 pr-1 font-bold bg-white text-point" href="https://portfolio-goodaseuls-projects.vercel.app/">
                            리액트 포트폴리오
                        </Link>
                        &nbsp; 링크를 방문해주세요. <br />
                        현재 React, Next.js, TypeScript에 관심이 많아, 관련된 프로젝트를 진행하고 있습니다.
                        <br />
                        저의 Next 프로젝트가 궁금하시다면, &nbsp;
                        <Link className="pl-1 pr-1 font-bold bg-white text-point" href="/project">
                            Next 프로젝트
                        </Link>
                        <br />
                        하단에 저의 정보를 간단히 적었으니 참고부탁드립니다 :)
                    </p>
                </div>
                <div className="w-[50%] absolute right-0 bottom-0">
                    <img src="./images/common/about.jpg" className="w-[80%] ml-auto" alt="" />
                </div>
            </div>

            <div className="inner">
                <div className="p-5 border-separate border-t-[1px] border-b-[1px] border-color-gray-300">
                    <h2 className="text-2xl">Experienced</h2>
                    <dl className="flex flex-wrap justify-between mt-5 text-xl align-middle">
                        <dt>원스인터렉티브</dt>
                        <dd>2020-2025</dd>
                        <dd>신사-구디(이사)</dd>
                        <dd>웹 퍼블리셔로 대리로 근무함</dd>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default About;
