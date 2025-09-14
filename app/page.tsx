import { Check } from "lucide-react";

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    price: { monthly: "$49", yearly: "$490" },
    description: "For small projects and prototypes.",
    features: ["Up to 1,000 users", "Basic analytics", "48-hour support response time"],
  },
  {
    name: "Pro",
    id: "tier-pro",
    href: "#",
    price: { monthly: "$99", yearly: "$990" },
    description: "For growing businesses and startups.",
    features: [
      "Up to 10,000 users",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing integrations",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    price: "Contact us",
    description: "For large-scale applications and custom needs.",
    features: [
      "Unlimited users",
      "Custom analytics and reporting",
      "Dedicated account manager",
      "Custom integrations",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The right price for you, <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Choose a plan that fits your needs. All plans come with a 14-day free trial.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 ${tier.featured ? 'lg:col-span-1 lg:row-start-1 lg:row-end-3' : ''}`}>
                  <div>
                    <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      {typeof tier.price === 'string' ? (
                        <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold tracking-tight text-gray-900">{tier.price.monthly}</span>
                          <span className="text-base font-semibold leading-7 text-gray-600">/month</span>
                        </>
                      )}
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-600">{tier.description}</p>
                    <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <Check className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={`mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 ${tier.featured ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300'}`}>
                    Get started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
