import Link from "next/link";
import Card from "@/components/Card";

export default function BillCalcPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[500px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-50"
                    style={{ backgroundImage: "url('/assets/hero_billcalc.png')" }}
                ></div>

                <div className="container-custom relative z-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">billCalc: Smart Billing</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        A smart billing solution that transforms your smartphone into a portable POS system. Fast, accurate, and offline-capable.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
                        <Link href="#features" className="btn btn-white">View Features</Link>
                    </div>
                </div>
            </section>

            <section id="features" className="section bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2>Powerful Features for Field Billing</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card title="Portable POS" icon={<i className="fa-solid fa-mobile-screen"></i>}>
                            <p>Transforms your smartphone into a complete billing system. Ideal for on-the-go transactions.</p>
                        </Card>
                        <Card title="Offline Capability" icon={<i className="fa-solid fa-wifi"></i>}>
                            <p>Works perfectly without an internet connection. Syncs when you're back online.</p>
                        </Card>
                        <Card title="WhatsApp Sharing" icon={<i className="fa-brands fa-whatsapp"></i>}>
                            <p>Share digital bills instantly via WhatsApp. Eco-friendly and convenient for customers.</p>
                        </Card>
                        <Card title="Daily Sales Tracking" icon={<i className="fa-solid fa-chart-line"></i>}>
                            <p>Track your daily sales performance and customize the system to your business needs.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2>Effortless Billing in Three Simple Steps</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 order-2 md:order-1">
                            {/* Image Container with cropping for bottom-right logo */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img
                                    src="/assets/steps_billcalc.jpg"
                                    alt="BillCalc Usage"
                                    className="w-full h-full object-cover object-top transform scale-105"
                                    style={{ clipPath: "inset(0 0 20px 0)" }}
                                />
                            </div>
                        </div>
                        <div className="space-y-8 order-1 md:order-2">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 min-w-[3rem] bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Create Items</h4>
                                    <p className="text-sm text-slate-600">Simply enter item name, price and selling type.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 min-w-[3rem] bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Billing Items</h4>
                                    <p className="text-sm text-slate-600">Select the added item and give the quantity.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 min-w-[3rem] bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Print & Finalize</h4>
                                    <p className="text-sm text-slate-600">Instantly print receipt via bluetooth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App in Action */}
            <section className="section bg-white text-center">
                <div className="container-custom">
                    <div className="mb-12">
                        <h2>See BillCalc in Action</h2>
                        <p className="text-slate-500">Visualizing simplicity and power.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[9/16] bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                            <span>App Screenshot 1</span>
                        </div>
                        <div className="aspect-[9/16] bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                            <span>App Screenshot 2</span>
                        </div>
                        <div className="aspect-[9/16] bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                            <span>App Screenshot 3</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Feedback */}
            <section className="section bg-slate-50">
                <div className="container-custom text-center">
                    <h2 className="mb-12">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <Card className="bg-white">
                            <p className="italic text-slate-600 mb-4">"BillCalc transformed how we handle our daily sales. It's so fast and easy to use!"</p>
                            <h5 className="font-bold">- Retail Owner, Colombo</h5>
                        </Card>
                        <Card className="bg-white">
                            <p className="italic text-slate-600 mb-4">"The offline feature is a lifesaver. We never stop billing even during power cuts."</p>
                            <h5 className="font-bold">- Grocery Manager, Kandy</h5>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container-custom max-w-2xl">
                    <h2>Ready to Elevate Your Retail Business?</h2>
                    <p className="text-slate-500 mb-8">Join the growing number of smart retailers transforming their customer experience.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
                        <Link href="#features" className="btn btn-outline">Learn More</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
