---
title: WRI Website Case Study Summary
---

Scroll for the summary. Here are a few Quick Links: {% .lead %}

{% quick-links %}

{% quick-link title="Jamstack Delivers!" icon="lightbulb" href="/docs/best-stack" description="What is Jamstack? How did a Light & Fast website deliver these results for WRI 2024?" /%}

{% quick-link title="WRI 2024 Project Overview" icon="presets" href="/docs/nextjs-react" description="Learn how we analyzed historic user behavior and developed a better online experience!" /%}

{% quick-link title="Cvent & Storyblok" icon="plugins" href="/docs/cvent-integration" description="Witness the power of key integrations for event marketing using Cvent, a powerful CMS named Storyblok and other third-party plugins." /%}

{% quick-link title="Project Summary" icon="installation" href="/docs/goals-project-scope" description="A wrap-up of the project from goals to design to the final build and launch." /%}

{% /quick-links %}

---

# This Jamstack event site performs!

![WRI Website Case Study.](/images/gravital-slide-wri.png)

## We broke multiple attendance records!

Thanks for checking out my website redesign case study! I'm very excited to present how our team achieved impressive results with this redesign for WRI and provide a framework for future event website redesigns.

We achieved our key goals for Wheel Rail Seminars' new Jamstack site and broke a few records in the process! Not only did we meet our broader goals, but we also significantly increased traffic by 12%, boosted conversions by an impressive 23.5%, and saw a remarkable 32% rise in overall attendees. This success was highlighted by record-breaking attendance at both the Rail Transit seminar and the Principles Course seminar.

Our strategic design, coupled with streamlined information organization and registration processes, ensured an exceptional user experience, proving that our innovative approach delivers outstanding results.

As with any successful website redesign project, we carried out our work based on accomplishing three general goals:

#### A. Better Promote and Sell the WRI Conference

#### B. Improve Information Organization & Event Registration

#### C. Design a system for Easy Replication year after year to have an Archive

#

## Expanding on these Goals

### Improved Design and Branding

The new design of the WRI website meets the objective of improving the promotion and sales of the WRI Conference to our key audiences. As a team, we have achieved this by enhancing the event's branding elements and visual appeal.

### Streamlined Information and Registration Process

Another important objective involved improving the organization of information and re-engineering the registration process, offering a more intuitive user experience from start to finish. I believe the combination of updated seminar information, registration category and tier graphics, and the configuration of the registration signup process from Cvent achieves this objective.

### Ability to Clone the Code Base for Annual Conferences

Building the WRI website codebase with the popular React library using Git version control provides us with important benefits. During the build, using version control allowed us to set up a draft website for content review before going live. This same system will enable us to replicate the codebase year over year and go back to see old sites at any point in time. Most importantly, Git will serve as our means of cloning the codebase for each annual event, saving us valuable time while preserving an archive of past events.

### Providing Editors the Power to Edit Website Content Directly

One of the most time consuming tasks in updating the WRI website for each annual conference is adding the speaker bios & and abstract content. To meet this objective of providing editors with direct access to edit this content, we now have a content management system (CMS) that holds the speakers, bios & abstracts information so it can be edited using a simple online text editor.

### Additional Objectives

As the developer, I also set my sights on achieving a number of additional objectives more specifically related to the code and user experience:

#

1. **Rapid Loading Speed**

2. **Cost Efficiency**

3. **User Satisfaction**

4. **Composable Architecture**

5. **SEO and Higher Rankings**

6. **Key Content Editing**

7. **Enhanced Security**

8. **Reduced Privacy Exposure**

