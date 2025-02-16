---
title: WRI 2024 Website Resedign Case Study
---

Scroll for the summary. Here are a few Quick Links: {% .lead %}

{% quick-links %}

{% quick-link title="Jamstack Delivers!" icon="lightbulb" href="/docs/best-stack" description="What is Jamstack? How does modern website technology help to deliver these results?" /%}

{% quick-link title="WRI 2024 Design & Build" icon="presets" href="/docs/nextjs-react" description="Learn how we analyzed historic user behavior to help us develop a better online experience!" /%}

{% quick-link title="Integration Magic: Cvent & Storyblok" icon="plugins" href="/docs/cvent-integration" description="Witness the power of key integrations for such as Cvent, powerful event software, and speaker content using a flexible CMS named Storyblok." /%}

{% quick-link title="Case Study Wrap-up" icon="installation" href="/docs/goals-project-scope" description="I wrap up the project highlights here, from goals to design to the final build and launch! I also touch on possible future enhancements." /%}

{% /quick-links %}

# Executive Summary

![We Broke Records!](/images/gravital-slide-wri.png)

## 🎉 We broke records!

Welcome to the Wheel Rail Interaction (WRI) 2024 website redesign case study. This site showcases how I worked with the Wheel Rail Seminars team to redesign the company's event website, which began in early 2023 and culminated in the WRI 2024 Conference held in Chicago in May 2024. I share our vision to enhance the company's brand, better showcase the event speakers, improve technical performance, and help users more easily navigate and register for the event.

Included are details on how we achieved our key goals and delivered significant improvements to our core KPIs. Most notably, we increased traffic by 12%, boosted conversions by an impressive 22.5%, and saw a remarkable 30% rise in overall attendees. The WRI 2024 Conference broke several attendance records! For two of the three seminars, the Rail Transit Seminar and the Principles Course, we achieved the highest attendance on record, going back 29 years. Enjoy!

## First, quick introductions

![The Team!](/images/wrs-seattle.png)

