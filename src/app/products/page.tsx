import Link from "next/link";
import Card from "@/components/Card";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function ProductsPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[400px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-60"
                    style={{ backgroundImage: "url('/assets/hero_products_main.png')" }}
                ></div>

                <div className="container-custom relative z-20 text-center">
                    <FadeIn>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Our Products</h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Innovative Software Solutions for Modern Retailers</p>
                    </FadeIn>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.1}>
                        {/* billCalc */}
                        <StaggerItem>
                            <Card glowColor="indigo" className="text-center transition-colors h-full">
                                <div className="h-[120px] bg-slate-50 rounded-lg mb-6 flex items-center justify-center p-4">
                                    <img src="/assets/billcalc_logo.png" alt="billCalc Logo" className="h-full w-auto object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">billCalc</h3>
                                <p className="text-slate-600 mb-6 min-h-[80px]">
                                    The smart billing solution with instant discounts, Bluetooth printing, and tax calculations.
                                </p>
                                <Link href="/products/billcalc" className="btn btn-primary w-full">View Details</Link>
                            </Card>
                        </StaggerItem>

                        {/* bstEasyPos */}
                        <StaggerItem>
                            <Card glowColor="blue" className="text-center transition-colors h-full">
                                <div className="h-[120px] bg-blue-50 rounded-lg mb-6 flex items-center justify-center p-4">
                                    <img src="/assets/pos_logo.png" alt="bstEasyPos Logo" className="h-full w-auto object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">bstEasyPos</h3>
                                <p className="text-slate-600 mb-6 min-h-[80px]">
                                    Complete POS & CRM system. Manage stock, sales, and customers from one dashboard.
                                </p>
                                <Link href="/products/bsteasypos" className="btn btn-primary w-full">View Details</Link>
                            </Card>
                        </StaggerItem>

                        {/* BST Barcode */}
                        <StaggerItem>
                            <Card glowColor="rose" className="text-center transition-colors h-full">
                                <div className="h-[120px] bg-red-50 rounded-lg mb-6 flex items-center justify-center p-4">
                                    <img src="/assets/barcode_logo.png" alt="BST Barcode Logo" className="h-full w-auto object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">BST Barcode</h3>
                                <p className="text-slate-600 mb-6 min-h-[80px]">
                                    Generate and print professional barcode labels directly from your mobile device.
                                </p>
                                <Link href="/products/bstbarcode" className="btn btn-primary w-full">View Details</Link>
                            </Card>
                        </StaggerItem>

                        {/* Cash Collection */}
                        <StaggerItem>
                            <Card glowColor="green" className="text-center transition-colors h-full">
                                <div className="h-[120px] bg-green-50 rounded-lg mb-6 flex items-center justify-center text-5xl text-green-600">
                                    <i className="fa-solid fa-money-bill-wave"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Cash Collection</h3>
                                <p className="text-slate-600 mb-6 min-h-[80px]">
                                    Simplify daily payment collection for field agents. Record, track, and manage cash transactions secure & offline.
                                </p>
                                <Link href="/products/cash-collection" className="btn btn-primary w-full">View Details</Link>
                            </Card>
                        </StaggerItem>

                        {/* Zonoc */}
                        <StaggerItem>
                            <Card glowColor="indigo" className="text-center transition-colors h-full">
                                <div className="h-[120px] bg-indigo-50 rounded-lg mb-6 flex items-center justify-center text-5xl text-indigo-600">
                                    <i className="fa-solid fa-chart-line"></i>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Zonoc</h3>
                                <p className="text-slate-600 mb-6 min-h-[80px]">
                                    Centralized business management. Invoice, payment, and supplier tracking in one unified dashboard.
                                </p>
                                <Link href="/products/zonoc" className="btn btn-primary w-full">View Details</Link>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <section className="section bg-slate-50 text-center">
                <div className="container-custom max-w-2xl">
                    <FadeIn direction="up">
                        <h2>Need a Custom Solution?</h2>
                        <p className="text-slate-500 mb-8">We also build internal tools and custom software tailored to your specific business needs.</p>
                        <Link href="/contact" className="btn btn-outline">Contact Us</Link>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
