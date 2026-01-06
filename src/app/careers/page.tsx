'use client';

import { useState } from "react";
import Link from "next/link";
import Card from "@/components/Card";
import ApplicationModal from "@/components/ApplicationModal";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";

export default function CareersPage() {
    const [selectedJob, setSelectedJob] = useState<string | null>(null);

    const openApplication = (jobTitle: string) => {
        setSelectedJob(jobTitle);
    };

    return (
        <>
            <section className="relative pt-[80px] min-h-[400px] bg-slate-900 flex items-center text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-900/90 z-10"></div>
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-60"
                    style={{ backgroundImage: "url('/assets/hero_careers.jpg')" }}
                ></div>

                <StaggerContainer className="container-custom relative z-20 text-center">
                    <StaggerItem>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Shape the Future with Us</h1>
                    </StaggerItem>
                    <StaggerItem>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Join a dynamic team of innovators dedicated to crafting scalable software solutions.</p>
                    </StaggerItem>
                    <StaggerItem>
                        <Link href="#jobs" className="btn btn-primary">View Open Positions</Link>
                    </StaggerItem>
                </StaggerContainer>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
                        <FadeIn direction="right">
                            <h2>A Culture of Innovation and Growth</h2>
                            <p className="text-slate-600 mb-6">
                                At ABI Systems, we believe in fostering an environment where ideas flourish, and every voice is heard. We prioritize continuous learning, work-life balance, and a collaborative spirit.
                            </p>
                            <ul className="space-y-2 text-slate-700">
                                <li><span className="mr-2">🚀</span> Empowering creative problem-solving</li>
                                <li><span className="mr-2">🌱</span> Commitment to continuous learning</li>
                                <li><span className="mr-2">🤝</span> Collaborative team environment</li>
                            </ul>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/culture_innovation.png" alt="Culture of Innovation" className="rounded-xl shadow-lg" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <section id="jobs" className="section bg-slate-50">
                <div className="container-custom">
                    <FadeIn className="text-center mb-12">
                        <h2>Current Opportunities</h2>
                    </FadeIn>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                        <StaggerItem>
                            <Card className="hover:border-blue-500 cursor-pointer group" onClick={() => openApplication("Senior Frontend Engineer")}>
                                <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">Senior Frontend Engineer</h3>
                                <p className="text-slate-500 text-sm mb-4">Remote | Full-time</p>
                                <button className="text-blue-600 font-semibold text-sm">Apply Now &rarr;</button>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card className="hover:border-blue-500 cursor-pointer group" onClick={() => openApplication("Backend Developer (Node.js)")}>
                                <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">Backend Developer (Node.js)</h3>
                                <p className="text-slate-500 text-sm mb-4">Colombo | Full-time</p>
                                <button className="text-blue-600 font-semibold text-sm">Apply Now &rarr;</button>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card className="hover:border-blue-500 cursor-pointer group" onClick={() => openApplication("UI/UX Designer")}>
                                <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">UI/UX Designer</h3>
                                <p className="text-slate-500 text-sm mb-4">Remote | Contract</p>
                                <button className="text-blue-600 font-semibold text-sm">Apply Now &rarr;</button>
                            </Card>
                        </StaggerItem>
                        <StaggerItem>
                            <Card className="hover:border-blue-500 cursor-pointer group" onClick={() => openApplication("QA Automation Engineer")}>
                                <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">QA Automation Engineer</h3>
                                <p className="text-slate-500 text-sm mb-4">Colombo | Full-time</p>
                                <button className="text-blue-600 font-semibold text-sm">Apply Now &rarr;</button>
                            </Card>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            <section className="section bg-white text-center">
                <div className="container-custom">
                    <FadeIn className="mb-12">
                        <h2>Our Hiring Process</h2>
                    </FadeIn>
                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-8" staggerDelay={0.2}>
                        <StaggerItem>
                            <div className="relative">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 z-10 relative">1</div>
                                <h4 className="font-bold">Apply</h4>
                                <p className="text-sm text-slate-500">Submit your resume</p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="relative">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 z-10 relative">2</div>
                                <h4 className="font-bold">Review</h4>
                                <p className="text-sm text-slate-500">We check if it's a match</p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="relative">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 z-10 relative">3</div>
                                <h4 className="font-bold">Interview</h4>
                                <p className="text-sm text-slate-500">Technical & Culture fit</p>
                            </div>
                        </StaggerItem>
                        <StaggerItem>
                            <div className="relative">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 z-10 relative">4</div>
                                <h4 className="font-bold">Offer</h4>
                                <p className="text-sm text-slate-500">Welcome to the team!</p>
                            </div>
                        </StaggerItem>
                    </StaggerContainer>
                </div>
            </section>

            {selectedJob && (
                <ApplicationModal
                    isOpen={!!selectedJob}
                    onClose={() => setSelectedJob(null)}
                    jobTitle={selectedJob}
                />
            )}
        </>
    );
}
