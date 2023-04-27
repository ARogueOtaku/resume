import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Banner from "@/components/logical/Banner";
import SideBar from "@/components/visual/Sidebar";
import Content from "@/components/visual/Content";
import DetailsSection from "@/components/logical/DetailsSection";
import LinksSection from "@/components/logical/LinksSection";
import SkillsSection from "@/components/logical/SkillsSection";
import LanguagesSection from "@/components/logical/LanguagesSection";
import HobbiesSection from "@/components/logical/HobbiesSection";
import ProfileSection from "@/components/logical/ProfileSection";
import EmploymentSection from "@/components/logical/EmploymentSection";
import EducationSection from "@/components/logical/EducationSection";
import ProjectsSection from "@/components/logical/ProjectsSection";
import ToggleButton from "@/components/logical/ToggleButton";
import Download from "@/components/logical/Download";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setShowSidebar(false);
    },
    onSwipedRight: () => {
      setShowSidebar(true);
    },
  });

  return (
    <div
      className="relative m-auto flex min-h-screen w-full max-w-7xl"
      {...swipeHandlers}
    >
      <Banner />
      <ToggleButton toggler={setShowSidebar} toggleState={showSidebar} />
      <Download />
      <SideBar expanded={showSidebar}>
        <DetailsSection />
        <LinksSection />
        <SkillsSection />
        <LanguagesSection />
        <HobbiesSection />
      </SideBar>
      <Content>
        <ProfileSection />
        <EmploymentSection />
        <EducationSection />
        <ProjectsSection />
      </Content>
    </div>
  );
}

export default App;
