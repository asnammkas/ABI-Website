import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-200 text-slate-700 py-16 mt-auto">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    <div className="col-span-1 md:col-span-1.5">
                        <Link href="/" className="text-xl font-bold text-blue-600 mb-4 inline-block">
                            ABI <span className="text-slate-900">Systems</span>
                        </Link>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                            ABI Systems is a software solutions company dedicated to transforming Sri Lanka's retail industry through intelligent AI and robust platforms.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-500 hover:text-blue-600"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#" className="text-slate-500 hover:text-blue-600"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#" className="text-slate-500 hover:text-blue-600"><i className="fa-brands fa-x-twitter"></i></a>
                        </div>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wide">Company</h5>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="/about" className="hover:text-blue-600">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wide">Products</h5>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li><Link href="/products/billcalc" className="hover:text-blue-600">billCalc</Link></li>
                            <li><Link href="/products/bsteasypos" className="hover:text-blue-600">bstEasyPos</Link></li>
                            <li><Link href="/products/bstbarcode" className="hover:text-blue-600">BST Barcode</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wide">Contact Us</h5>
                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex gap-3">
                                <i className="fa-solid fa-location-dot text-blue-600 mt-1"></i>
                                <span>No.410/137, Bauddhaloka Mawatha,<br />Colombo 00700, Sri Lanka</span>
                            </div>
                            <div className="flex gap-3">
                                <i className="fa-solid fa-phone text-blue-600"></i>
                                <span>+94 11 234 5678</span>
                            </div>
                            <div className="flex gap-3">
                                <i className="fa-solid fa-envelope text-blue-600"></i>
                                <span>info@abisystems.lk</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; 2026 ABI Systems. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-600">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-blue-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
