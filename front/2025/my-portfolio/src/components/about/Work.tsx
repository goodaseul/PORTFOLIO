import { fetchWorkData } from "@/lib/apiList";

const Experience = async () => {
    const works = await fetchWorkData();

    return (
        <div>
            <h2 className="mb-5 text-base font-bold sm:text-2xl lg:text-3xl">Work</h2>
            <div className="p-5 pt-0 border-separate border-t-[1px] border-b-[1px] border-color-gray-300 ">
                {works.map((item, index) => (
                    <dl key={index} className="flex flex-wrap justify-between pt-5 mt-5 text-xs align-middle sm:text-lg lg:text-xl break-keep break-word first:mt-0">
                        <dt className="w-[50%] lg:w-[25%]">{item.title}</dt>
                        <dd className="w-[50%] lg:w-[25%]">{item.date}</dd>
                        <dd className="w-[50%] lg:w-[25%] max-lg:mt-5">{item.located}</dd>
                        <dd className="w-[50%] lg:w-[25%] max-lg:mt-5">{item.description}</dd>
                    </dl>
                ))}
            </div>
        </div>
    );
};

export default Experience;
