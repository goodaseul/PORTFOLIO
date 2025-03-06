export const rem = (size: number): string => {
    const base = 16;
    const remValue = size / base;
    const roundedRemValue = Math.floor(remValue * 1000) / 1000 / 2;
    return `${roundedRemValue}rem`;
};
