import { TimelineItem, Props } from "../Timeline"

export const mockItems: TimelineItem[] = [
  {
    position: "Senior Front-End Developer",
    company: {
      label: "Jungle Minds",
      url: "https://www.jungleminds.com/",
    },
    date: {
      start: "Jul 2019",
      end: "Jan 2021",
    },
    description: `• Tech Lead for clients such as Tom Holkenborg, Leading Courses (BETA), Rouze and PON Automotive.
        • Rebuilt Jungle Minds’ new portfolio website.
        • Responsible for security audits (XSS, CSRF, privacy leaks, dependency vulnerabilities, pentesting).
        • Responsible for performance audits (Lighthouse reports, optimising bundle size and assets, FPS, repainting, memleaks).
        • Coaching team members.
        • Defining code review standards, merging strategies and conventions.`,
  },
  {
    position: "Senior Front-End Developer",
    company: {
      label: "Mirabeau",
      url: "https://www.mirabeau.nl/",
    },
    date: {
      start: "Jan 2019",
      end: "Jun 2019",
    },
    description: `• Lead Front-End Developer in charge of building user dashboard for employment mediator Brunel International. Tech stack comprised of React and GraphQL and full integration with Sitecore via JSS services.
        • Additional responsibilities included mentoring colleagues, performing weekly code reviews and holding cross-team workshops.`,
  },
  {
    position: "Front-End Developer",
    company: {
      label: "Mirabeau",
      url: "https://www.mirabeau.nl/",
    },
    date: {
      start: "Aug 2017",
      end: "Jun 2019",
    },
    description: `• Built the new applicant flow for Brunel International. I was tasked with setting up the project, implementing custom form validation throughout, tracking user behaviour and last, but not least, making things pretty.
        • Reviewed applicants and carried out job interviews.
        • Contributed regularly to Mirabeau’s open-source boilerplate repo.`,
  },
  {
    position: "Front-End Developer",
    company: {
      label: "Propeller Communications",
      url: "https://www.propeller.co.uk/",
    },
    date: {
      start: "Jul 2015",
      end: "Jul 2017",
    },
    description: `• Flexible Front-End role where I occasionally got to wear the almighty full-stack hat. I built websites in FuelPHP and WordPress, while also managing a few multi-site templates for hospitality clients.
        • Workflow included automation via Gulp, BEM methodology using
        SASS and version control through Git.`,
  },
]

export const mockData: Props = {
  items: mockItems,
}
