import { selector } from "recoil";
import { supabase } from "./supabase";
import { IProject } from "./types";

export const projectSelector = selector<IProject[]>({
    key: "projectSelector",
    get: async () => {
        const { data, error } = await supabase.from("projects").select("*").order("id", { ascending: false });
        if (error) throw error;
        return data || [];
    },
});
