import { getMenu, getAbout } from "@/lib/apiList";

export async function getInitialData() {
  const [menus, abouts] = await Promise.all([getMenu(), getAbout()]);
  return { menus, abouts };
}
