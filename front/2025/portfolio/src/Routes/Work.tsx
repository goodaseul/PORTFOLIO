import { Link } from "react-router-dom";
import { projectSelector } from "../lib/api";
import { useRecoilValueLoadable } from "recoil";

const Work = () => {
    const productsLoadable = useRecoilValueLoadable(projectSelector);

    if (productsLoadable.state === "loading") return <div>Loading...</div>;
    if (productsLoadable.state === "hasError") return <div>Error loading products</div>;

    return (
        <>
            <div>
                <div>
                    <h1>WEB SITE.</h1>
                    <Link to="https://www.notion.so/655ebd86a2e540a698d2595cb39e81d5"></Link>
                </div>
                <div>
                    {productsLoadable.contents?.map((project) => (
                        <ul key={project.id}>
                            <li>{project.name}</li>
                            <li>{project?.multilingual}</li>
                            <li>{project.contribution}</li>
                            <li>{project.way}</li>
                            <li>
                                <Link to={project?.link} />
                            </li>
                            <li>
                                <img src={`./images/logos/${project?.logo}`} alt={`${project.name} 이미지`} />
                            </li>
                            <li>{project.date}</li>
                            <li>{project?.filter}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Work;
