import { fetchCertiData, fetchWorkData } from "@/lib/apiList";
import Link from "next/link";

export default async function About() {
    const works = await fetchWorkData();
    const certifications = await fetchCertiData();
    console.log(certifications);
    return (
        <div className="w-full bg-gray-100  dark:bg-black min-h-[100vh]">
            <div className="min-h-[100vh]">
                <div className="inner flex justify-center flex-col items-center min-h-[100vh]">
                    <div className="text-sm leading-relaxed text-center text-gray-900 dark:text-gray-300 sm:text-md md:text-lg xl:text-xl 2xl:text-2xl">
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
            </div>

            <div className="inner">
                <div>
                    <h2 className="mb-5 text-lg lg:text-2xl">Experienced</h2>
                    <div className="p-5 pt-0 border-separate border-t-[1px] border-b-[1px] border-color-gray-300">
                        {works.map((item, index) => (
                            <dl key={index} className="flex flex-wrap justify-between pt-5 mt-5 text-sm align-middle md:text-md lg:text-xl break-keep break-word first:mt-0">
                                <dt className="w-[50%] lg:w-[25%]">{item.title}</dt>
                                <dd className="w-[50%] lg:w-[25%]">{item.date}</dd>
                                <dd className="w-[50%] lg:w-[25%] max-lg:mt-5">{item.located}</dd>
                                <dd className="w-[50%] lg:w-[25%] max-lg:mt-5">{item.description}</dd>
                            </dl>
                        ))}
                    </div>
                </div>
                <div className="mt-10">
                    <h2 className="mb-5 text-lg lg:text-2xl">Certifications</h2>
                    <div className="p-5 pt-0 border-separate border-t-[1px] border-b-[1px] border-color-gray-300">
                        {certifications.map((item, index) => (
                            <dl key={index} className="flex flex-wrap justify-between pt-5 mt-5 text-sm align-middle md:text-md lg:text-xl break-keep break-word first:mt-0">
                                <dt className="w-[50%] lg:w-[25%]">{item.title}</dt>
                                <dd className="w-[50%] lg:w-[25%]">{item.date}</dd>
                                <dd className="w-[50%] lg:w-[25%] max-lg:mt-5">{item.located}</dd>
                                <dd className="w-[50%] lg:w-[25%] max-lg:mt-5">{item.description}</dd>
                            </dl>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
