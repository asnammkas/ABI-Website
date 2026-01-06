import Link from "next/link";
import Card from "@/components/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative pt-[80px] min-h-[600px] bg-slate-900 bg-cover bg-center flex items-center text-white"
                style={{ backgroundImage: "url('/assets/hero_business_laptop_1767539174554.png')" }}
            >
                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-900/95 to-slate-900/60 z-10"></div>

                <StaggerContainer className="container-custom relative z-20">
                    <div className="max-w-[800px]">
                        <StaggerItem>
                            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
                                Empowering Sri Lankan Retail <br />with Intelligent AI Solutions
                            </h1>
                        </StaggerItem>
                        <StaggerItem>
                            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                                Discovering best mechanics with cutting-edge technology for growth and efficiency.
                            </p>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="flex gap-4">
                                <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
                                <Link href="#products" className="btn btn-white">Learn More</Link>
                            </div>
                        </StaggerItem>
                    </div>
                </StaggerContainer>
            </section>

            {/* Flagship Products */}
            <section id="products" className="section bg-white text-center">
                <div className="container-custom">
                    <FadeIn className="mb-12">
                        <h2>Our Flagship Products</h2>
                        <p className="text-slate-500">Transforming Retail for the Digital Age</p>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
                        {/* billCalc */}
                        <StaggerItem>
                            <Card glowColor="indigo" className="text-center group hover:-translate-y-1 transition-transform duration-300">
                                <div className="h-[120px] bg-indigo-50 border border-indigo-100 rounded-lg mb-6 flex items-center justify-center p-4">
                                    <img src="/assets/billcalc_logo.png" alt="billCalc Logo" className="h-full w-auto object-contain" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-600 transition-colors">billCalc</h3>
                                <p className="text-slate-600 mb-6 text-sm">The smart way to handle billing with total discounts, bluetooth printing and instant calculations.</p>
                                <Link href="/products/billcalc" className="text-indigo-600 font-semibold hover:underline">Learn More &rarr;</Link>
                            </Card>
                        </StaggerItem>

                        {/* bstEasyPos */}
                        <StaggerItem>
                            <Card glowColor="blue" className="text-center group hover:-translate-y-1 transition-transform duration-300">
                                <div className="h-[120px] bg-blue-50 border border-blue-100 rounded-lg mb-6 flex items-center justify-center p-4">
                                    <img src="/assets/pos_logo.png" alt="bstEasyPos Logo" className="h-full w-auto object-contain" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">bstEasyPos</h3>
                                <p className="text-slate-600 mb-6 text-sm">Complete POS, CRM and stock management for modern retailers to drive sales.</p>
                                <Link href="/products/bsteasypos" className="text-blue-600 font-semibold hover:underline">Learn More &rarr;</Link>
                            </Card>
                        </StaggerItem>

                        {/* BST Barcode */}
                        <StaggerItem>
                            <Card glowColor="rose" className="text-center group hover:-translate-y-1 transition-transform duration-300">
                                <div className="h-[120px] bg-rose-50 border border-rose-100 rounded-lg mb-6 flex items-center justify-center p-4">
                                    <img src="/assets/barcode_logo.png" alt="BST Barcode Logo" className="h-full w-auto object-contain" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-rose-600 transition-colors">BST Barcode Label</h3>
                                <p className="text-slate-600 mb-6 text-sm">Print professional barcode labels directly from your phone to any bluetooth printer.</p>
                                <Link href="/products/bstbarcode" className="text-rose-600 font-semibold hover:underline">Learn More &rarr;</Link>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Our Services */}
            <section className="section bg-slate-50 text-center">
                <div className="container-custom">
                    <div className="container-custom">
                        <FadeIn className="mb-12">
                            <h2>Our Services</h2>
                        </FadeIn>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.2}>
                            <StaggerItem>
                                <Card className="text-left">
                                    <div className="card-icon"><i className="fa-solid fa-mobile-screen"></i></div>
                                    <h4 className="text-lg font-bold mb-2">Native App Development</h4>
                                    <p className="text-sm text-slate-600 mb-4">Crafting high-performance iOS and Android apps tailored for optimal engagement.</p>
                                    <Link href="/services" className="text-blue-600 text-sm font-semibold">Explore &rarr;</Link>
                                </Card>
                            </StaggerItem>
                            <StaggerItem>
                                <Card className="text-left">
                                    <div className="card-icon"><i className="fa-solid fa-layer-group"></i></div>
                                    <h4 className="text-lg font-bold mb-2">Scalable Web Platforms</h4>
                                    <p className="text-sm text-slate-600 mb-4">Robust web applications designed to grow with your business and ensure reliability.</p>
                                    <Link href="/services" className="text-blue-600 text-sm font-semibold">Explore &rarr;</Link>
                                </Card>
                            </StaggerItem>
                            <StaggerItem>
                                <Card className="text-left">
                                    <div className="card-icon"><i className="fa-solid fa-robot"></i></div>
                                    <h4 className="text-lg font-bold mb-2">Intelligent AI Integration</h4>
                                    <p className="text-sm text-slate-600 mb-4">Automating processes and providing actionable insights through smart AI modules.</p>
                                    <Link href="/services" className="text-blue-600 text-sm font-semibold">Explore &rarr;</Link>
                                </Card>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* Why Choose ABI */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <h2>Why Choose ABI Systems?</h2>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <StaggerItem>
                            <div>
                                <i className="fa-solid fa-location-dot text-4xl text-blue-600 mb-4"></i>
                                <h4 className="text-lg font-bold mb-2">Deep Local Insight</h4>
                                <p className="text-sm text-slate-600">We understand the nuances of the Sri Lankan retail market better than anyone.</p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div>
                                <i className="fa-solid fa-sliders text-4xl text-blue-600 mb-4"></i>
                                <h4 className="text-lg font-bold mb-2">Customized For You</h4>
                                <p className="text-sm text-slate-600">Our solutions are adaptable and tailored to fit your specific business needs.</p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div>
                                <i className="fa-solid fa-lightbulb text-4xl text-blue-600 mb-4"></i>
                                <h4 className="text-lg font-bold mb-2">Commitment to Innovation</h4>
                                <p className="text-sm text-slate-600">We are dedicated to bringing the latest AI and tech advancements to you.</p>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* CTA / Innovation */}
            <section className="section bg-slate-50">
                <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <FadeIn direction="right">
                        <h2>Innovating the Future of Retail Technology</h2>
                        <p className="mb-6 text-slate-600">At ABI Systems, innovation is in our DNA. We believe in creating products that not only solve problems but propel your business forward.</p>
                        <ul className="flex flex-col gap-2 mb-8 text-slate-700">
                            <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Advanced AI Algorithms</li>
                            <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Seamless Integration</li>
                            <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Future-Proof Architecture</li>
                        </ul>
                        <Link href="/contact" className="btn btn-primary">Start Your Transformation</Link>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2}>
                        <img src="/assets/innovating_feature.jpg" alt="Innovation" className="rounded-xl shadow-lg w-full" />
                    </FadeIn>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section text-center bg-white">
                <div className="container-custom max-w-2xl mx-auto">
                    <FadeIn direction="up">
                        <h2>Ready to Transform Your Business?</h2>
                        <p className="text-slate-500 mb-8">Join the growing number of businesses leveraging ABI Systems for growth.</p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
                            <Link href="/services" className="btn btn-outline">See All Services</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
