import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isDarkAtom = atom<boolean>({
    key: "isDark",
    default: true,
    effects_UNSTABLE: [persistAtom],
});
