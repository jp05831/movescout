'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowLeft, Send, CheckCircle, Building2, Phone, Mail, User, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission - replace with actual form handler
    // You can integrate with Formspree, Netlify Forms, or your own backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#050508] text-white flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold mb-4">You&apos;re All Set!</h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Thanks for your interest in MoveScout. We&apos;ll be in touch within 24 hours to get you started.
          </p>
          <Button asChild variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">MoveScout</span>
          </Link>
          <Button asChild variant="ghost" className="text-gray-400 hover:text-white">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Get Started with MoveScout
            </h1>
            <p className="text-gray-400 text-lg">
              Fill out the form below and we&apos;ll get you set up within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-b from-[#0c0c18] to-[#080810] border-white/5">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full bg-[#0a0a12] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name *
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        className="w-full bg-[#0a0a12] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                        placeholder="ABC Moving Co."
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-[#0a0a12] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-[#0a0a12] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* City/Market */}
                  <div>
                    <label htmlFor="market" className="block text-sm font-medium text-gray-300 mb-2">
                      Target City/Market *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                      <input
                        type="text"
                        id="market"
                        name="market"
                        required
                        className="w-full bg-[#0a0a12] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors"
                        placeholder="Dallas, TX"
                      />
                    </div>
                  </div>

                  {/* Business Type */}
                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-2">
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      required
                      className="w-full bg-[#0a0a12] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#0a0a12]">Select your business type</option>
                      <option value="moving" className="bg-[#0a0a12]">Moving Company</option>
                      <option value="roofing" className="bg-[#0a0a12]">Roofing Contractor</option>
                      <option value="both" className="bg-[#0a0a12]">Both</option>
                      <option value="other" className="bg-[#0a0a12]">Other</option>
                    </select>
                  </div>

                  {/* Plan Interest */}
                  <div>
                    <label htmlFor="plan" className="block text-sm font-medium text-gray-300 mb-2">
                      Plan Interest
                    </label>
                    <select
                      id="plan"
                      name="plan"
                      className="w-full bg-[#0a0a12] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="city" className="bg-[#0a0a12]">City Dominator - $499/mo</option>
                      <option value="regional" className="bg-[#0a0a12]">Custom Regional - $799/mo</option>
                      <option value="state" className="bg-[#0a0a12]">State Dominator - $999/mo</option>
                      <option value="unsure" className="bg-[#0a0a12]">Not sure yet</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-14 text-base font-semibold mt-6 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Get Started
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </Button>

                  <p className="text-gray-500 text-xs text-center mt-4">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Alternative */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center text-gray-500 text-sm mt-8"
          >
            Prefer email? Reach us at{' '}
            <a href="mailto:info@movescout.net" className="text-blue-400 hover:text-blue-300 transition-colors">
              info@movescout.net
            </a>
          </motion.p>
        </div>
      </div>
    </main>
  );
}
