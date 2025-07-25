import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { IProject } from "../lib/types";

const { persistAtom } = recoilPersist();

export const isDarkAtom = atom<boolean>({
    key: "isDark",
    default: true,
    effects_UNSTABLE: [persistAtom],
});

export const projectState = atom<IProject[]>({
    key: "projectState",
    default: [],
});
