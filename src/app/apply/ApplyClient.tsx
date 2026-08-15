'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROGRAMS_LIST } from '@/lib/constants';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { COUNTRY_CODES } from '@/lib/countryCodes';

const getFlagEmoji = (code: string) => {
  // Ensure we have a '+' prefix for lookup
  let cleanCode = code.replace(/[^0-9+]/g, '');
  if (cleanCode && !cleanCode.startsWith('+')) {
    cleanCode = '+' + cleanCode;
  }
  return COUNTRY_CODES[cleanCode] || '🌐';
};

export default function ApplyClient() {
  const [formData, setFormData] = useState({
    prefix: 'Mr.',
    name: '',
    gender: 'Male',
    email: '',
    countryCode: '+91',
    phone: '',
    qualification: 'Undergraduate',
    status: 'Final Year College Student',
    program: PROGRAMS_LIST[0].title,
    expertise: 'Beginner',
    street: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
    linkedin: '',
    source: '',
    needsCounseling: 'Yes, please arrange one',
    reason: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  useEffect(() => {
    if (submitStatus === 'success') {
      if (countdown > 0) {
        const timer = setTimeout(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        router.push('/');
      }
    }
  }, [submitStatus, countdown, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'countryCode') {
      // Automatically add '+' if missing and not empty
      let formattedCode = value;
      // Allow empty string to clear the field without adding '+'
      if (formattedCode && !formattedCode.startsWith('+')) {
        formattedCode = '+' + formattedCode.replace(/[^0-9]/g, '');
      }
      setFormData(prev => ({ ...prev, [name]: formattedCode }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/smartminds.boa@proton.me', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Candidate Registration - ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          prefix: 'Mr.',
          name: '',
          gender: 'Male',
          email: '',
          countryCode: '+91',
          phone: '',
          qualification: 'Undergraduate',
          status: 'Final Year College Student',
          program: PROGRAMS_LIST[0].title,
          expertise: 'Beginner',
          street: '',
          city: '',
          state: '',
          country: '',
          zipcode: '',
          linkedin: '',
          source: '',
          needsCounseling: 'Yes, please arrange one',
          reason: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#071340] relative overflow-hidden font-[family-name:var(--font-body)] transition-colors duration-300">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
            Admissions Open
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-[family-name:var(--font-heading)] leading-tight">
            Accelerate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-[#FF7A00] dark:from-blue-400 dark:to-[#FF7A00]">
              Engineering Career
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Apply now to join the next cohort. Seats are limited to ensure personalized mentorship.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="w-full max-w-2xl"
        >
          <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
            
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Application Received!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md">
                    Thank you for applying. Our admissions team will review your profile and contact you within 24-48 hours.
                  </p>
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Redirecting to homepage in {countdown} seconds...
                    </p>
                    <button 
                      onClick={() => router.push('/')}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium flex items-center gap-2"
                    >
                      Return to Homepage Now
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  
                  {/* Name Row */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="space-y-2 md:col-span-1">
                      <label htmlFor="prefix" className="text-sm font-medium text-gray-700 dark:text-gray-300">Prefix *</label>
                      <select 
                        id="prefix"
                        name="prefix"
                        required
                        value={formData.prefix}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                      >
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof.">Prof.</option>
                      </select>
                    </div>
                    <div className="space-y-2 md:col-span-3">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Gender & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="gender" className="text-sm font-medium text-gray-700 dark:text-gray-300">Gender *</label>
                      <select 
                        id="gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Non-Binary">Non-Binary</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Row */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number *</label>
                    <div className="flex bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden focus-within:ring-1 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all">
                      <div className="flex items-center pl-4 py-3 bg-gray-100/50 dark:bg-white/5 border-r border-gray-200 dark:border-white/10">
                        <span className="text-lg mr-2 select-none" title="Country Flag">{getFlagEmoji(formData.countryCode)}</span>
                        <input 
                          type="text" 
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-12 bg-transparent text-gray-900 dark:text-white focus:outline-none p-0 border-none"
                          placeholder="+1"
                        />
                      </div>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none border-none"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>

                  {/* Qualification & Status Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="qualification" className="text-sm font-medium text-gray-700 dark:text-gray-300">Highest Qualification *</label>
                      <select 
                        id="qualification"
                        name="qualification"
                        required
                        value={formData.qualification}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                      >
                        <option value="High School">High School</option>
                        <option value="Undergraduate">Undergraduate</option>
                        <option value="Postgraduate">Postgraduate</option>
                        <option value="PhD / Doctorate">PhD / Doctorate</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="status" className="text-sm font-medium text-gray-700 dark:text-gray-300">Current Status *</label>
                      <select 
                        id="status"
                        name="status"
                        required
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                      >
                        <option value="Final Year College Student">Final Year College Student</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="None of the above">None of the above</option>
                      </select>
                    </div>
                  </div>

                  {/* Program & Expertise Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="program" className="text-sm font-medium text-gray-700 dark:text-gray-300">Program of Interest *</label>
                      <select 
                        id="program"
                        name="program"
                        required
                        value={formData.program}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                      >
                        {PROGRAMS_LIST.map(p => (
                          <option key={p.id} value={p.title}>{p.title}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="expertise" className="text-sm font-medium text-gray-700 dark:text-gray-300">Level of Expertise *</label>
                      <select 
                        id="expertise"
                        name="expertise"
                        required
                        value={formData.expertise}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                      >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                    </div>
                  </div>

                  {/* Address Fields */}
                  <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Address *</label>
                    <input 
                      type="text" 
                      id="street"
                      name="street"
                      required
                      value={formData.street}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="Street Address, Lane, Apt, etc."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="City"
                      />
                      <input 
                        type="text" 
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="State / Province"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input 
                        type="text" 
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="Country"
                      />
                      <input 
                        type="text" 
                        name="zipcode"
                        required
                        value={formData.zipcode}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                        placeholder="ZIP / Postal Code"
                      />
                    </div>
                  </div>

                  {/* LinkedIn Row */}
                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn Profile URL</label>
                    <input 
                      type="url" 
                      id="linkedin"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="https://linkedin.com/in/johndoe"
                    />
                  </div>

                  {/* Source & Counseling Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="source" className="text-sm font-medium text-gray-700 dark:text-gray-300">Where did you hear about us? *</label>
                      <select 
                        id="source"
                        name="source"
                        required
                        value={formData.source}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                      >
                        <option value="" disabled>Select an option</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Friend/Colleague">Friend/Colleague</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="needsCounseling" className="text-sm font-medium text-gray-700 dark:text-gray-300">Need a counseling session? *</label>
                      <select 
                        id="needsCounseling"
                        name="needsCounseling"
                        required
                        value={formData.needsCounseling}
                        onChange={handleChange}
                        className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none"
                      >
                        <option value="Yes, please arrange one">Yes, please arrange one</option>
                        <option value="No, I have decided">No, I have decided</option>
                      </select>
                    </div>
                  </div>

                  {/* Why join */}
                  <div className="space-y-2">
                    <label htmlFor="reason" className="text-sm font-medium text-gray-700 dark:text-gray-300">Why do you want to join this program? *</label>
                    <textarea 
                      id="reason"
                      name="reason"
                      required
                      rows={3}
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Tell us about your background and career goals..."
                    />
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700 dark:text-red-200">
                        There was an error submitting your application. Please try again or contact us directly at smartminds.boa@proton.me.
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-[#FF7A00] hover:from-blue-700 hover:to-[#FF7A00]/90 text-white font-medium py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center pt-4">
                    By submitting this form, you agree to our <Link href="/privacy-policy" className="hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-2">Privacy Policy</Link> and <Link href="/terms-of-service" className="hover:text-gray-700 dark:hover:text-gray-300 underline underline-offset-2">Terms of Service</Link>.
                  </p>

                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
