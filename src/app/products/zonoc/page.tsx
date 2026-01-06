import Link from "next/link";
import Card from "@/components/Card";

export default function ZonocPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[500px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                {/* Uses simple gradient/overlay as generic background */}

                <div className="container-custom relative z-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Zonoc: Business Management</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        The all-in-one integrated platform for invoicing, payments, and real-time business oversight.
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
                        <h2>Centralize Your Operations</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card title="Invoice Management" icon={<i className="fa-solid fa-file-invoice"></i>}>
                            <p className="text-sm">Capture and manage invoices effortlessly. Keep track of every transaction in one place.</p>
                        </Card>
                        <Card title="Performance Monitoring" icon={<i className="fa-solid fa-chart-simple"></i>}>
                            <p className="text-sm">Real-time dashboards for daily sales, revenue, and key performance indicators.</p>
                        </Card>
                        <Card title="Supplier Tracking" icon={<i className="fa-solid fa-truck-ramp-box"></i>}>
                            <p className="text-sm">Manage supplier relationships, orders, and payments efficiently.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 bg-white h-[350px] rounded-xl shadow-lg border border-slate-200 flex items-center justify-center relative overflow-hidden">
                            {/* Abstract Dashboard Mockup */}
                            <div className="w-[90%] h-[200px] bg-slate-50 border border-slate-200 rounded-lg shadow-sm p-4 relative">
                                <div className="flex justify-between mb-4">
                                    <div className="h-4 w-1/3 bg-slate-200 rounded"></div>
                                    <div className="h-4 w-1/4 bg-blue-100 rounded"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-2 mb-4">
                                    <div className="h-16 bg-blue-50 rounded"></div>
                                    <div className="h-16 bg-slate-100 rounded"></div>
                                    <div className="h-16 bg-slate-100 rounded"></div>
                                </div>
                                <div className="h-24 bg-slate-100 rounded w-full"></div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2>Unified Business Intelligence</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Zonoc brings clarity to complex operations. By integrating multiple business functions into a single dashboard, it empowers owners and managers to make faster, more informed decisions based on real-time data.
                            </p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-center"><i className="fa-solid fa-check text-blue-600 mr-3"></i> Daily Sales Tracking</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-blue-600 mr-3"></i> Payment & Expense Management</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-blue-600 mr-3"></i> Comprehensive Reporting Suite</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use Steps */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2>Manage Your Business in Steps</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 border border-slate-100 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                            <h4 className="font-bold mb-2">Connect Data</h4>
                            <p className="text-sm text-slate-600">Integrate your sales, inventory, and expense sources.</p>
                        </div>
                        <div className="p-6 border border-slate-100 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                            <h4 className="font-bold mb-2">Monitor Live</h4>
                            <p className="text-sm text-slate-600">View real-time dashboards for snapshots of your business health.</p>
                        </div>
                        <div className="p-6 border border-slate-100 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                            <h4 className="font-bold mb-2">Optimize</h4>
                            <p className="text-sm text-slate-600">Use data-driven insights to cut costs and boost revenue.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* App in Action */}
            <section className="section bg-slate-50 text-center">
                <div className="container-custom">
                    <div className="mb-12">
                        <h2>See Zonoc in Action</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[9/16] bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                            <span>Dashboard View 1</span>
                        </div>
                        <div className="aspect-[9/16] bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                            <span>Dashboard View 2</span>
                        </div>
                        <div className="aspect-[9/16] bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                            <span>Dashboard View 3</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Feedback */}
            <section className="section bg-white">
                <div className="container-custom text-center">
                    <h2 className="mb-12">Trusted by Business Leaders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <Card className="bg-slate-50">
                            <p className="italic text-slate-600 mb-4">"Zonoc gave me clarity I never had before. I can see exactly where my money is going."</p>
                            <h5 className="font-bold">- Managing Director, Tech Firm</h5>
                        </Card>
                        <Card className="bg-slate-50">
                            <p className="italic text-slate-600 mb-4">"The consolidated reporting saves me hours of manual excel work every month."</p>
                            <h5 className="font-bold">- CEO, Logistics Co.</h5>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container-custom max-w-2xl">
                    <h2>Take Control with Zonoc</h2>
                    <p className="text-slate-500 mb-8">Run your business with confidence and clarity.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary">Schedule a Demo</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
