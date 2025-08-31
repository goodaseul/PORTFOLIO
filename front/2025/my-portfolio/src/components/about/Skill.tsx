import { fetchSkillData } from "@/lib/apiList";

const Skill = async () => {
    const skills = await fetchSkillData();

    return (
        <div className="mt-20">
            <h2 className="mb-5 text-base font-bold sm:text-2xl lg:text-3xl">Skill</h2>
            <div className="flex flex-wrap justify-between p-5 pt-0 border-separate border-t-[1px] border-b-[1px] border-color-gray-300">
                {skills.map((item, index) => (
                    <p key={index} className="p-10 pl-0 pr-0 m-5 ml-0 mr-0 flex justify-center items-center bg-[rgba(255,255,255,.2)] rounded-md w-[49%] lg:w-[24%] text-xs align-middle sm:text-lg lg:text-xl">
                        {item.title}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Skill;
