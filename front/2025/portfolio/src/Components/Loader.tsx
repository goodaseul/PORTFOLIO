import { LoaderPart, LoadingText, textVariants } from "../styles/LoaderStyles";
export const Loader = () => {
    const text = "Loading...".split("");

    return (
        <LoaderPart>
            {text.map((char, i) => (
                <LoadingText key={i} custom={i} variants={textVariants} initial="hidden" animate="visible">
                    {char}
                </LoadingText>
            ))}
        </LoaderPart>
    );
};
