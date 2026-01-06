import Link from "next/link";
import Card from "@/components/Card";

export default function ServicesPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[400px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-20"
                    style={{ backgroundImage: "url('/assets/hero_saas_abstract_1767539823557.png')" }}
                ></div>

                <div className="container-custom relative z-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Our Services</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Comprehensive Tech Solutions for Your Business</p>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2>Enterprise-Focused Services</h2>
                        <p className="text-slate-600 max-w-3xl mx-auto">
                            ABI Systems provides a comprehensive range of services aimed at improving operational efficiency and business intelligence across retail, wholesale, and distribution environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* 1. Software Development */}
                        <Card title="Software Development" icon={<i className="fa-solid fa-code"></i>} className="hover:border-blue-500">
                            <p className="text-slate-600 mb-4">
                                We build custom enterprise software solutions addressing critical functions like billing, inventory control, and operational management. Scalable, reliable, and high-performance systems for complex operations.
                            </p>
                        </Card>

                        {/* 2. Supply Chain & Distribution */}
                        <Card title="Supply Chain Solutions" icon={<i className="fa-solid fa-truck-fast"></i>} className="hover:border-blue-500">
                            <p className="text-slate-600 mb-4">
                                Optimize operations from warehouse to customer. Real-time inventory visibility, delivery tracking, and workflow coordination to minimize errors and ensure smooth end-to-end distribution.
                            </p>
                        </Card>

                        {/* 3. AI-Powered Technology */}
                        <Card title="AI-Powered Solutions" icon={<i className="fa-solid fa-brain"></i>} className="hover:border-blue-500">
                            <p className="text-slate-600 mb-4">
                                Automate routine processes and gain real-time operational insights. Our AI systems support smarter decision-making, helping organizations reduce costs and improve efficiency.
                            </p>
                        </Card>

                        {/* 4. Business Oversight */}
                        <Card title="Business Oversight" icon={<i className="fa-solid fa-tower-observation"></i>} className="hover:border-blue-500">
                            <p className="text-slate-600 mb-4">
                                Complete visibility across business operations. Track performance indicators, automate reporting, and enable accountability with actionable insights for leadership.
                            </p>
                        </Card>

                        {/* 5. Comprehensive Reporting */}
                        <Card title="Comprehensive Reporting" icon={<i className="fa-solid fa-file-chart-column"></i>} className="hover:border-blue-500">
                            <p className="text-slate-600 mb-4">
                                Consolidate data into unified dashboards. Automate report generation and visualize performance metrics to maintain accuracy and efficiency across all departments.
                            </p>
                        </Card>

                        {/* 6. Payment Management */}
                        <Card title="Payment Management" icon={<i className="fa-solid fa-credit-card"></i>} className="hover:border-blue-500">
                            <p className="text-slate-600 mb-4">
                                Securely record and organize payment details. Track customer dues, manage receipts, and maintain accurate financial records for transparent and efficient operations.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section text-center bg-slate-50">
                <div className="container-custom max-w-2xl">
                    <h2>Have a Project in Mind?</h2>
                    <p className="text-slate-500 mb-8">Let's discuss how we can bring your ideas to life.</p>
                    <Link href="/contact" className="btn btn-primary">Start a Conversation</Link>
                </div>
            </section>
        </>
    );
}
