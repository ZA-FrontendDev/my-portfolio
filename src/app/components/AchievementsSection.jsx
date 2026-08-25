"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CodeBracketIcon,
  UsersIcon,
  TrophyIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
    icon: CodeBracketIcon,
    color: "from-pink-custom to-purple-custom",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
    icon: UsersIcon,
    color: "from-purple-custom to-blue-500",
  },
  {
    metric: "Awards",
    value: "7",
    icon: TrophyIcon,
    color: "from-amber-400 to-pink-custom",
  },
  {
    metric: "Years",
    value: "5",
    icon: ClockIcon,
    color: "from-emerald-400 to-cyan-500",
  },
];

const AchievementsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="py-12 md:py-16"
      aria-label="Achievements"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 sm:p-8"
      >
        <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-pink-custom/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 w-64 h-64 bg-purple-custom/15 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
          {achievementsList.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center text-center p-4 rounded-xl hover:bg-white/[0.03] transition-colors group"
              >
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${achievement.color} mb-3 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-white text-3xl sm:text-4xl font-extrabold flex flex-row items-center tracking-tight">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-3xl sm:text-4xl font-extrabold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-sm mt-1 font-medium tracking-wide uppercase">
                  {achievement.metric}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
