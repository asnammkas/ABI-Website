'use client';

import { useState } from 'react';
import { saveApplication } from '@/app/actions';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    if (!isOpen) return null;

    async function handleSubmit(formData: FormData) {
        setStatus('submitting');
        setMessage('');

        // Append job title if not present (though we display it, it's good to ensure it's in the formData if needed, 
        // but here we can just rely on the hidden input or append it)
        formData.append('position', jobTitle);

        const result = await saveApplication(formData);

        if (result.success) {
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
            }, 2000);
        } else {
            setStatus('error');
            setMessage(result.message || 'Something went wrong.');
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-800">Apply for {jobTitle}</h3>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <i className="fa-solid fa-xmark text-xl"></i>
                    </button>
                </div>

                <div className="p-6">
                    {status === 'success' ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <h4 className="text-xl font-bold mb-2">Application Sent!</h4>
                            <p className="text-slate-600">Thanks for your interest. We'll be in touch soon.</p>
                        </div>
                    ) : (
                        <form action={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>

                            <div>
                                <label htmlFor="resume" className="block text-sm font-medium text-slate-700 mb-1">Link to Resume / Portfolio</label>
                                <input type="url" name="resume" id="resume" placeholder="https://linkedin.com/in/..." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                            </div>

                            <div>
                                <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700 mb-1">Cover Letter (Optional)</label>
                                <textarea name="coverLetter" id="coverLetter" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"></textarea>
                            </div>

                            {status === 'error' && (
                                <p className="text-red-500 text-sm">{message}</p>
                            )}

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full btn btn-primary flex justify-center items-center gap-2"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            <i className="fa-solid fa-circle-notch fa-spin"></i> Sending...
                                        </>
                                    ) : (
                                        'Submit Application'
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
