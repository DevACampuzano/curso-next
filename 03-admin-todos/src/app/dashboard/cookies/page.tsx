import { TabBar } from '@/components'
import { cookies } from 'next/headers';

export const metadata = {
    title: "Cookies Page",
    description: "This is the cookies page",
};

export default async function CookiesPage() {
    const cookieStore = await cookies();
    const cookiesTab = cookieStore.get('selectedTab')?.value ?? "1";

    return (
        <div className="grid gird-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col">
                <span className="text-3xl">Tabs</span>
                <TabBar currentTap={+cookiesTab} />
            </div>
        </div>
    );
}