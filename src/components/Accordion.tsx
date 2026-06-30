import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FAQ } from "../types";

interface AccordionItemProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  key?: React.Key;
}

function AccordionItem({ faq, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-brand-border/40 py-6 last:border-none">
      <button
        id={`faq-btn-${faq.id}`}
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group focus:outline-none"
      >
        <span className="font-display text-base sm:text-lg md:text-xl font-medium tracking-tight text-brand-dark group-hover:text-brand-accent transition-colors duration-300 pr-4">
          {faq.question}
        </span>
        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-cream/50 flex items-center justify-center border border-brand-border/40 group-hover:bg-brand-cream group-hover:border-brand-border transition-all duration-300">
          {isOpen ? (
            <Minus className="h-4 w-4 text-brand-dark" />
          ) : (
            <Plus className="h-4 w-4 text-brand-dark" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 16 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-sans text-sm sm:text-base leading-relaxed text-brand-dark/70 max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: FAQ[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>("q1"); // default-open first question for visual hierarchy

  return (
    <div className="flex flex-col w-full border-t border-brand-border/40">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          faq={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
