import { supabase } from "./supabase";
export async function fetchProjects() {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) {
        throw new Error(error.message);
    }
    return data;
}
