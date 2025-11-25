'use client';

import { useState } from 'react';

type FormData = {
  service: string[];
  serviceOther: string;
  addOns: string[];
  business: string;
  businessOther: string;
  payment: string;
  features: string[];
  budget: string;
  source: string;
  sourceOther: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
};

const defaultForm: FormData = {
  service: [],
  serviceOther: '',
  addOns: [],
  business: '',
  businessOther: '',
  payment: '',
  features: [],
  budget: '',
  source: '',
  sourceOther: '',
  name: '',
  email: '',
  phone: '',
  notes: '',
};

const totalSteps = 9;

export default function QuestionnaireForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const progress = (step / totalSteps) * 100;

  const handleMultiChoice = (field: keyof FormData, value: string) => {
    setForm((prev) => {
      const current = prev[field] as string[];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter((v) => v !== value) };
      }
      return { ...prev, [field]: [...current, value] };
    });
  };

  const handleSingleChoice = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleTextChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? 'Submission failed');
      }

      setSubmitted(true);
      setForm(defaultForm);
      setStep(1);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const goNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const goPrev = () => {
    if (step > 1) setStep(step - 1);
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-[#0b1915] flex items-center justify-center px-4 py-16">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-12 max-w-2xl text-center">
          <p className="text-teal-300 uppercase tracking-[0.3em] text-xs mb-4">Success</p>
          <h1 className="text-4xl font-bold text-white mb-4">We got your details!</h1>
          <p className="text-white/70 mb-8">
            Thanks for filling out the questionnaire. Our team will review your submission and reach out within 24-48 hours with a tailored proposal.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold"
          >
            Start Over
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#0b1915] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-white/60 text-sm mt-3">
            Step {step} of {totalSteps}
          </p>
        </div>

        <form onSubmit={(e) => (step === totalSteps ? handleSubmit(e) : e.preventDefault())} className="space-y-8">
          {/* Step 1: Service Type */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">What service are you looking for?</h2>
              <div className="space-y-3">
                {['Simple Landing Page', 'E-commerce', 'Custom Backend Program', 'Others'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.service.includes(option)}
                      onChange={() => handleMultiChoice('service', option)}
                      className="w-5 h-5 rounded bg-white/10 accent-teal-500"
                    />
                    <span className="text-white/80">{option}</span>
                  </label>
                ))}
              </div>
              {form.service.includes('Others') && (
                <input
                  type="text"
                  placeholder="Please specify the service you're looking for..."
                  value={form.serviceOther}
                  onChange={(e) => handleTextChange('serviceOther', e.target.value)}
                  className="w-full px-4 py-3 rounded bg-white/10 text-white placeholder-white/50 border border-white/20 focus:border-teal-500 outline-none transition"
                />
              )}
            </div>
          )}

          {/* Step 2: Add-ons */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Are you also looking for these? (Optional)</h2>
              <div className="space-y-3">
                {['Professional email setup', 'Domain registration', 'No, not really'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.addOns.includes(option)}
                      onChange={() => handleMultiChoice('addOns', option)}
                      className="w-5 h-5 rounded bg-white/10 accent-teal-500"
                    />
                    <span className="text-white/80">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Business Type */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">What's your business about?</h2>
              <div className="space-y-3">
                {['Construction', 'Beauty', 'Finance','Legal', 'Others'].map((option) => (
                  <div key={option}>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="business"
                        value={option}
                        checked={form.business === option}
                        onChange={() => handleSingleChoice('business', option)}
                        className="w-5 h-5 accent-teal-500"
                      />
                      <span className="text-white/80">{option}</span>
                    </label>
                    {option === 'Others' && form.business === 'Others' && (
                      <input
                        type="text"
                        value={form.businessOther}
                        onChange={(e) => handleTextChange('businessOther', e.target.value)}
                        placeholder="Please specify"
                        className="mt-2 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Payment Type */}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Which payment do you prefer?</h2>
              <div className="space-y-3">
                {['Upfront payment', 'Monthly installment', "Doesn't matter"].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value={option}
                      checked={form.payment === option}
                      onChange={() => handleSingleChoice('payment', option)}
                      className="w-5 h-5 accent-teal-500"
                    />
                    <span className="text-white/80">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Features */}
          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">What features would you like?</h2>
              <div className="space-y-3">
                {['Contact form', 'Google maps integration', 'Booking system', 'Online payment', 'Automatic quote/invoicing system'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.features.includes(option)}
                      onChange={() => handleMultiChoice('features', option)}
                      className="w-5 h-5 rounded bg-white/10 accent-teal-500"
                    />
                    <span className="text-white/80">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Budget */}
          {step === 6 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">What's your budget?</h2>
              <div className="space-y-3">
                {['I want you to work for free', '$500 - $1,500', '$1,500 - $3,000', '$3,000+'].map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="budget"
                      value={option}
                      checked={form.budget === option}
                      onChange={() => handleSingleChoice('budget', option)}
                      className="w-5 h-5 accent-teal-500"
                    />
                    <span className="text-white/80">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Source */}
          {step === 7 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">How did you hear about us?</h2>
              <div className="space-y-3">
                {['Insta', 'FB', 'LinkedIn', 'Google', 'Word of Mouth', 'Friends & family', 'Others'].map((option) => (
                  <div key={option}>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="source"
                        value={option}
                        checked={form.source === option}
                        onChange={() => handleSingleChoice('source', option)}
                        className="w-5 h-5 accent-teal-500"
                      />
                      <span className="text-white/80">{option}</span>
                    </label>
                    {option === 'Others' && form.source === 'Others' && (
                      <input
                        type="text"
                        value={form.sourceOther}
                        onChange={(e) => handleTextChange('sourceOther', e.target.value)}
                        placeholder="Please specify"
                        className="mt-2 w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 8: Contact Info */}
          {step === 8 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Contact info</h2>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleTextChange('name', e.target.value)}
                placeholder="Name *"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleTextChange('email', e.target.value)}
                placeholder="Email *"
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
              />
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleTextChange('phone', e.target.value)}
                placeholder="Phone (optional)"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50"
              />
            </div>
          )}

          {/* Step 9: Additional Notes */}
          {step === 9 && (
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Any additional notes?</h2>
              <textarea
                value={form.notes}
                onChange={(e) => handleTextChange('notes', e.target.value)}
                placeholder="Tell us anything else we should know..."
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 resize-none"
              />
            </div>
          )}

          {error && <p className="text-red-400 text-sm">{error}</p>}

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-between pt-8">
            <button
              type="button"
              onClick={goPrev}
              disabled={step === 1}
              className="px-6 py-3 rounded-lg bg-white/10 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            {step < totalSteps ? (
              <button
                type="button"
                onClick={goNext}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading || !form.name || !form.email}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-semibold disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
