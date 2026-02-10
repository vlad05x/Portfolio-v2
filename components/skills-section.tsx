"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import { iconMap } from "@/lib/icon-map";
import type { ServicesDocument } from "@/types/services";

type SkillsSectionProps = {
  data: ServicesDocument;
};

export default function SkillsSection({ data }: SkillsSectionProps) {
  if (!data) return null;

  const { title, subtitle, cards, technologies } = data;
  const safeTechnologies = technologies ?? [];


  return (
    <section id="services" className="bg-black/50 py-20">
      <div className="container mx-auto px-4">

        {/* ================= Title ================= */}
        <motion.h2
          className="mb-4 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            className="mx-auto mb-12 max-w-3xl text-center text-lg text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* ================= Services Cards ================= */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((category, index) => {
            const CategoryIcon =
              category.iconName ? iconMap[category.iconName] : null;

            return (
              <motion.div
                key={category._key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full bg-zinc-800/50 border-zinc-700 transition-colors hover:border-[#9ccc3d]/50">
                  <CardContent className="p-6">

                    {/* Header */}
                    <div className="mb-6 flex items-center">
                      {CategoryIcon && (
                        <CategoryIcon className="mr-3 h-6 w-6 text-[#9ccc3d]" />
                      )}
                      <h3 className="text-xl font-semibold text-white">
                        {category.categoryTitle}
                      </h3>
                    </div>

                    {/* Items */}
                    <div className="space-y-3">
                      {category.items.map((service) => {
                        const ServiceIcon =
                          service.iconName ? iconMap[service.iconName] : null;

                        return (
                          <TooltipProvider key={service._key}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <motion.div
                                  className="group flex cursor-pointer items-start rounded-lg bg-zinc-900/50 p-3 transition hover:bg-[#9ccc3d]/10"
                                  whileHover={{ x: 5 }}
                                >
                                  {ServiceIcon && (
                                    <ServiceIcon className="mr-3 mt-1 h-5 w-5 text-[#9ccc3d] transition-colors group-hover:text-white" />
                                  )}

                                  <div>
                                    <h4 className="font-medium text-white transition-colors group-hover:text-[#9ccc3d]">
                                      {service.title}
                                    </h4>

                                    {service.description && (
                                      <p className="mt-1 text-sm text-zinc-400">
                                        {service.description}
                                      </p>
                                    )}
                                  </div>
                                </motion.div>
                              </TooltipTrigger>

                              <TooltipContent
                                side="right"
                                className="border-zinc-700 bg-zinc-800 text-white"
                              >
                                {service.title}
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        );
                      })}
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* ================= Technologies & Tools ================= */}
        {safeTechnologies?.length > 0 && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-zinc-800/50 border-zinc-700">
              <CardContent className="p-8">
                <h3 className="mb-8 text-center text-xl font-semibold text-white">
                  Technologies & Tools
                </h3>

                <div className="grid gap-6 md:grid-cols-3">
                  {safeTechnologies.map((group, groupIndex) => {
                    const GroupIcon =
                      group.iconName ? iconMap[group.iconName] : null;

                    return (
                      <motion.div
                        key={group._key}
                        className="rounded-xl border border-zinc-700 bg-zinc-900/50 p-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: groupIndex * 0.1 }}
                        whileHover={{
                          borderColor: "#9ccc3d",
                          boxShadow: "0 0 20px rgba(156, 204, 61, 0.1)",
                        }}
                      >
                        {/* Group header */}
                        <div className="mb-4 flex items-center">
                          {GroupIcon && (
                            <div className="mr-3 rounded-lg bg-[#9ccc3d]/10 p-2">
                              <GroupIcon className="h-5 w-5 text-[#9ccc3d]" />
                            </div>
                          )}
                          <h4 className="text-lg font-semibold text-white">
                            {group.title}
                          </h4>
                        </div>

                        {/* Technologies list */}
                        <div className="space-y-3">
                          {group.items.map((tech, techIndex) => {
                            const TechIcon =
                              tech.iconName ? iconMap[tech.iconName] : null;

                            return (
                              <motion.div
                                key={tech._key}
                                className="group flex items-center justify-between rounded-lg bg-zinc-800/50 p-3 transition hover:bg-[#9ccc3d]/5"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.3,
                                  delay: techIndex * 0.05,
                                }}
                                whileHover={{ x: 5 }}
                              >
                                <div>
                                  <span className="block text-sm font-medium text-white transition-colors group-hover:text-[#9ccc3d]">
                                    {tech.name}
                                  </span>
                                  {tech.description && (
                                    <span className="text-xs text-zinc-400">
                                      {tech.description}
                                    </span>
                                  )}
                                </div>

                                {TechIcon && (
                                  <TechIcon className="h-4 w-4 text-[#9ccc3d]/60 transition-colors group-hover:text-[#9ccc3d]" />
                                )}
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

      </div>
    </section>
  );
}
