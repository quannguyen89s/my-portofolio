import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Calendar, 
  Clock, 
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
    serviceType: 'Phát triển Frontend / Web App',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setToastMessage('Đã sao chép địa chỉ email vào clipboard!');
    setToastOpen(true);

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#0284C7', '#38BDF8', '#0EA5E9', '#10B981'],
      });
    } catch {}

    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formState.name.trim()) errors.name = 'Vui lòng nhập họ tên của bạn';
    if (!formState.email.trim()) {
      errors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Email không đúng định dạng';
    }
    if (!formState.message.trim()) {
      errors.message = 'Vui lòng nhập nội dung tin nhắn';
    } else if (formState.message.trim().length < 10) {
      errors.message = 'Nội dung tối thiểu 10 ký tự';
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
      setToastMessage('Đã gửi tin nhắn! Tôi sẽ phản hồi sớm nhất.');
      setToastOpen(true);
      setFormState({
        name: '',
        email: '',
        serviceType: 'Phát triển Frontend / Web App',
        message: '',
      });

      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {}
    }, 800);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <Container size="wide">
        <SectionHeader
          number="// 05"
          badge="LIÊN HỆ"
          title="Kết nối & hợp tác."
          subtitle="Hãy để lại lời nhắn nếu bạn cần trao đổi về dự án hoặc cơ hội hợp tác kỹ thuật."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Direct Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-card-subtle space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-700 font-semibold">
                  Liên hệ trực tiếp
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  Sẵn sàng trao đổi công việc
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bạn có thể sao chép email nhanh hoặc gửi biểu mẫu bên cạnh. Tôi phản hồi trong vòng 24 giờ.
                </p>
              </div>

              {/* One-click email copy card */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-800 truncate select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  onClick={copyEmailToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 text-xs font-medium flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  aria-label="Sao chép email"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Đã chép</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Sao chép</span>
                    </>
                  )}
                </button>
              </div>

              {/* Service Commitments */}
              <div className="space-y-2 pt-1 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Thời gian phản hồi: &lt; 24 giờ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sẵn sàng cho các dự án mới</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-700 hover:text-sky-700 transition-colors font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>github.com/quannguyen89s</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-card-subtle">
              <div className="mb-5 pb-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-sky-600" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Gửi tin nhắn trực tuyến
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  contact.form
                </span>
              </div>

              {isSuccess ? (
                <div className="p-6 text-center space-y-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Check className="w-5 h-5" />
                  </div>
                  <h5 className="text-base font-bold text-slate-900">
                    Đã nhận tin nhắn!
                  </h5>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Cảm ơn bạn đã liên hệ. Tôi sẽ xem xét thông tin và phản hồi sớm nhất.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    variant="outline"
                    size="sm"
                  >
                    Gửi tin nhắn khác
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-medium text-slate-700 mb-1"
                      >
                        Họ và tên <span className="text-sky-600">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Nguyễn Văn A"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${
                          formErrors.name
                            ? 'border-rose-400 focus:border-rose-500'
                            : 'border-slate-200 focus:border-sky-500'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-rose-600 mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-medium text-slate-700 mb-1"
                      >
                        Email liên hệ <span className="text-sky-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors ${
                          formErrors.email
                            ? 'border-rose-400 focus:border-rose-500'
                            : 'border-slate-200 focus:border-sky-500'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-rose-600 mt-1">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Scope */}
                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-xs font-mono font-medium text-slate-700 mb-1"
                    >
                      Lĩnh vực quan tâm
                    </label>
                    <select
                      id="serviceType"
                      value={formState.serviceType}
                      onChange={(e) =>
                        setFormState({ ...formState, serviceType: e.target.value })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-500 cursor-pointer"
                    >
                      <option value="Phát triển Frontend / Web App">
                        Phát triển ứng dụng Web (React / TypeScript)
                      </option>
                      <option value="Xây dựng Backend / API">
                        Xây dựng hệ thống Backend & API (Node.js / Java)
                      </option>
                      <option value="Dự án phần mềm Full-Stack">
                        Dự án phần mềm trọn gói (Full-Stack)
                      </option>
                      <option value="Cơ hội tuyển dụng Software Developer">
                        Cơ hội tuyển dụng Software Developer
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label
                        htmlFor="message"
                        className="block text-xs font-mono font-medium text-slate-700"
                      >
                        Nội dung tin nhắn <span className="text-sky-600">*</span>
                      </label>
                      <span className="text-[10px] font-mono text-slate-400">
                        {formState.message.length} ký tự
                      </span>
                    </div>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Mô tả ngắn gọn về yêu cầu dự án hoặc nội dung trao đổi..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className={`w-full px-3.5 py-2 rounded-xl bg-slate-50 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors resize-y ${
                        formErrors.message
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-slate-200 focus:border-sky-500'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-600 mt-1">
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-1">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                      iconRight={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
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
