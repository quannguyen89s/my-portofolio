import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Calendar, 
  Clock, 
  Sparkles, 
  ArrowUpRight, 
  MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../icons/BrandIcons';
import confetti from 'canvas-confetti';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    serviceType: 'Full-Stack Development',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setToastMessage('Email address copied to clipboard!');
    setToastOpen(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38BDF8', '#0284C7', '#34D399'],
      });
    } catch {
      // Fallback if confetti encounters issues
    }

    setTimeout(() => setCopied(false), 3000);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formState.name.trim()) errors.name = 'Please provide your name';
    if (!formState.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please provide a valid email format';
    }
    if (!formState.message.trim()) {
      errors.message = 'Please include a brief message';
    } else if (formState.message.trim().length < 15) {
      errors.message = 'Please provide at least 15 characters';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setToastMessage('Message transmitted successfully! I will reply within 24h.');
      setToastOpen(true);
      setFormState({
        name: '',
        email: '',
        serviceType: 'Full-Stack Development',
        message: '',
      });

      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.7 },
        });
      } catch {}
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <Container size="wide">
        <SectionHeader
          number="// 05"
          badge="GET IN TOUCH"
          title="Let's build something enduring."
          subtitle="Whether you have an ambitious platform to build, a distributed system to architect, or want to explore high-impact engineering collaboration."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Outreach & SLA (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1424] border border-white/[0.08] shadow-card-subtle space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold">
                  Direct Line
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                  Ready to talk tech?
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Drop me an email directly or use the one-click copy tool. I reply personally to all inquiries within 24 business hours.
                </p>
              </div>

              {/* One-click email copy card */}
              <div className="p-4 rounded-xl bg-[#141C30] border border-white/[0.06] flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Service Commitments */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Turnaround SLA: &lt; 24h response time</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Available for Q2/Q3 2026 technical engagements</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E1424] border border-white/[0.08] shadow-card-subtle">
              <div className="mb-6 pb-4 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-sky-400" />
                  <h4 className="text-base font-bold text-slate-100">
                    Send an Encrypted Dispatch
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  direct.inbox.v1
                </span>
              </div>

              {isSuccess ? (
                <div className="p-8 text-center space-y-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Check className="w-6 h-6" />
                  </div>
                  <h5 className="text-lg font-bold text-slate-100">
                    Dispatch Acknowledged!
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. Your transmission has been queued and I will review your requirements promptly.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    size="sm"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                      >
                        Your Name <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Sarah Connor"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141C30] border text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                          formErrors.name
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/[0.08] focus:border-sky-500/60'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-400 mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                      >
                        Your Email <span className="text-sky-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="sarah@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141C30] border text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors ${
                          formErrors.email
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/[0.08] focus:border-sky-500/60'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Scope / Topic */}
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-xs font-mono font-medium text-slate-300 mb-1.5"
                    >
                      Project Focus Area
                    </label>
                    <select
                      id="serviceType"
                      value={formState.serviceType}
                      onChange={(e) =>
                        setFormState({ ...formState, serviceType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#141C30] border border-white/[0.08] text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-sky-500/60 cursor-pointer"
                    >
                      <option value="Full-Stack Development">
                        Full-Stack Web Engineering (React / Next.js / TypeScript)
                      </option>
                      <option value="Distributed Systems">
                        Distributed Systems & Backend Scaling (Go / Rust / Kafka)
                      </option>
                      <option value="Architecture Consulting">
                        Architecture Review & Performance Optimization
                      </option>
                      <option value="Full-Time Staff/Lead Role">
                        Senior / Staff Engineer Full-Time Opportunity
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono font-medium text-slate-300"
                      >
                        Project Details & Objectives <span className="text-sky-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-slate-500">
                        {formState.message.length} chars
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Outline your timeline, current architecture, or technical challenge..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141C30] border text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-colors resize-y ${
                        formErrors.message
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/[0.08] focus:border-sky-500/60'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-400 mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                      iconRight={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Transmitting Dispatch...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* Floating Feedback Toast */}
      <Toast
        isOpen={toastOpen}
        message={toastMessage}
        onClose={() => setToastOpen(false)}
      />
    </section>
  );
};
