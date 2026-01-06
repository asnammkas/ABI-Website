import Link from "next/link";
import Card from "@/components/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function BillCalcPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[500px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-50"
                    style={{ backgroundImage: "url('/assets/hero_billcalc.png')" }}
                ></div>

                <StaggerContainer className="container-custom relative z-20 text-center">
                    <StaggerItem>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">billCalc: Smart Billing</h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            A smart billing solution that transforms your smartphone into a portable POS system. Fast, accurate, and offline-capable.
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
                        <h2>Powerful Features for Field Billing</h2>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.1}>
                        <StaggerItem>
                            <Card title="Portable POS" icon={<i className="fa-solid fa-mobile-screen"></i>}>
                                <p>Transforms your smartphone into a complete billing system. Ideal for on-the-go transactions.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="Offline Capability" icon={<i className="fa-solid fa-wifi"></i>}>
                                <p>Works perfectly without an internet connection. Syncs when you're back online.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="WhatsApp Sharing" icon={<i className="fa-brands fa-whatsapp"></i>}>
                                <p>Share digital bills instantly via WhatsApp. Eco-friendly and convenient for customers.</p>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card title="Daily Sales Tracking" icon={<i className="fa-solid fa-chart-line"></i>}>
                                <p>Track your daily sales performance and customize the system to your business needs.</p>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <section className="section bg-slate-50">
                <div className="container-custom">
                    <FadeIn className="text-center mb-16">
                        <h2>Effortless Billing in Three Simple Steps</h2>
                    </FadeIn>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <FadeIn direction="right" className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 order-2 md:order-1">
                            {/* Image Container with cropping for bottom-right logo */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img
                                    src="/assets/steps_billcalc.jpg"
                                    alt="BillCalc Usage"
                                    className="w-full h-full object-cover object-top transform scale-105"
                                    style={{ clipPath: "inset(0 0 20px 0)" }}
                                />
                            </div>
                        </FadeIn>
                        <StaggerContainer className="space-y-8 order-1 md:order-2" staggerDelay={0.2}>
                            <StaggerItem>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 min-w-[3rem] bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Create Items</h4>
                                        <p className="text-sm text-slate-600">Simply enter item name, price and selling type.</p>
                                    </div>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 min-w-[3rem] bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Billing Items</h4>
                                        <p className="text-sm text-slate-600">Select the added item and give the quantity.</p>
                                    </div>
                                </div>
                            </StaggerItem>
                            <StaggerItem>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 min-w-[3rem] bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">Print & Finalize</h4>
                                        <p className="text-sm text-slate-600">Instantly print receipt via bluetooth.</p>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* App in Action */}
            <section className="section bg-white text-center">
                <div className="container-custom">
                    <FadeIn className="mb-12">
                        <h2>See BillCalc in Action</h2>
                        <p className="text-slate-500">Visualizing simplicity and power.</p>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.2}>
                        <StaggerItem>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[3/4] bg-slate-100">
                                <img src="/assets/billcalc_mockup_1.png" alt="Select Item" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[3/4] bg-slate-100">
                                <img src="/assets/billcalc_mockup_2.png" alt="Enter Quantity" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 relative aspect-[3/4] bg-slate-100">
                                <img src="/assets/billcalc_mockup_3.png" alt="Print Receipt" className="absolute inset-0 w-full h-full object-cover" />
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Pricing Plans */}
            <section className="section bg-slate-50">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <h2>Simple, Transparent Pricing</h2>
                        <p className="text-slate-500">Choose the plan that fits your business needs.</p>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" staggerDelay={0.2}>
                        {/* Lite Plan */}
                        <StaggerItem className="h-full">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 transition-colors flex flex-col h-full">
                                <h3 className="text-2xl font-bold mb-2">Lite Plan</h3>
                                <p className="text-slate-500 text-sm mb-6">Lightning-Fast Billing</p>
                                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Advanced calculator with complex calculations</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Item discount by value & percentage</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Total discount by value & percentage</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Smart syntax discounts (e.g. 200%10)</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> On-the-fly bulk to unit price calc</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Simple change calculation</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Portable Bluetooth printing</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Bill sharing via WhatsApp & SMS</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Daily/Monthly/Yearly sales summaries</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Insightful dashboard</li>
                                </ul>
                                <Link href="/contact" className="btn btn-outline w-full justify-center mt-auto">Get Started</Link>
                            </div>
                        </StaggerItem>

                        {/* Pro Plan */}
                        <StaggerItem className="h-full">
                            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative border border-slate-900 flex flex-col h-full">
                                <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                                <h3 className="text-2xl font-bold mb-2 text-white">Pro Plan</h3>
                                <p className="text-slate-300 text-sm mb-6">Smart Item & Credit Management</p>
                                <div className="mb-6 pb-6 border-b border-slate-700">
                                    <span className="text-sm font-semibold text-blue-400">Everything in Lite, plus:</span>
                                </div>
                                <ul className="space-y-3 mb-8 text-sm text-slate-300">
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> Item management (Create & Edit)</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> On-the-fly item creation in sales</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> Fast item search from product list</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> Support for unlisted items</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> Full invoices with item details</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> Credit sales support</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> Item-wise sales summaries</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> Stock adjustment & Transfer</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-blue-400 mt-1"></i> Stock Reports</li>
                                </ul>
                                <Link href="/contact" className="btn btn-primary w-full justify-center mt-auto">Choose Pro</Link>
                            </div>
                        </StaggerItem>

                        {/* Elite Plan */}
                        <StaggerItem className="h-full">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 transition-colors flex flex-col h-full">
                                <h3 className="text-2xl font-bold mb-2">Elite Plan</h3>
                                <p className="text-slate-500 text-sm mb-6">Complete Business Suite</p>
                                <div className="mb-6 pb-6 border-b border-slate-100">
                                    <span className="text-sm font-semibold text-blue-600">Everything in Pro, plus:</span>
                                </div>
                                <ul className="space-y-3 mb-8 text-sm text-slate-600">
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Customer management</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Customer due & collection tracking</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Supplier management</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Separate purchase/sales summaries</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Customer names on invoices</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Unlimited bill saving & sharing</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> Fast search across items & customers</li>
                                    <li className="flex gap-3"><i className="fa-solid fa-check text-green-500 mt-1"></i> One tap WhatsApp billing</li>
                                </ul>
                                <Link href="/contact" className="btn btn-outline w-full justify-center mt-auto">Go Elite</Link>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {/* Customer Feedback */}
            <section className="section bg-slate-50">
                <div className="container-custom text-center">
                    <FadeIn className="mb-12">
                        <h2 className="mb-12">What Our Customers Say</h2>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" staggerDelay={0.2}>
                        <StaggerItem>
                            <Card className="bg-white">
                                <p className="italic text-slate-600 mb-4">"BillCalc transformed how we handle our daily sales. It's so fast and easy to use!"</p>
                                <h5 className="font-bold">- Retail Owner, Colombo</h5>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card className="bg-white">
                                <p className="italic text-slate-600 mb-4">"The offline feature is a lifesaver. We never stop billing even during power cuts."</p>
                                <h5 className="font-bold">- Grocery Manager, Kandy</h5>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <section className="section text-center">
                <div className="container-custom max-w-2xl">
                    <FadeIn direction="up">
                        <h2>Ready to Elevate Your Retail Business?</h2>
                        <p className="text-slate-500 mb-8">Join the growing number of smart retailers transforming their customer experience.</p>
                        <div className="flex justify-center gap-4">
                            <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
                            <Link href="#features" className="btn btn-outline">Learn More</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
