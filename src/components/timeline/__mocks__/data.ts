import { TimelineItem, Props } from "../Timeline"

export const mockItems: TimelineItem[] = [
  {
    position: "Senior Fullstack Engineer",
    company: {
      label: "Katanox",
      href: "https://www.katanox.com/",
    },
    date: {
      start: "Feb 2025",
      end: "Present",
    },
    description: `• Reduced UI cold-load times from 12.7s -> 2.1s, bundle sizes from 15MB -> 1.7MB and
CI/CD times by up to 76%.
• Migrated the authentication & authorisation flow from Laravel Sanctum/Fortify to
Kotlin and Keycloak, moving towards a unified SSO solution across all platforms.
• Rebuilt the Booking Engine in Kotlin, including availability search, booking creation,
reservation editing and cancellation.
• Improved Frontend engineering standards across the Nx monorepo, enforcing type
checking, linting, unit/E2E testing and automated security audits through CI and
pre-commit workflows.
• Set up shared infra tooling such as MSW API mocking, automated Keycloak theme
releases, reusable CI workflows.
• Contributing across the stack to architectural decisions, code quality, security,
observability and development practices`,
  },
  {
    position: "Independent Financial Trader",
    company: {
      label: "Selfemployed",
      href: "",
    },
    date: {
      start: "Jan 2022",
      end: "Jan 2025",
    },
    description: `• Automation and scripting, building private algorithms, indicators and strategies using TradingView's native language, Pine Script.
    • Interacting with wallets, dApps, CEX and DEX for staking, swapping and trading spot, derivatives and equities.
    • Interpreting complex financial data, identifying actionable patterns and making data-driven decisions.`,
  },
  {
    position: "Senior Frontend Developer",
    company: {
      label: "Jungle Minds",
      href: "https://www.jungleminds.com/",
    },
    date: {
      start: "Jul 2019",
      end: "Jan 2022",
    },
    description: `• Tech Lead for various clients including Tom Holkenborg, Leading Courses (BETA), Rouze and PON Automotive.
    • Rebuilt Jungle Minds’ new portfolio website.
    • Responsible for security audits (XSS, CSRF, privacy leaks, dependency vulnerabilities, pentesting).
    • Responsible for performance audits (Lighthouse reports, optimising bundle size and assets, FPS, repainting, memleaks).
    • Coaching team members, defining code review standards, merging strategies and conventions.`,
  },
  {
    position: "Senior Frontend Developer",
    company: {
      label: "Mirabeau (a Cognizant Digital Business)",
      href: "https://www.cognizant.com/",
    },
    date: {
      start: "Jan 2019",
      end: "Jun 2019",
    },
    description: `• Lead Frontend Developer in charge of building user dashboard for employment mediator Brunel International. Tech stack comprised of React and GraphQL and full integration with Sitecore via JSS services.
    • Additional responsibilities included mentoring colleagues, performing weekly code reviews and holding cross-team workshops.`,
  },
  {
    position: "Frontend Developer",
    company: {
      label: "Mirabeau (a Cognizant Digital Business)",
      href: "https://www.cognizant.com/",
    },
    date: {
      start: "Aug 2017",
      end: "Jun 2019",
    },
    description: `• Built the new applicant flow for Brunel International. I was tasked with setting up the project, implementing custom form validation throughout, tracking user behaviour and last, but not least, making things pretty.
    • Merged multiple internal projects into new monorepo structure (using Yarn Workspaces and Lerna for automated scripting).
    • Contributed regularly to Mirabeau’s open-source boilerplate repo.
    • Reviewed applicants and carried out job interviews.`,
  },
  {
    position: "Frontend Developer",
    company: {
      label: "Propeller Communications",
      href: "https://www.propeller.co.uk/",
    },
    date: {
      start: "Jul 2015",
      end: "Jul 2017",
    },
    description: `• Flexible Frontend role where I occasionally got to wear the almighty Fullstack hat. I built websites in FuelPHP and WordPress, while also managing a few multi-site templates for hospitality clients.
    • Workflow included automation via Gulp, BEM methodology using SASS and version control through Git.`,
  },
  {
    position: "Web Designer & Developer",
    company: {
      label: "Freelance",
      href: "",
    },
    date: {
      start: "Jun 2013",
      end: "Jul 2015",
    },
    description: `Responsible for project planning with clients, negotiating contracts, developing wireframes, mock-ups and highend designs, as well as coding and maintaining websites.`,
  },
  {
    position: "Concept Artist & Illustrator",
    company: {
      label: "Freelance",
      href: "",
    },
    date: {
      start: "May 2012",
      end: "May 2015",
    },
    description: `• Designed album covers for Toadstool - The Visitors, Cavendish - Positive Trailers and New Paradigm - Faultlines
    • Worked on several book covers and character concepts for various novelists and authors
    • Commisioned for a variety of concept art and illustration pieces, including D&D characters and fan art`,
  },
]

export const mockData: Props = {
  items: mockItems,
}
