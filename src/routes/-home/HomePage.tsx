import { AboutSection } from "#/routes/-home/AboutSection";
import { ContactSection } from "#/routes/-home/ContactSection";
import { ExperienceSection } from "#/routes/-home/ExperienceSection";
import { HeroSection } from "#/routes/-home/HeroSection";
import { Nav } from "#/routes/-home/Nav";
import { SiteFooter } from "#/routes/-home/SiteFooter";
import { WorkSection } from "#/routes/-home/WorkSection";
import { ClickBurstLayer } from "#/routes/-ui/ClickBurstLayer";

export function HomePage() {
	return (
		<div className="home-root">
			<Nav />
			<div className="page overflow-x-hidden" id="top">
				<ClickBurstLayer />
				<div className="viewport-fill">
					<HeroSection />
				</div>
				<WorkSection />
				<ExperienceSection />
				<AboutSection />
				<ContactSection />
				<SiteFooter />
			</div>
		</div>
	);
}
