import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <div className="h-screen">
            <div>Homepage</div>
            <UserButton afterSignOutUrl="/" />
        </div>
    );
}
