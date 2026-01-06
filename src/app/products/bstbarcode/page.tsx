import Link from "next/link";
import Card from "@/components/Card";

export default function BstBarcodePage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[500px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-50"
                    style={{ backgroundImage: "url('/assets/hero_barcode.png')" }}
                ></div>

                <div className="container-custom relative z-20 text-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">BST Barcode Label Printer</h1>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Instantly generate and print professional barcode labels directly from your mobile device. Fast, easy, and offline-capable.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="#" className="btn btn-primary">Download App</Link>
                        <Link href="/contact" className="btn btn-white">Talk to Sales</Link>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2>Powerful Features for Modern Businesses</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Card title="Instant Generation" icon={<i className="fa-solid fa-bolt"></i>}>
                            <p className="text-sm">Create standard barcodes instantly from item data without complex software.</p>
                        </Card>
                        <Card title="Custom Designs" icon={<i className="fa-solid fa-pen-ruler"></i>}>
                            <p className="text-sm">Customize label layouts to match your product branding and compliance needs.</p>
                        </Card>
                        <Card title="Offline Functionality" icon={<i className="fa-solid fa-wifi"></i>}>
                            <p className="text-sm">Full functionality without internet access. Perfect for warehouses.</p>
                        </Card>
                        <Card title="Mobile Printing" icon={<i className="fa-solid fa-print"></i>}>
                            <p className="text-sm">Connects seamlessly to portable Bluetooth printers for on-the-spot labeling.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2>How It Works in Three Simple Steps</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-900 order-2 md:order-1">
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img
                                    src="/assets/steps_barcode.jpg"
                                    alt="Barcode Usage"
                                    className="w-full h-full object-cover object-top transform scale-105"
                                    style={{ clipPath: "inset(0 0 20px 0)" }}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 order-1 md:order-2">
                            <div>
                                <h3 className="text-blue-600 text-lg mb-2">1. Create or Select Template</h3>
                                <p className="text-slate-600">Choose from our pre-designed templates or design your own custom label from scratch.</p>
                            </div>
                            <div>
                                <h3 className="text-blue-600 text-lg mb-2">2. Enter Item Data or Scan</h3>
                                <p className="text-slate-600">Manually input product details or scan existing barcodes to populate the data automatically.</p>
                            </div>
                            <div>
                                <h3 className="text-blue-600 text-lg mb-2">3. Print via Bluetooth or Export</h3>
                                <p className="text-slate-600">Instantly print to your connected printer or export as an image/PDF for later use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* App in Action */}
            <section className="section bg-white text-center">
                <div className="container-custom">
                    <div className="mb-12">
                        <h2>See BST Barcode in Action</h2>
                        <p className="text-slate-500">From scan to print in seconds.</p>
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
                            <p className="italic text-slate-600 mb-4">"Creating custom labels for our products used to take hours. Now it takes minutes."</p>
                            <h5 className="font-bold">- Warehouse Manager, Wattala</h5>
                        </Card>
                        <Card className="bg-white">
                            <p className="italic text-slate-600 mb-4">"The Bluetooth printing is seamless. We can label items right on the receiving dock."</p>
                            <h5 className="font-bold">- Logistics Coordinator, Colombo</h5>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="section text-center">
                <div className="container-custom max-w-2xl">
                    <h2>Ready to Elevate Your Retail Business?</h2>
                    <p className="text-slate-500 mb-8">Start creating fast, professional barcode labels today.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="#" className="btn btn-primary">Download App</Link>
                        <Link href="/contact" className="btn btn-outline">Talk to Our Team</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
