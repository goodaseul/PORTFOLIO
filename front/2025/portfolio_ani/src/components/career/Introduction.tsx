import { useEffect } from "react";

export default function Introduction() {
  const resumeUrl = process.env.NEXT_PUBLIC_GOOGLE_DOCS_RESUME_URL as string;

  // 2025.06.11. 장규호 - 미사용함수 주석처리
  // const handlePortfolioClick = () => {
  //   alert("준비 중입니다!");
  // };

  useEffect(() => {
    console.log("resumeUrl :: ", resumeUrl);
  });

  // 2025.06.11. 장규호 - 특수문자 ' 를 &apos; 로 대체
  return (
    <div className="space-y-4 leading-relaxed text-gray-700 dark:text-gray-300 text-base">
      <p>
        I&apos;m a frontend developer with 3 years of professional experience
        building responsive and user-focused web applications. Currently,
        I&apos;m expanding my skill set into <strong>data analysis</strong>,{" "}
        <strong>Python</strong>, and <strong>AI development</strong>, driven by
        a growing interest in solving real-world problems through data and
        automation.
      </p>
      <p>
        Also working on a full-stack side project using <strong>Next.js</strong>{" "}
        and <strong>Supabase</strong>.
      </p>
    </div>
  );
}
