import Link from "next/link";
import Card from "@/components/Card";

export default function CashCollectionPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[500px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                {/* Uses simple gradient/overlay as generic background */}

                <div className="container-custom relative z-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Cash Collection App</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Simplify daily payment collection for field agents and enterprise teams. Secure, fast, and organized.
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
                        <h2>Efficient Cash Management</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card title="Quick Entry" icon={<i className="fa-solid fa-hand-holding-dollar"></i>}>
                            <p className="text-sm">Record cash transactions instantly with minimal clicks, designed for speed in the field.</p>
                        </Card>
                        <Card title="Offline Access" icon={<i className="fa-solid fa-wifi"></i>}>
                            <p className="text-sm">Works anywhere. Data is stored locally and syncs automatically when online.</p>
                        </Card>
                        <Card title="Smart Reporting" icon={<i className="fa-solid fa-chart-pie"></i>}>
                            <p className="text-sm">Generate automated reports to track daily collections and outstanding dues.</p>
                        </Card>
                        <Card title="Secure Data" icon={<i className="fa-solid fa-shield-halved"></i>}>
                            <p className="text-sm">Enterprise-grade security ensures your financial data is always protected.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2>Streamline Your Collections</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Managing cash collections in the field can be chaotic. Our Cash Collection app brings order to the process, allowing your team to focus on customer relationships rather than paperwork.
                            </p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Real-time tracking of agent performance</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> Digital receipts for transparency</li>
                                <li className="flex items-center"><i className="fa-solid fa-check text-green-500 mr-3"></i> seamless integration with ERP systems</li>
                            </ul>
                        </div>
                        <div className="bg-white h-[350px] rounded-xl shadow-lg border border-slate-200 flex items-center justify-center relative overflow-hidden">
                            {/* Abstract Mobile Mockup */}
                            <div className="w-[160px] h-[300px] bg-slate-800 rounded-[20px] shadow-2xl relative z-10 transform rotate-6">
                                <div className="w-full h-full bg-slate-700 opacity-50 flex flex-col items-center justify-center text-white">
                                    <i className="fa-solid fa-money-bill-wave text-5xl mb-4 text-green-400"></i>
                                    <span className="font-bold text-xs uppercase tracking-widest">Processing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Use Steps */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2>Simplified Collection Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 border border-slate-100 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                            <h4 className="font-bold mb-2">Assign Tasks</h4>
                            <p className="text-sm text-slate-600">Managers assign collection targets to agents via the dashboard.</p>
                        </div>
                        <div className="p-6 border border-slate-100 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                            <h4 className="font-bold mb-2">Collect & Record</h4>
                            <p className="text-sm text-slate-600">Agents collect payments and record them instantly in the app.</p>
                        </div>
                        <div className="p-6 border border-slate-100 rounded-lg shadow-sm">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                            <h4 className="font-bold mb-2">Sync & Verify</h4>
                            <p className="text-sm text-slate-600">Data syncs automatically for real-time verification and reconciliation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* App in Action */}
            <section className="section bg-slate-50 text-center">
                <div className="container-custom">
                    <div className="mb-12">
                        <h2>See the App in Action</h2>
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
                    <h2 className="mb-12">Efficiency You Can Trust</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <Card className="bg-slate-50">
                            <p className="italic text-slate-600 mb-4">"Our cash reconciliation process used to take days. Now it's done by the end of the day."</p>
                            <h5 className="font-bold">- Finance Manager, Finance Co.</h5>
                        </Card>
                        <Card className="bg-slate-50">
                            <p className="italic text-slate-600 mb-4">"The field agents love how simple the app is. No more lost receipts."</p>
                            <h5 className="font-bold">- Operations Head, Microfinance</h5>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container-custom max-w-2xl">
                    <h2>Ready to Digitize Your Collections?</h2>
                    <p className="text-slate-500 mb-8">Empower your field team with the right tools.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className="btn btn-primary">Get Started</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
