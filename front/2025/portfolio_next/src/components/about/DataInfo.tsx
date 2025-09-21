import { fetchInfoData } from "@/lib/apiList";
import { InfoItem } from "@/types/apiType";
const DataInfo = async () => {
    const infos = await fetchInfoData();

    const renderInfo = (text: string | number) => {
        const str = String(text).trim();

        if (str.startsWith("http://") || str.startsWith("https://")) {
            return (
                <a href={str} target="_blank" className="underline">
                    {str}
                </a>
            );
        }

        if (str.startsWith("010")) {
            return (
                <a href={`tel:${str}`} className="underline">
                    {str}
                </a>
            );
        }

        if (str.includes("@")) {
            return (
                <a href={`mailto:${str}`} className="underline ">
                    {str}
                </a>
            );
        }

        return str;
    };

    return (
        <div>
            <h2 className="mb-5 text-base font-bold sm:text-2xl lg:text-3xl">Info</h2>
            <div className="p-5 pt-0 border-separate border-t-[1px] border-b-[1px] border-color-gray-300">
                {infos.map((item, index) => (
                    <dl key={index} className="flex flex-wrap justify-between pt-5 mt-5 text-xs align-middle sm:text-lg lg:text-xl break-keep break-word first:mt-0">
                        <dt className="w-[50%] lg:w-[25%]">{item.title}</dt>
                        <dd className="w-[50%] break-all lg:w-[75%]">{renderInfo(item.info)}</dd>
                    </dl>
                ))}
            </div>
        </div>
    );
};

export default DataInfo;