See the [WRI 2024 Goals](https://gravital-wri-case-study.netlify.app/docs/goals-project-scope) for more details on this subject .

### We focused on several specific areas:

In determining the scope of the project, we asked ourselves how we can improve showcasing the annual conference with a modern design, but limit the amount of work needed. We decided to concentrate most efforts into the following areas:

- Home Page
- Event Tracks
- Registration System
- Hotel Reservations
- Sponsors and Sponsorship
- InfoZone and ExpoZone products

### Project Phases

The WRS team worked through five project phases to deliver the project. These phases are:

- Phase 1 - SITE CONTENT
- PHASE 2 - SITE CONCEPT & DESIGN
- PHASE 3 - SITE DEVELOPMENT (Build)
- PHASE 4 - SITE REVISIONS
- PHASE 5 - Site Launch & Project Wrap Up

We have methodically completed each phase to launch the site at [wri.wheel-rail-seminars.com](https://wri.wheel-rail-seminars.com).

### Project Highlights

#### Wireframes

The team first created wireframes to help us proportion the content for the design phase.

![Wireframes](/images/wireframe-home.png)

#### User Journey

The team reviewed both analytics and user flow through the site to determine how we could improve its organization, particularly for the registration process. Using our notes, wireframes and user flow diagrams, we designed the look and feel of the main pages. We kept recognizable brand elements, yet created a design system that would enable future iteration.

![Journey](/images/wireframe-wri.jpg)

#### Project Build

Once the website design 'on paper' was approved, I built the site using the React which is a web development framework that enables me to create code that conforms to Jamstack principles. This was accomplished in several phases where, in general, I would develop a template page, share a draft of the page for comments and changes, then fine tune and polish it for production. This was repeated over and over again for each page, section and sometimes even particular UI elements. This culminates in a round of testing them launch!

![WRI Chicago Header](/images/wri-chicago-header.jpg)

## Key Integrations

Our project has successfully integrated essential services to enhance the WRI 2024 website's functionality and user experience. Namely, we integrated Cvent's registration system and Storyblok for speaker and topic management, a popular Content Management System (CMS) and Plausible Analytics. Here are a few highlights:

![Cvent Logo](/images/cvent-logo.png)

### Cvent Integration

![Cvent Registration Screen](/images/cvent-register.png)

Using Cvent's Event Registration system, we were able to configure the event to streamlined attendee registration for WRI 2024. This process was not straightfoward due to WRI's unique way of combining days into distinct packages for two tiers of attendees. Ultimately we did find a way to configure the event to that users can quickly review options and select the combo of days that best fit their interests. Cvent's forms work well for us as they are dynamic based on user selections, ensuring a seamless and secure registration experience.

#### Cvent Training

![Cvent Training](/images/cvent-academy.png)

Upon signing our contract with Cvent, I became involved in extensive onboarding and training sessions. This was led by the efforts of Abhishek Kumar who provided a four-week timeline of courses that gave me the necessary skills for basic Event Management configuration. I didn't finish that training as I had to jump into configuring the WRI 2024 event due to a pressing deadline, but I managed to leverage Cvent's support to help me to get it done.

#### WRI 2024 Event Setup & Configuration

![Cvent Configuration](/images/cvent-admission.png)

The configuration of the WRI 2024 event in Cvent was meticulously handled, from defining registration types and adding speaker profiles to incorporating sessions and admission items. As mentioned above, I had to undertake this with minimal training, so we had a bit of trial and error as the Cvent system is based on sessions versus days, but we landed on a solution that works well.

#### Integrating Cvent Registration

![Integrating Cvent](/images/cvent-registration-form.png)

The final step involved bringing Cvent's registration form into the WRI 2024 website. Fortunately, this process was nearly seamless, thanks to Cvent's embed feature. This allowed us to maintain the power of our Jamstack website while benefiting from Cvent's robust registration functionalities, culminating in an well-branded and user-friendly process.

![Storyblok](/images/storyblok.webp)

### Storyblok Integration

![Storyblok Editing](/images/storyblok-example-editing.png)
![Kevin Oldknow Page](/images/kevin-oldknow.png)

Storyblok transforms content management with its intuitive content management system (CMS), empowering just about anyone to update the WRI 2024 speakers without needing a developer. Its real-time editing and preview capabilities ensure accuracy and ease of use.

![Example Speakers](/images/storyblok-example-speakers.png)

By separating the management of speaker information from the website code, CMSs like Storyblok give editors the ability to control content on their timeline. As you can see in these images, it's quick and easy to create, edit and publish Kevin Oldknow's bio and abstract in a single form accessible in any web browser.

---

## The Result: A beautiful, functional, high-performance website that scored BIG on the Google's Lighthouse test!

WRI 2024 was soft launched in December 2023 with our home page, a few links, and the Cvent registration form pages. Since that time, we have added seminar info, speaker cards, bios & abstract pages and sponsor pages. With the site mostly completed, I then tested the performance using Google Lighthouse test. There were a few issues that needed addressing, and I optimized the code to give us the following scores (at the time of this writing in February 2024):

![High Performance.](/images/lighthouse-score-performance.png)

## How did we achieve this?

As you can see, the Google Lighthouse report scores WRI 2024 highly across the board for important categories that define a good website. This was accomplished with lots of work, but largely due to using the world's best web technology stack -- Jamstack. JAM comes from client-side JavaScript, reusable APIs, and prebuilt Markup. The words don't matter as much as what it delivers:

![Jamstack](/images/powered-by-jamstack.png)

- Faster performance
- Enhanced security and UX
- Superior Lighthouse scores
- Reduced long-term costs
- Seamless integration capabilities
- Cost-effective Edge hosting and scalability

Designing and constructing a fully performant website leveraging this architecture necessitates expertise across multiple technologies, ensuring both administrative ease and an enriching content developer experience. Moreover, should your product experience a surge in popularity, the underlying CDN technology ensures seamless scalability to accommodate the increased traffic.

### Next.js: The React Framework for the Web

![React](/images/react.png)

Next.js significantly enhances web development by facilitating server-side rendering (SSR), which drastically accelerates page loading times by delivering fully rendered HTML directly to the browser. This not only augments user experience but also elevates SEO, as it renders content more easily indexable and crawlable. Thanks to features like automatic code splitting, developers can ensure that only the necessary JavaScript and CSS are loaded, further improving site speed. Next.js simplifies the development process by providing built-in CSS support and a fast refresh feature, enabling a more efficient and enjoyable coding experience. Its inherent scalability ensures that applications can expand without compromising on performance.

![Tailwind](/images/tailwind.webp)

### Built with TailwindCSS

TailwindCSS, renowned for its utility-first approach, empowers developers to directly build designs within their HTML. This methodology expedites the styling process, obviating the need for custom CSS, and facilitates the rapid development of responsive designs across various devices. The highly customizable nature of TailwindCSS's design system ensures consistent design throughout the project, while its integration with Next.js allows developers to seamlessly blend these styling benefits within a robust web development framework. The synergy between TailwindCSS and Next.js enhances both the developer experience and the performance of the application.

![GitHub](/images/github.webp)

### GitHub Repo

GitHub is Microsoft's code repository known and trusted throughout the world, and it's where we store our code. GitHub is home to over 200,000,000 code bases, both public and private. They uses a standardized system of code control called Git we utilize to manage the website's codebase.

Version control is indispensable in contemporary development workflows, particularly with GitHub, which streamlines collaboration by enabling changes to be tracked and reviewed. Integrating Next.js projects with GitHub not only optimizes the website work, but also ensures more streamlined updates and superior code quality, enhancing the the longevity of the code base.

![Netlify](/images/netlify.webp)

### Edge Hosting on Netlify

Hosting Next.js applications on Netlify presents numerous advantages, including widespread CDN distribution for accelerated content delivery and effortless scalability. Netlify's continuous deployment from Git automatically publishes updates across all branches, while its support for serverless functions enables dynamic functionalities without the complexity of server management. This amalgamation of Next.js and Netlify offers a potent framework for constructing and deploying fast, secure, and scalable web applications, underscoring the technological synergy that characterizes the WRI 2024 project.

### Summary of Jamstack Platform Benefits

By leveraging these technologies and practices, we crafted a high-performance, secure, visible, and composable website for this WRI 2024 event site. Constructed using Jamstack principles, it not only delivers exceptional user experiences and high Google Lighthouse scores but delivers where it counts - conversions and revenue. It's also designed for long-term performance. By cloning repos and reconfiguring content, new websites are created from the original template, year after year, serving as a dynamic conference archive, showcasing past event speakers, abstracts and presentations for posterity.

---

## Project Summary (i.e. the bottom line)

The WRI website project was a huge success. We met our key goals and objectives and are well on our way to accomplishing our longer-term objectives. Most importantly, the project exceeded expectations and delivered measurable result!.

## Event Attendance Totals

{% table %}

- Attendee {% width="50%" %}
- 2023 {% width="25%" %}
- 2024 {% width="25%" %}

---

- Rail Transit Seminar{% width="50%" %}
- 161 {% width="25%" %}
- 206 {% width="25%" %}

---

- Principles Course Seminar {% width="50%" %}
- 198 {% width="25%" %}
- 256 {% width="25%" %}

---

- Heavy Haul Seminar {% width="50%" %}
- 163 {% width="25%" %}
- 229 {% width="25%" %}

---

- TOTAL ATTENDANCE {% width="50%" %}
- 522 {% width="25%" %}
- 691 {% width="25%" %}

{% /table %}

### A Happy Client!

> The work Steve and the WRS team accomplished in designing and building our new WRI 2024 website was instrumental in making this year's conference a success. We broke multiple attendance records, setting the stage for success as we split the conference into two WRI conferences starting in 2025. I look forward to ongoing improvements to the website as we continue to grow the Wheel/Rail Interaction engineering community.
>
> — Gordon Bachinsky, Founder and President, Wheel Rail Seminars

### Want more info?

It's easiest to contact me directly using [this form](https://gravitaldigital.com/#contact). I'm considering a few interviews and I'm also willing to make a free assessment of your needs and talk with you about potential next steps.

### Thank you

I appreciate the team at [Wheel Rail Seminars](https://wheel-rail-seminars.com) who helped with this project. Thank you!
