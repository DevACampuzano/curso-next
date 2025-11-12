import { TopMenu } from '@/components/ui/top-menu/index';

export default function ShopLayout({ children }: { children: React.ReactNode; }) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            {children}
        </main>
    );
}