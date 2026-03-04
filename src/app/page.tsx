'use client';

import { 
  Zap, 
  Bot, 
  TrendingUp, 
  Home, 
  Trophy, 
  Target,
  Truck,
  MessageSquare,
  Check,
  ArrowRight,
  Mail,
  Shield,
  FileText,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedGridPattern } from '@/components/ui/animated-grid';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Bento Grid Feature Card
function BentoCard({ 
  icon: Icon, 
  title, 
  description, 
  className = "",
  iconColor = "text-blue-400"
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  className?: string;
  iconColor?: string;
}) {
  return (
    <motion.div 
      variants={fadeInUp}
      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c0c14] to-[#080810] border border-white/5 p-6 hover:border-blue-500/20 transition-all duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className={`w-5 h-5 ${iconColor}`} />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050508] text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050508]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">MoveScout</span>
          </div>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
            <a href="#pricing">Get Started</a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 hero-bg overflow-hidden">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.12}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge variant="outline" className="mb-6 px-4 py-2 border-blue-500/30 bg-blue-600/10 text-blue-300 rounded-full">
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                47 companies joined in the last 30 days
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6">
                Automated SMS & Direct Mail for{' '}
                <span className="gradient-text">Moving Companies</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-5">
                Automatically Text Homeowners The Moment They List
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
                Reach motivated sellers and homeowners instantly with automated SMS outreach and direct mail campaigns to fresh listings. 
                No manual work. No missed opportunities. Just qualified leads delivered to your phone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-base font-semibold glow-blue-sm">
                  <a href="#pricing">
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-full px-8 h-14 text-base">
                  <a href="#features">
                    Learn More
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-transparent rounded-[3rem] blur-2xl" />
                <div className="relative animate-float">
                  <Image
                    src="/phone-mockup.png"
                    alt="MoveScout SMS conversation demo"
                    width={340}
                    height={680}
                    className="drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section id="features" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Built for Moving Companies
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Reach homeowners the moment they list their property — before your competition even knows about it
            </p>
          </motion.div>
          
          {/* Bento Grid Layout */}
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Large Feature Card */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c0c14] to-[#080810] border border-white/5 p-8 hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Instant Outreach</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Reach homeowners within minutes of their listing going live, before your competitors even know about it. 
                    Speed is everything in lead generation — be first, close more.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <BentoCard 
              icon={Bot}
              title="Automated Lead Gen"
              description="Set it and forget it. Our system monitors new listings 24/7 and sends personalized texts automatically."
            />
            
            <BentoCard 
              icon={TrendingUp}
              title="Higher Conversion"
              description="SMS has a 98% open rate. Be the first company they hear from when they need moving services."
            />
            
            <BentoCard 
              icon={Truck}
              title="Built for Movers"
              description="Every homeowner selling their property needs to move. Target them at the perfect moment."
            />
            
            <BentoCard 
              icon={Trophy}
              title="Beat Competition"
              description="While others wait days to follow up, you're already building relationships with new leads."
            />
            
            <BentoCard 
              icon={Target}
              title="Qualified Leads"
              description="Only reach homeowners actively selling their homes who need your services right now."
            />
            
            {/* Wide Feature Card */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c0c14] to-[#080810] border border-white/5 p-8 hover:border-blue-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                  </div>
                  <Badge variant="outline" className="border-blue-500/30 bg-blue-600/10 text-blue-300 text-xs">
                    SMS Marketing
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-Time Lead Delivery</h3>
                <p className="text-gray-400 leading-relaxed max-w-xl">
                  Every lead is delivered straight to your phone the moment a conversation starts. 
                  No dashboards to check, no emails to sort — just hot leads ready to close.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 border-blue-500/30 bg-blue-600/10 text-blue-300 rounded-full">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Simple, Transparent Pricing</h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-b from-[#0c0c18] to-[#080810] border-blue-500/20 glow-blue overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <Badge className="mb-4 bg-blue-600 text-white border-0">
                    Launch Special
                  </Badge>
                  <h3 className="text-2xl font-bold mb-3">City Dominator Plan</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl md:text-6xl font-bold">$499</span>
                    <span className="text-gray-400 text-lg">/month</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {[
                    'Unlimited automated SMS outreach',
                    'Real-time leads to your phone',
                    'Priority support + 30-day guarantee'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <p className="text-gray-500 text-sm mb-5">No setup fee • No contracts • Cancel anytime</p>
                  <Button asChild size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 text-base font-semibold">
                    <a href="/get-started">
                      Get Started Today
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                  <p className="text-gray-600 text-xs mt-4">
                    * Current customers stay grandfathered at their old rate forever as our thank-you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="mt-6 bg-[#0a0a12]/50 border-[#1a1a2e]">
              <CardContent className="p-6 text-center">
                <p className="text-gray-400 mb-2">
                  <strong className="text-white">Need more?</strong> Want multiple cities or an entire state with true exclusivity?
                </p>
                <p className="text-gray-400 text-sm">
                  Custom Regional (<span className="text-blue-400 font-medium">$799/mo</span>) and State Dominator (<span className="text-blue-400 font-medium">$999/mo</span>) plans available
                </p>
                <a href="mailto:info@movescout.net" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 text-sm font-medium transition-colors">
                  <Mail className="w-4 h-4" />
                  info@movescout.net
                  <ArrowRight className="w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-blue-600/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to Generate More Leads?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join hundreds of moving companies already using MoveScout to fill their schedules
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 h-14 text-base font-semibold glow-blue-sm">
              <a href="/get-started">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">MoveScout</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                Terms & Conditions
              </a>
              <a href="mailto:info@movescout.net" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
            © 2025 MoveScout LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
