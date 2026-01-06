import Link from "next/link";
import Card from "@/components/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import ParallaxImage from "@/components/animations/ParallaxImage";

export default function ServicesPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[400px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-60"
                    style={{ backgroundImage: "url('/assets/hero_services_building.png')" }}
                ></div>

                <StaggerContainer className="container-custom relative z-20 text-center">
                    <StaggerItem>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Our Services</h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Comprehensive Tech Solutions for Your Business</p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn className="text-center mb-16">
                        <h2>Enterprise-Focused Services</h2>
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            ABI Systems provides a comprehensive range of services aimed at improving operational efficiency and business intelligence across retail, wholesale, and distribution environments.
                        </p>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                        {/* 1. Software Development */}
                        <StaggerItem>
                            <Card title="Software Development" icon={<i className="fa-solid fa-code"></i>} glowColor="blue">
                                <p className="text-slate-600 mb-4">
                                    We build custom enterprise software solutions addressing critical functions like billing, inventory control, and operational management. Scalable, reliable, and high-performance systems for complex operations.
                                </p>
                            </Card>
                        </StaggerItem>

                        {/* 2. Supply Chain & Distribution */}
                        <StaggerItem>
                            <Card title="Supply Chain Solutions" icon={<i className="fa-solid fa-truck-fast"></i>} glowColor="blue">
                                <p className="text-slate-600 mb-4">
                                    Optimize operations from warehouse to customer. Real-time inventory visibility, delivery tracking, and workflow coordination to minimize errors and ensure smooth end-to-end distribution.
                                </p>
                            </Card>
                        </StaggerItem>

                        {/* 3. AI-Powered Technology */}
                        <StaggerItem>
                            <Card title="AI-Powered Solutions" icon={<i className="fa-solid fa-brain"></i>} glowColor="blue">
                                <p className="text-slate-600 mb-4">
                                    Automate routine processes and gain real-time operational insights. Our AI systems support smarter decision-making, helping organizations reduce costs and improve efficiency.
                                </p>
                            </Card>
                        </StaggerItem>

                        {/* 4. Business Oversight */}
                        <StaggerItem>
                            <Card title="Business Oversight" icon={<i className="fa-solid fa-tower-observation"></i>} glowColor="blue">
                                <p className="text-slate-600 mb-4">
                                    Complete visibility across business operations. Track performance indicators, automate reporting, and enable accountability with actionable insights for leadership.
                                </p>
                            </Card>
                        </StaggerItem>

                        {/* 5. Comprehensive Reporting */}
                        <StaggerItem>
                            <Card title="Comprehensive Reports" icon={<i className="fa-solid fa-chart-line"></i>} glowColor="blue">
                                <p className="text-slate-600 mb-4">
                                    Consolidate data into unified dashboards. Automate report generation and visualize performance metrics to maintain accuracy and efficiency across all departments.
                                </p>
                            </Card>
                        </StaggerItem>

                        {/* 6. Payment Management */}
                        <StaggerItem>
                            <Card title="Payment Management" icon={<i className="fa-solid fa-credit-card"></i>} glowColor="blue">
                                <p className="text-slate-600 mb-4">
                                    Securely record and organize payment details. Track customer dues, manage receipts, and maintain accurate financial records for transparent and efficient operations.
                                </p>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Detailed Capabilities */}
            <section className="section bg-slate-50">
                <div className="container-custom space-y-24">

                    {/* Native App Development */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right">
                            <ParallaxImage
                                src="/assets/feature_app_dev.png"
                                alt="Native App Development"
                                className="rounded-2xl shadow-xl h-[400px]"
                            />
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <h3 className="text-3xl font-bold mb-6 text-slate-900">Native App Development</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Crafting high-performance, intuitive mobile applications tailored to your business needs. We ensure seamless user experiences on iOS and Android, leveraging platform-specific features for optimal engagement and efficiency.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Superior performance and responsiveness</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Access to device-specific features and APIs</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Enhanced security protocols and data protection</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Rich, interactive user interfaces</span>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>

                    {/* Scalable Web Platforms */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right" className="order-2 md:order-1">
                            <h3 className="text-3xl font-bold mb-6 text-slate-900">Scalable Web Platforms</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Building robust, future-proof web applications designed to grow with your business. Our solutions are secure, highly performant, and provide a flexible foundation for your digital operations, ensuring reliability at any scale.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">High availability and reliability</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Flexible architecture for future expansion</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Optimized for performance and speed</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Cross-device compatibility and accessibility</span>
                                </li>
                            </ul>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2} className="order-1 md:order-2">
                            <ParallaxImage
                                src="/assets/feature_web_platform.png"
                                alt="Scalable Web Platforms"
                                className="rounded-2xl shadow-xl h-[400px]"
                            />
                        </FadeIn>
                    </div>

                    {/* Intelligent AI Integration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right">
                            <ParallaxImage
                                src="/assets/feature_ai.png"
                                alt="Intelligent AI Integration"
                                className="rounded-2xl shadow-xl h-[400px]"
                            />
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <h3 className="text-3xl font-bold mb-6 text-slate-900">Intelligent AI Integration</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Transforming business processes with smart AI solutions. We integrate artificial intelligence to automate tasks, derive actionable insights from data, and create personalized customer experiences, giving you a competitive edge.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Automated data analysis and decision making</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Personalized customer engagement tools</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Predictive analytics for strategic planning</span>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <i className="fa-solid fa-check text-blue-600 mt-1"></i>
                                    <span className="text-slate-700">Enhanced operational efficiency and cost savings</span>
                                </li>
                            </ul>
                        </FadeIn>
                    </div>

                </div>
            </section>

            <section className="section text-center bg-slate-50">
                <div className="container-custom max-w-2xl">
                    <FadeIn direction="up">
                        <h2>Have a Project in Mind?</h2>
                        <p className="text-slate-500 mb-8">Let's discuss how we can bring your ideas to life.</p>
                        <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
