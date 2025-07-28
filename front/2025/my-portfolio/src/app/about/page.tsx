import { estonia } from "@/store/store";
import Link from "next/link";

const About = () => {
    return (
        <div className="relative w-full bg-gray-100 dark:bg-black">
            <div className="flex items-center justify-end min-h-screen inner">
                <div className="text-right">
                    <h2 className={`${estonia.className}  text-6xl`}>About Me</h2>
                    <p className="mt-10 text-[1.4rem] leading-10 desc">
                        저는 2020년 08월에 웹퍼블리셔로 취직하여, 다양한 웹사이트를 제작하였습니다. <br />
                        저의 프로젝트가 궁금하시다면,&nbsp;
                        <Link target="_blank" className="pl-1 pr-1 font-bold bg-white text-point" href="https://portfolio-publisher.vercel.app/">
                            퍼블리싱 포트폴리오
                        </Link>
                        &nbsp;&&nbsp;
                        <Link target="_blank" className="pl-1 pr-1 font-bold bg-white text-point" href="https://portfolio-goodaseuls-projects.vercel.app/">
                            리액트 포트폴리오
                        </Link>
                        &nbsp; 링크를 방문해주세요.
                    </p>
                    <p className="mt-10 text-[1.4rem] leading-10 desc">
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
