import { getMenu } from "@/lib/apiList";
export async function getInitialData() {
    // 페이지 마다 말고 동시에 여러 API 호출
    const [menus] = await Promise.all([getMenu()]);
    return { menus };
}
