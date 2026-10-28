import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Calendar, 
  Clock, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from '../icons/BrandIcons';
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
        colors: ['#38BDF8', '#0EA5E9', '#10B981', '#6366F1'],
      });
    } catch {}

    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formState.name.trim()) errors.name = 'Please enter your name';
    if (!formState.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formState.message.trim()) {
      errors.message = 'Please enter your message';
    } else if (formState.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setToastMessage('Message sent! I will respond as soon as possible.');
      setToastOpen(true);
      setFormState({
        name: '',
        email: '',
        message: '',
      });

      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {}
    }, 700);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative scroll-mt-16">
      <Container size="default">
        <SectionHeader
          badge="GET IN TOUCH"
          title="Let's Connect & Collaborate."
          subtitle="Feel free to reach out directly via email or send a message below for inquiries or opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#0F1626]/70 border border-slate-200/90 dark:border-white/[0.08] shadow-card-subtle space-y-5 transition-colors duration-200">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
                  Direct Contact
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight text-balance">
                  Quick Connect
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-pretty">
                  You can copy my email directly or send a message using the form. I typically respond within 24 hours.
                </p>
              </div>

              {/* One-click email copy card */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/[0.08] flex items-center justify-between gap-3 transition-colors duration-200">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 truncate select-all font-medium">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-500/15 hover:bg-sky-100 dark:hover:bg-sky-500/25 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-500/30 text-xs font-semibold inline-flex items-center justify-center gap-1.5 shrink-0 active:scale-[0.96] transition-[transform,background-color,border-color] duration-150 cursor-pointer shadow-2xs text-center"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="text-emerald-700 dark:text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Service Commitments */}
              <div className="space-y-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span>Response time: <strong className="text-slate-800 dark:text-slate-200 font-mono tabular-nums">&lt; 24 hours</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Available for projects & opportunities</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-300 transition-colors font-medium"
                >
                  <GithubIcon className="w-4 h-4 shrink-0" />
                  <span>github.com/quannguyen89s</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/80 dark:bg-[#0F1626]/70 border border-slate-200/90 dark:border-white/[0.08] shadow-card-subtle transition-colors duration-200">
              <div className="mb-5 pb-3 border-b border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    Send a Direct Message
                  </h4>
                </div>
              </div>

              {isSuccess ? (
                <div className="p-6 text-center space-y-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/25">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Check className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-bold text-slate-900 dark:text-white">
                    Message Received!
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto text-pretty">
                    Thank you for reaching out. I will review your message and respond as soon as possible.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    size="sm"
                    className="justify-center text-center"
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
                        className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Full Name <span className="text-sky-600 dark:text-sky-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Alex Morgan"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:bg-white dark:focus:bg-white/[0.05] transition-[border-color,box-shadow,background-color] duration-150 ${
                          formErrors.name
                            ? 'border-rose-400 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/50'
                            : 'border-slate-200 dark:border-white/[0.1] focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500/30 dark:focus:ring-sky-400/40'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-500 dark:text-rose-400 mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-sky-600 dark:text-sky-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:bg-white dark:focus:bg-white/[0.05] transition-[border-color,box-shadow,background-color] duration-150 ${
                          formErrors.email
                            ? 'border-rose-400 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/50'
                            : 'border-slate-200 dark:border-white/[0.1] focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500/30 dark:focus:ring-sky-400/40'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-500 dark:text-rose-400 mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300"
                      >
                        Your Message <span className="text-sky-600 dark:text-sky-400">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-slate-500 tabular-nums">
                        {formState.message.length} characters
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your inquiry, project details, or opportunity..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border text-base sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:bg-white dark:focus:bg-white/[0.05] transition-[border-color,box-shadow,background-color] duration-150 resize-y ${
                        formErrors.message
                          ? 'border-rose-400 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/50'
                          : 'border-slate-200 dark:border-white/[0.1] focus:border-sky-500 dark:focus:border-sky-400 focus:ring-1 focus:ring-sky-500/30 dark:focus:ring-sky-400/40'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-500 dark:text-rose-400 mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-1">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto justify-center text-center"
                      disabled={isSubmitting}
                      iconRight={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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
