import HomeSection from "@/components/HomeSection";
import ProjectSection from "@/components/ProjectSection";
import MainLayout from "@/components/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <HomeSection />
            <ProjectSection />
        </MainLayout>
    );
}
