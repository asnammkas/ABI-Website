import Link from "next/link";
import Card from "@/components/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ParallaxImage from "@/components/animations/ParallaxImage";

export default function AboutPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[400px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-60"
                    style={{ backgroundImage: "url('/assets/hero_about.jpg')" }}
                ></div>

                <StaggerContainer className="container-custom relative z-20 text-center">
                    <StaggerItem>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">About ABI Systems</h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Empowering Sri Lankan Retail with AI Innovation</p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        <FadeIn direction="right">
                            <h2>Company Overview</h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                ABI Systems is a software development company specializing in customized digital solutions for the retail and wholesale industry, with a strong focus on enterprise-scale operations. Unlike generic off-the-shelf systems, ABI Systems designs and delivers purpose-built platforms tailored to the operational realities of large and growing organizations. The company differentiates itself through its AI-powered approach, enabling businesses to move beyond basic automation toward intelligent, data-driven decision-making.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                With a deep understanding of enterprise challenges such as operational inefficiencies, fragmented data, and scalability issues, ABI Systems develops solutions that optimize workflows, enhance productivity, and support sustainable growth. Its platforms are designed to give organizations greater visibility, control, and confidence as they navigate digital transformation. ABI Systems positions itself as a long-term technology partner that empowers businesses to lead effectively in the modern digital era.
                            </p>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <ParallaxImage src="/assets/hero_business_meeting_1767539244571.png" alt="Vision" className="rounded-xl shadow-lg" />
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right" className="order-2 md:order-1">
                            <ParallaxImage src="/assets/why_choose_abi.png" alt="Why Choose ABI Systems" className="rounded-xl shadow-lg" />
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2} className="order-1 md:order-2">
                            <h2>Why Choose ABI Systems?</h2>
                            <p className="text-slate-600 leading-relaxed">
                                We go beyond code. We build partnerships. By providing a comprehensive range of enterprise-focused services, we improve operational efficiency and business intelligence across retail, wholesale, and distribution environments. Our solutions are not just tools; they are assets that drive long-term strategic growth.
                            </p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-50">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <h2>Our Core Values</h2>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
                        <StaggerItem>
                            <Card title="Client-Centric" icon={<i className="fa-regular fa-handshake"></i>} className="text-center" glowColor="blue">
                                <p className="text-sm">We prioritize our client's success, building solutions that truly meet their needs.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="Excellence in Craft" icon={<i className="fa-regular fa-gem"></i>} className="text-center" glowColor="blue">
                                <p className="text-sm">We are committed to delivering high-quality, robust, and elegant software.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="Innovation" icon={<i className="fa-solid fa-lightbulb"></i>} className="text-center" glowColor="blue">
                                <p className="text-sm">We embrace new technologies and methodologies to foster continuous learning.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="Continuous Growth" icon={<i className="fa-solid fa-chart-line"></i>} className="text-center" glowColor="blue">
                                <p className="text-sm">We believe in our team's professional development and shared success.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="Integrity" icon={<i className="fa-solid fa-scale-balanced"></i>} className="text-center" glowColor="blue">
                                <p className="text-sm">We operate with honesty and transparency in all our dealings.</p>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <section className="section text-center">
                <div className="container-custom max-w-2xl">
                    <FadeIn direction="up">
                        <h2>Awesomeness begins here. Are you ready?</h2>
                        <Link href="/contact" className="btn btn-primary mt-6">Let's Do It!</Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
