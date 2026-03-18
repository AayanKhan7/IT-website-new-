import { motion } from "motion/react";
import {
  Package,
  Zap,
  Shield,
  Cloud,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";

export function ProductsPage() {
  const products = [
    {
      icon: Package,
      name: "AlphaCRM Pro",
      category: "Customer Relationship Management",
      description:
        "Unified CRM platform to manage leads, automate workflows and gain deep customer insights.",
      features: [
        "Smart Lead Tracking",
        "Sales Automation",
        "Email Integration",
        "Advanced Analytics",
      ],
      price: "$99",
    },
    {
      icon: Cloud,
      name: "CloudSync Suite",
      category: "Cloud Collaboration",
      description:
        "Secure distributed cloud workspace designed for seamless team productivity and file governance.",
      features: [
        "Real-time Collaboration",
        "Enterprise Security",
        "Unlimited Storage",
        "Cross-device Sync",
      ],
      price: "$49",
    },
    {
      icon: Settings,
      name: "AutoFlow ERP",
      category: "Business Operations",
      description:
        "Integrated ERP ecosystem to streamline finance, logistics, HR and enterprise reporting.",
      features: [
        "Inventory Intelligence",
        "Finance Automation",
        "HR Modules",
        "Compliance Ready",
      ],
      price: "Custom",
    },
    {
      icon: Shield,
      name: "SecureAuth",
      category: "Cybersecurity",
      description:
        "Enterprise-grade authentication framework with adaptive AI threat detection.",
      features: [
        "Biometric MFA",
        "SSO Integration",
        "Access Governance",
        "Security Logs",
      ],
      price: "$79",
    },
    {
      icon: Zap,
      name: "QuickDeploy",
      category: "DevOps Platform",
      description:
        "Accelerate development lifecycle with automated CI/CD pipelines and resilient deployments.",
      features: [
        "Auto Deploy Pipelines",
        "Container Orchestration",
        "Live Monitoring",
        "Rollback Control",
      ],
      price: "$149",
    },
  ];

  return (
    <div className="bg-[#f8fafc]">

      {/* ===== HERO ===== */}
      <section className="relative py-16 sm:py-24 md:py-28 bg-gradient-to-br from-[#08152d] via-[#0d1f44] to-[#1a3557] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Powerful Software Products
            <span className="block bg-gradient-to-r from-[#00E0FF] to-[#2E6BFF] bg-clip-text text-transparent">
              Built for Modern Enterprises
            </span>
          </motion.h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10">
            Deploy scalable digital infrastructure and transform the way your
            organization operates, collaborates and innovates.
          </p>

          <Button className="h-12 sm:h-14 px-7 sm:px-8 rounded-full text-base sm:text-lg bg-gradient-to-r from-[#00E0FF] to-[#2E6BFF] shadow-xl">
            Explore Solutions
          </Button>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-10 shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1E5EFF] to-[#2E6BFF] text-white flex items-center justify-center mb-6 shadow-lg">
                  <Icon size={30} />
                </div>

                <span className="text-sm font-semibold text-[#2E6BFF] mb-2">
                  {p.category}
                </span>

                <h3 className="text-2xl font-bold text-[#08152d] mb-3">
                  {p.name}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {p.description}
                </p>

                <div className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 text-sm text-gray-700"
                    >
                      <CheckCircle2 size={16} className="text-[#2E6BFF]" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t">
                  <span className="text-xl font-bold text-[#2E6BFF]">
                    {p.price !== "Custom" ? `${p.price}/mo` : "Custom Pricing"}
                  </span>

                  <button className="flex items-center gap-2 font-semibold text-[#1E5EFF]">
                    Details <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#1E5EFF] to-[#2E6BFF] text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Looking for a Custom Enterprise Solution?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-10 leading-relaxed">
            Our experts design scalable software architectures tailored exactly
            to your business workflows and growth vision.
          </p>

          <Button className="h-12 sm:h-14 px-7 sm:px-10 rounded-full text-base sm:text-lg bg-white text-[#1E5EFF] hover:bg-slate-100 shadow-xl">
            Request Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}