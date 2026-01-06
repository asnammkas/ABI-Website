import Link from "next/link";
import Card from "@/components/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function BstEasyPosPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[500px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-50"
                    style={{ backgroundImage: "url('/assets/hero_pos.png')" }}
                ></div>

                <StaggerContainer className="container-custom relative z-20 text-center">
                    <StaggerItem>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">bstEasyPos: Enterprise POS</h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            An enterprise-grade point-of-sale system built for scalability, operational control, and long-term value.
                        </p>
                    </StaggerItem>
                    <StaggerItem>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
                            <Link href="#features" className="btn btn-white">View Features</Link>
                        </div>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            <section id="features" className="section bg-white">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <h2>Core Modules of bstEasyPos</h2>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-6" staggerDelay={0.1}>
                        <StaggerItem>
                            <Card title="Scalability" icon={<i className="fa-solid fa-arrow-up-right-dots"></i>} className="text-center">
                                <p className="text-sm">Built to grow with your business, from single stores to large retail chains.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="Inventory Control" icon={<i className="fa-solid fa-boxes-stacked"></i>} className="text-center">
                                <p className="text-sm">Comprehensive item management, supplier handling, and purchasing workflows.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="Customer Dues" icon={<i className="fa-solid fa-file-invoice-dollar"></i>} className="text-center">
                                <p className="text-sm">Track customer credit and payment history securely within the platform.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="One-Time Payment" icon={<i className="fa-solid fa-sack-dollar"></i>} className="text-center">
                                <p className="text-sm">No recurring subscription fees. Complete ownership for long-term value.</p>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <section className="section bg-slate-50">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <h2>Features & Benefits that Drive Growth</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <FadeIn direction="right">
                            <h3 className="text-blue-600 mb-2 text-lg">Stock Rate Calculation</h3>
                            <p className="text-slate-600 mb-6">Automatically calculate average costs and optimal selling prices based on stock history.</p>

                            <h3 className="text-blue-600 mb-2 text-lg">Comprehensive Reporting</h3>
                            <p className="text-slate-600 mb-6">Gain deep insights into sales performance, bestseller items, and peak hours.</p>

                            <h3 className="text-blue-600 mb-2 text-lg">Mobile Optimization</h3>
                            <p className="text-slate-600">Fully responsive interface that works perfectly on tablets and mobile devices.</p>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <h3 className="text-blue-600 mb-2 text-lg">User-Friendly Interface</h3>
                            <p className="text-slate-600 mb-6">Minimal training required. Staff can start selling in minutes.</p>

                            <h3 className="text-blue-600 mb-2 text-lg">Offline Capability</h3>
                            <p className="text-slate-600 mb-6">Keep selling even when the internet goes down. Data syncs automatically.</p>

                            <h3 className="text-blue-600 mb-2 text-lg">Secure & Reliable</h3>
                            <p className="text-slate-600">Enterprise-grade security to protect your sensitive business data.</p>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* How to Use Steps */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <h2>Get Started in 3 Easy Steps</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right" className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 order-2 md:order-1">
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img
                                    src="/assets/steps_pos.jpg"
                                    alt="EasyPOS Usage"
                                    className="w-full h-full object-cover object-top transform scale-105"
                                    style={{ clipPath: "inset(0 0 20px 0)" }}
                                />
                            </div>
                        </FadeIn>
                        <StaggerContainer className="space-y-8 order-1 md:order-2 text-left" staggerDelay={0.2}>
                            <StaggerItem>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 min-w-[3rem] bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Setup Inventory</h4>
                                        <p className="text-sm text-slate-600">Add your items, set prices, and organize your stock.</p>
                                    </div>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 min-w-[3rem] bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Start Selling</h4>
                                        <p className="text-sm text-slate-600">Use the POS interface to bill customers quickly.</p>
                                    </div>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 min-w-[3rem] bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Track Growth</h4>
                                        <p className="text-sm text-slate-600">Monitor reports and optimize your sales strategy.</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* App in Action */}
            <section className="section bg-slate-50 text-center">
                <div className="container-custom">
                    <FadeIn className="mb-12">
                        <h2>See EasyPOS in Action</h2>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.2}>
                        <StaggerItem>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[3/4] bg-slate-100">
                                <img src="/assets/pos_mockup_1.png" alt="Select Item" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[3/4] bg-slate-100">
                                <img src="/assets/pos_mockup_2.png" alt="Billing Calculator" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[3/4] bg-slate-100">
                                <img src="/assets/pos_mockup_3.png" alt="Sales Report" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="section bg-white">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <h2>Flexible Plans for Every Stage</h2>
                        <p className="text-slate-500">From free trials to enterprise-grade solutions.</p>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" staggerDelay={0.2}>
                        {/* Trial Plan */}
                        <StaggerItem className="h-full">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full">
                                <h3 className="text-xl font-bold mb-2">Trial Plan</h3>
                                <p className="text-slate-500 text-xs mb-4">Free for new users</p>
                                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-green-500 mt-1 text-xs"></i> All Elite features included</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-clock text-orange-500 mt-1 text-xs"></i> Limited to 5 days</li>
                                </ul>
                                <Link href="/contact" className="btn btn-sm btn-outline w-full justify-center mt-auto">Start Trial</Link>
                            </div>
                        </StaggerItem>

                        {/* Free Tier */}
                        <StaggerItem className="h-full">
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col h-full">
                                <h3 className="text-xl font-bold mb-2">Free Tier</h3>
                                <p className="text-slate-500 text-xs mb-4">Forever free basics</p>
                                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-green-500 mt-1 text-xs"></i> All Pro features included</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-hand text-orange-500 mt-1 text-xs"></i> Limited to 10 bills/day</li>
                                </ul>
                                <Link href="/contact" className="btn btn-sm btn-outline w-full justify-center mt-auto">Get Free</Link>
                            </div>
                        </StaggerItem>

                        {/* Pro Plan */}
                        <StaggerItem className="h-full">
                            <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-lg relative flex flex-col h-full">
                                <div className="absolute top-0 right-0 bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg">RECOMMENDED</div>
                                <h3 className="text-xl font-bold mb-2 text-blue-900">Pro Plan</h3>
                                <p className="text-slate-500 text-xs mb-4">Smart Management</p>
                                <ul className="space-y-2 mb-6 text-sm text-slate-600">
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-blue-500 mt-1 text-xs"></i> Advanced calculator & sales calc</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-blue-500 mt-1 text-xs"></i> Item management & Fast search</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-blue-500 mt-1 text-xs"></i> Unlisted/One-time items support</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-blue-500 mt-1 text-xs"></i> Full invoices & Credit sales</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-blue-500 mt-1 text-xs"></i> Batch sales FIFO/LIFO</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-blue-500 mt-1 text-xs"></i> Stock adjustment & reports</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-blue-500 mt-1 text-xs"></i> Daily/Monthly/Yearly summaries</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-blue-500 mt-1 text-xs"></i> WhatsApp/SMS sharing</li>
                                </ul>
                                <Link href="/contact" className="btn btn-sm btn-primary w-full justify-center mt-auto">Choose Pro</Link>
                            </div>
                        </StaggerItem>

                        {/* Elite Plan */}
                        <StaggerItem className="h-full">
                            <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-900 shadow-lg flex flex-col h-full">
                                <h3 className="text-xl font-bold mb-2 text-white">Elite Plan</h3>
                                <p className="text-slate-400 text-xs mb-4">Complete Suite</p>
                                <div className="mb-4 pb-4 border-b border-slate-700">
                                    <span className="text-xs font-semibold text-blue-400">Everything in Pro, plus:</span>
                                </div>
                                <ul className="space-y-2 mb-6 text-sm text-slate-300">
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-green-400 mt-1 text-xs"></i> Customer management & Dues</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-green-400 mt-1 text-xs"></i> Supplier management</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-green-400 mt-1 text-xs"></i> Separate purchase/sales summaries</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-green-400 mt-1 text-xs"></i> Customer names on invoices</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-green-400 mt-1 text-xs"></i> Unlimited bill saving & sharing</li>
                                    <li className="flex gap-2"><i className="fa-solid fa-check text-green-400 mt-1 text-xs"></i> One tap WhatsApp billing</li>
                                </ul>
                                <Link href="/contact" className="btn btn-sm btn-white w-full justify-center mt-auto">Go Elite</Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Customer Feedback */}
            <section className="section bg-white">
                <div className="container-custom text-center">
                    <FadeIn className="mb-12">
                        <h2 className="mb-12">Customer Success Stories</h2>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" staggerDelay={0.2}>
                        <StaggerItem>
                            <Card className="bg-slate-50">
                                <p className="italic text-slate-600 mb-4">"Best POS system we've used. It handles our large inventory without any lag."</p>
                                <h5 className="font-bold">- Supermarket Owner, Galle</h5>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card className="bg-slate-50">
                                <p className="italic text-slate-600 mb-4">"The reporting tools helped us identify our most profitable items immediately."</p>
                                <h5 className="font-bold">- Fashion Retailer, Colombo</h5>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <section className="section text-center">
                <div className="container-custom max-w-2xl">
                    <FadeIn direction="up">
                        <h2>Ready to Scale Your Business?</h2>
                        <p className="text-slate-500 mb-8">Join thousands of retailers using bstEasyPos.</p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
                            <Link href="#features" className="btn btn-outline">Talk to Sales</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
