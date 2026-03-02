'use client';

import React from 'react';
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "MoveScout completely changed how we get leads. We went from chasing Craigslist ads to having homeowners text us back within minutes of listing. Booked 12 moves in our first month.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Marcus Johnson",
    role: "Owner, Johnson Family Movers",
  },
  {
    text: "The ROI is insane. We're spending $499/month and closing $15-20k in moves. Being first to contact sellers when they list is a game-changer. Our competitors don't even know what hit them.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "David Chen",
    role: "CEO, Pacific Coast Moving",
  },
  {
    text: "I was skeptical about SMS marketing, but the results speak for themselves. 40% response rate on texts vs 2% on our old email campaigns. MoveScout pays for itself in the first week.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sarah Mitchell",
    role: "Operations Manager, Swift Relocations",
  },
  {
    text: "We doubled our bookings in 60 days. The automation means I'm not spending hours cold calling anymore. Leads come straight to my phone ready to schedule estimates.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Mike Rodriguez",
    role: "Owner, Rodriguez Moving Co.",
  },
  {
    text: "Finally, a lead gen system that actually works for movers. The quality of leads is incredible — these are real homeowners who need to move, not tire-kickers.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Jennifer Walsh",
    role: "Partner, Two Men & A Truck (Franchise)",
  },
  {
    text: "MoveScout helped us expand into three new territories. The instant notifications mean we never miss a lead. Our close rate jumped from 15% to 35%.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Robert Taylor",
    role: "Founder, Premier Moving Services",
  },
  {
    text: "Best investment we've made for the business. Setup took 10 minutes, and we got our first lead the same day. Support team is responsive and actually helpful.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Amanda Foster",
    role: "Co-Owner, Foster & Sons Moving",
  },
  {
    text: "We tried every lead source — Thumbtack, Angi, buying lists. Nothing compared to MoveScout. These leads are warm because we reach them first, not after 10 other companies.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Lisa Park",
    role: "Marketing Director, Atlas Moving Group",
  },
  {
    text: "From startup to 6 trucks in 8 months. MoveScout gave us the consistent lead flow we needed to scale. Can't imagine running our business without it now.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Chris Bennett",
    role: "Owner, Bennett Brothers Moving",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({ 
  className = "", 
  testimonials, 
  duration = 10 
}: { 
  className?: string; 
  testimonials: Testimonial[]; 
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : "false"}
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c0c14] to-[#080810] max-w-xs w-full transition-all duration-300 cursor-default select-none group hover:border-blue-500/30"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-gray-400 leading-relaxed font-normal m-0 text-sm">
                    &ldquo;{text}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={`${name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-blue-500/30 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-white text-sm">
                        {name}
                      </cite>
                      <span className="text-xs leading-5 tracking-tight text-gray-500 mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section 
      aria-labelledby="testimonials-heading" 
      className="py-24 px-6 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-blue-500/30 py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-blue-300 bg-blue-600/10">
              Testimonials
            </div>
          </div>
          <h2 
            id="testimonials-heading" 
            className="text-3xl md:text-4xl font-bold tracking-tight mt-6 text-center text-white"
          >
            Trusted by Moving Companies Nationwide
          </h2>
          <p className="text-center mt-5 text-gray-400 text-lg leading-relaxed max-w-sm">
            See why hundreds of movers choose MoveScout to fill their schedules
          </p>
        </div>
        
        <div 
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
