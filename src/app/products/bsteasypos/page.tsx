import Link from "next/link";
import Card from "@/components/Card";

export default function BstEasyPosPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[500px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-50"
                    style={{ backgroundImage: "url('/assets/hero_pos.png')" }}
                ></div>

                <div className="container-custom relative z-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">bstEasyPos: Enterprise POS</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        An enterprise-grade point-of-sale system built for scalability, operational control, and long-term value.
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
                        <h2>Core Modules of bstEasyPos</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <Card title="Scalability" icon={<i className="fa-solid fa-arrow-up-right-dots"></i>} className="text-center">
                            <p className="text-sm">Built to grow with your business, from single stores to large retail chains.</p>
                        </Card>
                        <Card title="Inventory Control" icon={<i className="fa-solid fa-boxes-stacked"></i>} className="text-center">
                            <p className="text-sm">Comprehensive item management, supplier handling, and purchasing workflows.</p>
                        </Card>
                        <Card title="Customer Dues" icon={<i className="fa-solid fa-file-invoice-dollar"></i>} className="text-center">
                            <p className="text-sm">Track customer credit and payment history securely within the platform.</p>
                        </Card>
                        <Card title="One-Time Payment" icon={<i className="fa-solid fa-sack-dollar"></i>} className="text-center">
                            <p className="text-sm">No recurring subscription fees. Complete ownership for long-term value.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2>Features & Benefits that Drive Growth</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-blue-600 mb-2 text-lg">Stock Rate Calculation</h3>
                            <p className="text-slate-600 mb-6">Automatically calculate average costs and optimal selling prices based on stock history.</p>

                            <h3 className="text-blue-600 mb-2 text-lg">Comprehensive Reporting</h3>
                            <p className="text-slate-600 mb-6">Gain deep insights into sales performance, bestseller items, and peak hours.</p>

                            <h3 className="text-blue-600 mb-2 text-lg">Mobile Optimization</h3>
                            <p className="text-slate-600">Fully responsive interface that works perfectly on tablets and mobile devices.</p>
                        </div>
                        <div>
                            <h3 className="text-blue-600 mb-2 text-lg">User-Friendly Interface</h3>
                            <p className="text-slate-600 mb-6">Minimal training required. Staff can start selling in minutes.</p>

                            <h3 className="text-blue-600 mb-2 text-lg">Offline Capability</h3>
                            <p className="text-slate-600 mb-6">Keep selling even when the internet goes down. Data syncs automatically.</p>

                            <h3 className="text-blue-600 mb-2 text-lg">Secure & Reliable</h3>
                            <p className="text-slate-600">Enterprise-grade security to protect your sensitive business data.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use Steps */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2>Get Started in 3 Easy Steps</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 order-2 md:order-1">
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img
                                    src="/assets/steps_pos.jpg"
                                    alt="EasyPOS Usage"
                                    className="w-full h-full object-cover object-top transform scale-105"
                                    style={{ clipPath: "inset(0 0 20px 0)" }}
                                />
                            </div>
                        </div>
                        <div className="space-y-8 order-1 md:order-2 text-left">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 min-w-[3rem] bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Setup Inventory</h4>
                                    <p className="text-sm text-slate-600">Add your items, set prices, and organize your stock.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 min-w-[3rem] bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Start Selling</h4>
                                    <p className="text-sm text-slate-600">Use the POS interface to bill customers quickly.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 min-w-[3rem] bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1">Track Growth</h4>
                                    <p className="text-sm text-slate-600">Monitor reports and optimize your sales strategy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App in Action */}
            <section className="section bg-slate-50 text-center">
                <div className="container-custom">
                    <div className="mb-12">
                        <h2>See EasyPOS in Action</h2>
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
            <section className="section bg-white">
                <div className="container-custom text-center">
                    <h2 className="mb-12">Customer Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <Card className="bg-slate-50">
                            <p className="italic text-slate-600 mb-4">"Best POS system we've used. It handles our large inventory without any lag."</p>
                            <h5 className="font-bold">- Supermarket Owner, Galle</h5>
                        </Card>
                        <Card className="bg-slate-50">
                            <p className="italic text-slate-600 mb-4">"The reporting tools helped us identify our most profitable items immediately."</p>
                            <h5 className="font-bold">- Fashion Retailer, Colombo</h5>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container-custom max-w-2xl">
                    <h2>Ready to Scale Your Business?</h2>
                    <p className="text-slate-500 mb-8">Join thousands of retailers using bstEasyPos.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
                        <Link href="#features" className="btn btn-outline">Talk to Sales</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