I'm honored to be working with the talented [WRS Team](https://sparker888.com/articles/joining-forces-with-wheel-rail-seminars). While I served as the project producer, it was the combined efforts of President Gordon Bachinsky, Director of Operations Brandon Koenig, Director of Marketing & Events Erica Koenig, and Web Designer Randy Karey that made it all possible. I also work peripherally with Bob Tuzik, Executive Program Director, who has played a huge role in the program's success. He and his son, Jeff Tuzik, communicate amazing engineering stories within the community on their partner website, [Interface Journal](https://interface-journal.com), which is highlighted on all WRI websites.

---

## 1. What is the Wheel Rail Interaction (WRI) Conference?

![WRI VIPs](/images/wri-team.png)

Pictured: Gordon Bachinsky, Kevin Oldknow, Bob Tuzik, and Richard Stock

The Wheel Rail Interaction conference was created and built on the idea that the rail industry can only make progress in solving its most difficult challenges, and becoming the best version of itself, if there is free and open communication across the boundaries of traditional organizational silos.

![WRI Audience!](/images/wri-audience.png)

Wheel Rail Seminars has excelled in creating events and environments in which there is a positive and open dialogue between personnel involved in rolling stock, track, operations, and management. Updates and ideas are shared between railways, suppliers, consultants, researchers, and regulators. Connections are made and conversations opened between some of the most junior and some of the most experienced members of our industry.

![WRI Presenter!](/images/corina.png)

Pictured: Corina Moore, WSP in Canada

---

## 2. Envisioning a new WRI website

To ensure a successful website redesign project, we carried out our work using my three general rules as a website producer -- Keep the design centered around an intuitive user experience above all else, select the right tech stack for the job, and integrate features and third-party services where it makes sense. I've branded the phrase "Light. Speed." to showcase my love of high-performance Jamstack technology centered on making websites fast and manageable by keeping the code as minimal as possible (light) and achieve what I feel are the three pillars to a successful website architecture: Speed, Flexibility and Reliability.

![WRI Focus Topic!](/images/focus-topic.png)

### a. Our Goals

First and foremost, the site needed an update in both technology and UX for a more user-centered design. In addition, information was difficult to get to and registration was convoluted, so we streamlined information organization, navigation and simplified a complicated, multi-pronged registration processes. Then we enhanced the message and branding of the event itself while keeping to its roots, to create a more engaging experience!

![Speed.](/images/speed.png)

As a team, we established several objectives early that would guide the entire process:

_A. Better Promote and Sell the WRI Conference_

_B. Improve Information Organization & Event Registration_

_C. Support Replication & Archival of Past Events using a Clonable Codebase_

### b. Improved usability and branding

The new design of the WRI website needed to not only improve usability in terms of being fast and easy to navigate, but support a longer-term objective of improving the reach of the WRI Conference message to our key audiences. As a team, we have achieved this by enhancing the event's branding elements and visual appeal (working on this now - need to explain how we expanded reach).

### c. A streamlined registration process

Another important objective involved improving the organization of information and re-engineering the registration process, offering a more intuitive user experience from start to finish. I believe the combination of updated seminar information, registration category and tier graphics, and the configuration of the registration signup process from Cvent achieves this objective.

![Flexibility.](/images/flexibility.png)

### d. Empowering editors to directly access content

One of the most time consuming tasks in updating the WRI website for each annual conference is adding the speaker bios & and abstract content. To meet this objective of providing editors with direct access to edit this content, we now have a content management system (CMS) that holds the speakers, bios & abstracts information so it can be edited using a simple online text editor.

### e. Implement versioning for future events

Building the WRI website codebase with the popular React library using Git version control provides us with important benefits. During the build, using version control allowed us to set up a draft website for content review before going live. This same system will enable us to replicate the codebase year over year and go back to see old sites at any point in time. Most importantly, Git will serve as our means of cloning the codebase for each annual event, saving us valuable time while preserving an archive of past events.

![Reliability.](/images/reliability.png)

## 3. Meeting business requirements

The economics of a website redesign are critical to get right. While it's fun for us designers to jump in creatively, working upfront with WRS senior leadership to address business requirements was essential before we began to envision the new design's look and feel. Getting this right required conversations around goals, budget, requirements, expectations, internal processes, and ongoing support. Here are some of the top topics discussed during those conversations with leadership:

1. **User Satisfaction**
2. **Rapid Page Loading**
3. **Improved SEO and Search Rankings**
4. **Composable Architecture**
5. **Cost Effective**
6. **Editor Access**
7. **Enhanced Security**
8. **Minimize Legal Exposure**
9. **Minimize Maintenance Costs**

This led to the project scope and a project agreement with specific deliverables that I will go into more detail on later.

---

## 4. My Process

### a. Mapping the user journey

We covered the goals and business requirements above. Once defined and the project deliverables are signed off, I engaged the creative team in a discovery session with data from an Google Analytics. The team reviewed the data to determine page popularity and user flow through the site. This helped us to prioritize where we should focus improvements on the user journey through the website, the content flow and organization, and details on how to improve the registration process in particular.

![Journey](/images/wireframe-wri.jpg)

### b. Wireframes and Concepts

Next, we collaborated on Notion with mood boards to share things we liked about other event sites and offered up ideas on how we feel the site should look and feel. This was a balance in preserving the best of the historical branding versus improvements we wanted to see that makes websites look modern and communicate information clearly and quickly. Most importantly, we used the wireframes to organize content and set up the page flow in important areas such as registration. The wireframes led to the concepts which were developed in Adobe XD.

![Wireframes](/images/wireframe-home.png)

### c. Project Build

The WRI 2024 website build was accomplished in several phases where, in general, I would develop a template page, share a draft of the page for comments and changes, then fine tune and polish it for production. This process was repeated over and over again for each page, section and sometimes even particular UI elements. This culminates in a round of testing them launch!

![WRI 2024 WRI Chicago Skyline Hero Banner](/images/wri-chicago-header.jpg)

WRI 2024 Banner, Hero and Seminar Icons

![WRI 2024 Intro Section](/images/wri-intro.png)

WRI 2024 Intro and Special Sections

![WRI 2024 Schedule](/images/wri-schedule.png)

WRI 2024 Sticky Navigation & Schedule

![WRI 2024 Principles Course](/images/principles-course-2.png)

WRI 2024 Speaker Grid

![WRI 2024 Heavy Haul Focus Topic](/images/heavy-haul-focus-topic.png)

WRI 2024 Heavy Haul Focus Topic Component

![WRI 2024 Featured Speaker Component](/images/wri-featured-speaker.jpeg)

WRI 2024 Rail Transit Featured Speaker Component

![WRI 2024 Rail Transit Seminar Bios & Abstracts](/images/rail-transit-bios.png)

WRI 2024 Rail Transit Bios & Abstracts Grid

![Event Pricing](/images/cvent-register.png)

![Virtual Event Pricing](/images/event-pricing-2.png)

Package Pricing

![WRI 2024 Sponsor Marquee](/images/sponsor-marquee.png)

WRI 2024 Sponsor Marquee (animated)

![WRI 2024 Announcements](/images/wri-announcements.png)

Interface Journal RSS Feed and WRI Announcements

![WRI 2024 Info Zone](/images/wri-info-zone.png)

WRI 2024 Info Zone

![WRI 2024 FAQ and Footer](/images/faq.png)

WRI 2024 FAQ and Footer

## 5. Key Integrations

Several key services were integrated into the website to enhance the WRI 2024 site's functionality and user experience. Namely, we integrated Cvent for their powerful registration system, Storyblok, a popular Content Management System (CMS), for speaker and topic management and Plausible Analytics for cookie-free site performance data. Here are a few highlights:

![Cvent Logo](/images/cvent-logo.png)

### a. Cvent event management software

![Cvent Splash Slide](/images/cvent-splash-slide.png)

Using Cvent's Event Registration system, we were able to configure the event to streamlined attendee registration for WRI 2024. This process was not straightfoward due to WRI's unique way of combining days into distinct packages for two tiers of attendees. Ultimately we did find a way to configure the event to that users can quickly review options and select the combo of days that best fit their interests. Cvent's forms work well for us as they are dynamic based on user selections, ensuring a seamless and secure registration experience.

#### Cvent Software Training

![Cvent Training](/images/cvent-academy.png)

Upon signing our contract with Cvent, I became involved in extensive onboarding and training sessions. This was led by the efforts of Abhishek Kumar who provided a four-week timeline of courses that gave me the necessary skills for basic Event Management configuration. I'm excited to work with the organization and look forward to further training.

#### WRI 2024 Event Setup & Configuration

![Cvent Configuration](/images/cvent-admission.png)

The configuration of the WRI 2024 event in Cvent was meticulously handled, from defining registration types and adding speaker profiles to incorporating sessions and admission items. As mentioned above, I had to undertake this with minimal training, so we had a bit of trial and error as the Cvent system is based on sessions versus days, but we landed on a solution that works well.

#### Configuring Cvent registration paths

![Integrating Cvent](/images/cvent-registration-form.png)

The final step involved bringing Cvent's registration form into the WRI 2024 website. Fortunately, this process was nearly seamless, thanks to Cvent's embed feature. This allowed us to maintain the power of our Jamstack website while benefiting from Cvent's robust registration functionalities, culminating in an well-branded and user-friendly process.

![Storyblok](/images/storyblok.webp)

### b. Storyblok content management software (CMS)

![Storyblok Splash Slide](/images/storyblok-splash.png)

From their website: Content Management, Done Right. Storyblok provides you with the platform to deliver engaging content at scale and create a distinctive customer experience, ensuring it’s delivered to the right audience and optimized for every channel.

![Storyblok Editing](/images/storyblok-example-editing.png)
![Kevin Oldknow Page](/images/kevin-oldknow.png)

Storyblok transforms content management with its intuitive content management system (CMS), empowering just about anyone to update the WRI 2024 speakers without needing a developer. Its real-time editing and preview capabilities ensure accuracy and ease of use.

![Example Speakers](/images/storyblok-example-speakers.png)

By separating the management of speaker information from the website code, CMSs like Storyblok give editors the ability to control content on their timeline. As you can see in these images, it's quick and easy to create, edit and publish Kevin Oldknow's bio and abstract in a single form accessible in any web browser.

---

## 6. Technology and Performance Scores

WRI 2024 has excellent lighthouse scores including perfect 'Best Practices' and 'SEO' scores according to their methodology and results. We made some tradeoffs with the Performance and Accessibility scores as they are heavily affected by media and Javascript as well as stringent requirements for contrast that can affect brand colors. We're satisfied with these scores and I continue to monitor them as we add and remove both content and features.

![High Performance.](/images/lighthouse-scores.png)

### a. Jamstack technology

I use a variety of powerful and flexible solutions together named Jamstack. JAM, coined by the CEO of Netlify, Matt Biilmann, a few years ago comes from client-side JavaScript, reusable APIs, and prebuilt Markup. I'll go into more detail about it later, but what's most important for an executive summary is what it delivers:

![Jamstack](/images/powered-by-jamstack.png)

- Faster performance
- Enhanced security and UX
- Superior Lighthouse scores
- Reduced long-term costs
- Seamless integration capabilities
- Cost-effective Edge hosting and scalability

Designing and constructing a fully performant website leveraging this architecture necessitates expertise across multiple technologies, ensuring both administrative ease and an enriching content developer experience. Moreover, should the WRI 2024 website experience a surge in popularity, the underlying CDN technology ensures seamless scalability to accommodate the increased traffic.

### b. React: a JavaScript framework

![React](/images/react.png)

Next.js significantly enhances web development by facilitating server-side rendering (SSR), which drastically accelerates page loading times by delivering fully rendered HTML directly to the browser. This not only augments user experience but also elevates SEO, as it renders content more easily indexable and crawlable. Thanks to features like automatic code splitting, developers can ensure that only the necessary JavaScript and CSS are loaded, further improving site speed. Next.js simplifies the development process by providing built-in CSS support and a fast refresh feature, enabling a more efficient and enjoyable coding experience. Its inherent scalability ensures that applications can expand without compromising on performance.

![Tailwind](/images/tailwind.webp)

### c. Design system using TailwindCSS

TailwindCSS, renowned for its utility-first approach, empowers developers to directly build designs within their HTML. This methodology expedites the styling process, obviating the need for custom CSS, and facilitates the rapid development of responsive designs across various devices. I love working with TailwindCSS for its simplicity and powerful design system ensures consistent branding throughout the project. Its integration with Next.js allows developers to seamlessly blend these styling benefits within a robust web development framework. The synergy between TailwindCSS and Next.js enhances both the developer experience and the performance of the application.

![GitHub](/images/github.webp)

### d. Managing the codebase with the GitHub repository

GitHub is Microsoft's code repository known and trusted throughout the world, and it's where we store the code for this all all client projects. GitHub is home to over 200,000,000 codebases, both public and private. They uses a standardized system of code version control called Git which we utilize to manage the website's codebase.

Version control is indispensable in contemporary development workflows, particularly with GitHub, which streamlines collaboration by enabling changes to be tracked and reviewed. Integrating Next.js projects with GitHub not only optimizes the website work, but also ensures more streamlined updates and superior code quality, enhancing the the longevity of the codebase.

![Netlify](/images/netlify.webp)

### e. Edge hosting with Netlify

Hosting with Netlify presents numerous advantages, including widespread CDN distribution for accelerated content delivery and effortless scalability. Netlify's continuous deployment from Git automatically publishes updates across all branches, while its support for serverless functions enables dynamic functionalities without the complexity of server management. This amalgamation of React and Netlify provides a potent combination for constructing and deploying fast, secure, and scalable web applications, underscoring the technological synergy that characterizes the WRI 2024 project.

### f. Summary of Jamstack technology benefits

By leveraging these technologies and practices, I crafted a high-performance, secure, visible, and composable website for the WRI 2024 Conference. Constructed using Jamstack principles and modern development tools, it not only delivers exceptional user experiences as evidenced by high Google Lighthouse scores but delivers where it counts - increases in traffic, conversions and event attendance. It's also designed for long-term performance. By cloning repos from a standard code base, then reconfiguring content by event, new WRI websites are created from this template, year after year, serving as a dynamic conference archive, showcasing past event for posterity.

---

![Summary](/images/splash-1.webp)

## 7. Case Study Summary

The Wheel Rail Interaction (WRI) Conference website redesign was a huge success. We met our key goals and objectives for the WRI 2024 conference, and the technology is already working to support WRS's longer-term objectives for an event archive and serving as a codebase for future events. After the conference, I received positive feedback about how well the website looks and performs, and we saw above that the website performs technically well with high Google Lighthouse scores and increased traffic compared to the previous year.

The bottom line? Well, let's look at the before and after results that are most important to the client: WRI 2023 attendance compared to WRI 2024 attendance. This is the number that drives the health of the event and growth of the community, and I believe this is a fair comparison since both events were held at the same time of year (May 2023 and June 2024), and both in large, upper Midwest cities — Minneapolis and Chicago:

### Attendance Comparison: WRI 2023 v. WRI 2024

{% table %}

- Attendees {% width="50%" %}
- 2023 {% width="25%" %}
- 2024 {% width="25%" %}

---

- Rail Transit Seminar{% width="50%" %}
- 161 {% width="25%" %}
- 202 {% width="25%" %}

---

- Principles Course Seminar {% width="50%" %}
- 198 {% width="25%" %}
- 252 {% width="25%" %}

---

- Heavy Haul Seminar {% width="50%" %}
- 163 {% width="25%" %}
- 227 {% width="25%" %}

---

- TOTAL ATTENDANCE {% width="50%" %}
- 522 {% width="25%" %}
- 681 {% width="25%" %}

{% /table %}

There you have it. The newly redesigned WRI website helped to increase attendance to the event by 30%! We're extremely pleased with this result and look forward to growing attendance even more with future additions and improvements to the site.

Thanks for checking out my case study! Please use the links at the top and sides for more details.

### A Note from the President of Wheel Rail Seminars

> The work Steve and the WRS team accomplished in designing and building our new WRI 2024 website was instrumental in making this year's conference a success. We broke multiple attendance records, setting the stage for success as we split the conference into two events starting in 2025. I look forward to ongoing improvements to the website as we continue to grow the Wheel/Rail Interaction engineering community.
>
> — Gordon Bachinsky, Founder and President

### Thank you

I appreciate Gordon and the team at [Wheel Rail Seminars](https://wheel-rail-seminars.com) who helped make this project a success. Thank you!

### Get in touch

It's easiest to contact me directly through my company website [Gravital Digital](https://gravitaldigital.com/#contact). You can also read more about me on my website at [sparker888.com](https://sparker888.com), follow me on [Twitter/X](https://x.com/sparker888), and connect with me on [LinkedIn](https://linkedin.com/in/sparker888). I'd love to hear from you and I'm happy to answer any questions about this project.
