import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function ContactPage() {
    return (
        <>
            <section className="relative pt-[80px] min-h-[300px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-80"
                    style={{ backgroundImage: "url('/assets/hero_contact_v2.png')" }}
                ></div>
                <StaggerContainer className="container-custom relative z-20 text-center">
                    <StaggerItem>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Contact Us</h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Get in touch with our team for demos, support, or inquiries.</p>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <FadeIn direction="right" className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-slate-700">Name</label>
                                    <input type="text" className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:border-blue-600" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-slate-700">Email</label>
                                    <input type="email" className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:border-blue-600" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-slate-700">Subject</label>
                                    <select className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:border-blue-600">
                                        <option>Sales Inquiry</option>
                                        <option>Product Support</option>
                                        <option>Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-2 text-slate-700">Message</label>
                                    <textarea className="w-full p-3 border border-slate-300 rounded-md focus:outline-none focus:border-blue-600 h-32" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary w-full">Send Message</button>
                            </form>
                        </FadeIn>

                        {/* Map & Info */}
                        <FadeIn direction="left" delay={0.2} className="flex flex-col gap-8">
                            <div className="bg-slate-50 p-8 rounded-lg border border-slate-200">
                                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-lg"><i className="fa-solid fa-location-dot"></i></div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">Visit Us</h5>
                                            <p className="text-sm text-slate-600">No.410/137, Bauddhaloka Mawatha,<br />Colombo 00700, Sri Lanka</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-lg"><i className="fa-solid fa-phone"></i></div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">Call Us</h5>
                                            <p className="text-sm text-slate-600">+94 11 234 5678</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-lg"><i className="fa-solid fa-envelope"></i></div>
                                        <div>
                                            <h5 className="font-bold text-slate-900">Email Us</h5>
                                            <p className="text-sm text-slate-600">info@abisystems.lk</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="flex-1 bg-slate-200 rounded-lg overflow-hidden relative min-h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.916035255474!2d79.85966457375267!3d6.900645093098616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259602cb3bc09%3A0x677419399138f674!2sBauddhaloka%20Mawatha%2C%20Colombo!5e0!3m2!1sen!2slk!4v1714880000000!5m2!1sen!2slk"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </>
    );
}
