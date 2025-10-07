import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons"
import { BentoCard, BentoGrid } from "../ui/bento-grid"
// import { SparklesText } from "../ui/sparkles-text"


const features = [
  {
    Icon: FileTextIcon,
    name: "Describe Your Event",
    description: "Tell your AI agent what type of event you want to host and get a full event plan instantly.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: InputIcon,
    name: "Customize Details",
    description: "Edit event agenda, venue, date, and guest list with an intuitive interface.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: GlobeIcon,
    name: "Send Invitations",
    description: "Automatically generate personalized invites and send them to your guests.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: CalendarIcon,
    name: "Track RSVPs",
    description: "See guest responses in real time and manage attendees effortlessly.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Get Reminders",
    description: "Receive timely reminders and notifications so your event runs smoothly.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
]

export function BentoDemo() {
  return (
    <div className="mt-20 mb-20">
      
    <BentoGrid className="lg:grid-rows-3 w-[60%] justify-center mx-auto">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
    </div>
  )
}
