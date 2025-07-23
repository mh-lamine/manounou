import {
  BellIcon,
  CalendarDaysIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Smart Calendar Sync",
    description:
      "Visualize all activities, vacations, and nanny availability in one shared calendar. Color-coded by child or priority.",
    icon: CalendarDaysIcon,
  },
  {
    name: "Secure Document Hub",
    description:
      "Upload medical records, school forms, or contracts. Control who accesses what—with GDPR-compliant encryption.",
    icon: LockClosedIcon,
  },
  {
    name: "Real-Time Updates",
    description:
      "Get email notifications for schedule changes, new documents, or urgent alerts—so everyone stays in the loop.",
    icon: BellIcon,
  },
];

export default function Feature1() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Simplify childcare
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Organize schedules, documents, and communication effortlessly
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                Manounou replaces chaotic WhatsApp threads and paper notes with
                a secure, all-in-one platform for parents and nannies.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
