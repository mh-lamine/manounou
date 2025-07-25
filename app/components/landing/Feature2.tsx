import { ChartBarIcon, ExclamationTriangleIcon, HandRaisedIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Emergency Ready Mode",
    description:
      "One-tap access to allergies, medications, and emergency contacts – even offline. Nannies report feeling 3x more confident on the job.",
    icon: ExclamationTriangleIcon,
  },
  {
    name: "Auto-Protected Documents",
    description:
      "School forms, vaccine records, and contracts stored with bank-level encryption. GDPR compliant so you never risk fines.",
    icon: LockClosedIcon,
  },
  {
    name: "Nanny Performance Insights",
    description:
      "See punctuality trends, activity logs, and payment history. Private scorecards help you make informed decisions.",
    icon: ChartBarIcon,
  },
  {
    name: "Guilt-Free Cancellation Shield",
    description:
      "Auto-enforced notice periods and fair payment rules keep relationships drama-free.",
    icon: HandRaisedIcon,
  },
];

export default function Feature2() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Built for trust
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            Security and automation designed for busy families
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            Manounou protects sensitive data while saving you hours of
            coordination every week.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
