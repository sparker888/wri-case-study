---
title: WRI Website Project Case Study
---

This page leads to an Executive Summary below. To jump to a specific section, use the navigation to the left or select a group card below. {% .lead %}

{% quick-links %}

{% quick-link title="Jamstack Delivers!" icon="lightbulb" href="/docs/best-stack" description="What is Jamstack and what benefits do React websites deliver to WRI 2024?" /%}

{% quick-link title="WRI 2024 Design & Build" icon="presets" href="/docs/nextjs-react" description="Learn how the architecture and content structure is organized in Next.js." /%}

{% quick-link title="Cvent & Storyblok" icon="plugins" href="/docs/cvent-integration" description="Learn the power of the integrations with third-party plugins and analytics." /%}

{% quick-link title="Project Summary" icon="installation" href="/docs/goals-project-scope" description="A wrap-up of the project from goals to design to the final build and launch." /%}

{% /quick-links %}

Feel free to navigate through the sections that interest you, but for a quick summary of the project, see the details below.

---

# An event site that performs!

![WRI Website Case Study.](/images/gravital-slide-wri.png)

## We Broke Records!

We have achieved our key goals using Jamstack technology for Wheel Rail Seminars new conference site for WRI 2024:

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

I am pleased to report that we have achieved or are in the process of achieving a number of additional objectives:

#

1. **Rapid Loading Speed**

2. **Cost Efficiency**

3. **User Satisfaction**

4. **Composable Architecture**

5. **SEO and Higher Rankings**

6. **Key Content Editing**

7. **Enhanced Security**

8. **Reduced Privacy Exposure**

See the [WRI 2024 Goals](https://teal-zuccutto-fc6e79.netlify.app/docs/goals-project-scope) for more details on this subject       .

### We focused on several specific areas:

In determining the scope of the project, we asked ourselves how we can improve showcasing the annual conference with a modern design, but limit the amount of work needed. We decided to concentrate most efforts into the following areas:

- Home Page
- Event Tracks
- Registration System
- Hotel Reservations
- Sponsors and Sponsorship
- InfoZone and ExpoZone products

### The Project Scope

In addition to this focus, there were some limits to the project in terms of its scope. Here are the main points from the requirements docs.

1. Content for the project would be pulled from 2023 website (with some polishing).

2. Ten page templates were to be designed and built (and filled with dummy content ready for 2024 editing which would happen separately).

3. The Registration system would split into two paths that lead to clear steps for collecting personal information, selecting the appropriate package, and an easy check-out system for both physical and virtual events.

4. There would be no site search.

5. No analytics products were specified in the project scope, but we later agreed to use Plausible Analytics.

6. No database would be needed as the payment system would be a 3rd party .

7. A CDN host with a generous free tier would likely be sufficient for the website, but an upgrade to the first paid tier is $19/mo. might be necessary.

8. No decision was made on a code repository or website host, so I agreed to use mine until we crossed that bridge (I created a [WRS GitHub account](https://github.com/wrs-dev/wri-2024-website) for the code and the site is currently being hosted on [Netlify](https://netlify.com))

9. I would perform just the basics of Google Lighthouse optimization to keep the cost down.

See the [Project Scope and Budget](https://teal-zuccutto-fc6e79.netlify.app/docs/project-phases-budget) for more details on this subject.

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

The team reviewed both analytics and user flow through the site to determine how we could improve its organization, particularly for the registration process. Using our wireframes and user flow, Randy Karey then designed the look of the main pages. He kept recognizable brand elements, yet created a design that's much more modern and forward looking.

![Journey](/images/wireframe-wri.jpg)

#### Project Build

With Randy's design approved, I built the site using the React framework (more info below). This was accomplished in several phases where I would develop a template page, share a draft of the page for comments and changes, then fine tune and polish it for production. This was repeated over and over again for each page, section and element until the site was fully built.

![WRI Chicago Header](/images/wri-chicago-header.jpg)

## Key Integrations

Our project has successfully integrated essential services to enhance the WRI 2024 website's functionality and user experience. Namely, we integrated Cvent's registration system, but I also implemented Storyblok, a popular Content Management System (CMS) and Plausible Analytics. Here are a few highlights:

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
___

## The Result: A beautiful, functional, high-performance website that scored BIG on the Google's Lighthouse test!

WRI 2024 was soft launched in December 2023 with our home page, a few links, and the Cvent registration form pages. Since that time, we have added seminar info, speaker cards, bios & abstract pages and sponsor pages. With the site mostly completed, I then tested the performance using Google Lighthouse test. There were a few issues that needed addressing, and I optimized the code to give us the following scores:

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

[See the site code on GitHub](http://localhost:3000/docs/installation)

GitHub is the code repository known throughout the world. Operated by Microsoft, it is home to over 200,000,000 code bases, both public and private. GitHub uses a standardized system of code control called Git.

Version control is indispensable in contemporary development workflows, particularly with GitHub, which streamlines collaboration by enabling changes to be tracked and reviewed. Integrating Next.js projects with GitHub not only optimizes the website work, but also ensures more streamlined updates and superior code quality, enhancing the the longevity of the code base.

![Netlify](/images/netlify.webp)

### Edge Hosting on Netlify

Hosting Next.js applications on Netlify presents numerous advantages, including widespread CDN distribution for accelerated content delivery and effortless scalability. Netlify's continuous deployment from Git automatically publishes updates across all branches, while its support for serverless functions enables dynamic functionalities without the complexity of server management. This amalgamation of Next.js and Netlify offers a potent framework for constructing and deploying fast, secure, and scalable web applications, underscoring the technological synergy that characterizes the WRI 2024 project.

### Summary of Jamstack Platform Benefits

By leveraging these technologies and practices, we have crafted a high-performance, secure, visible, and composable website for WRI 2024. Constructed on the Jamstack platform, it not only delivers exceptional user experiences and achieves high Google Lighthouse scores but also provides a delightful editor experience updating content. Designed for agility, it allows for cloning a new site from the original template year after year and serves as a dynamic seminar archive, showcasing past event speakers and abstracts for posterity.

---

## Project Summary

The WRI website project is a success. We met our key goals and objectives and are well on our way to accomplishing our longer-term objectives. Most importantly, the project was completed within five percent of budget! Here's a breakdown of the project phases listing the budgeted and actual hours of work.

## Event Attendance Totals

{% table %}

- Attendee {% width="50%" %}
- 2023  {% width="25%" %}
- 2024  {% width="25%" %}

---

- Rail Transit Seminar{% width="50%" %}
- tbd  {% width="25%" %}
- tbd  {% width="25%" %}

---

- Principles Course Seminar {% width="50%" %}
- tbd {% width="25%" %}
- tbd  {% width="25%" %}

---

- Heavy Haul Seminar {% width="50%" %}
- tbd  {% width="25%" %}
- tbd  {% width="25%" %}


---

- TOTAL ATTENDANCE {% width="50%" %}
- tbd  {% width="25%" %}
- tbd  {% width="25%" %}

{% /table %}

### A few details

Please be aware that an additional expenditure was approved for Randy to create his designs within Adobe XD, a crucial step to streamline the development process. We exceeded the budget in Phase 3 in part due to changes from the initial design and the need to include more detailed content on each seminar page than originally anticipated.

I need to emphasize that the original project scope did not include incorporating content specific to WRI 2024, such as details about speakers and sponsors. Instead, pages were built with 'dummy' content from WRI 2023, with the intention of updating it for the 2024 event later. So 2024 conference content has been added using some of the available retainer hours in January and February.

### More details available

For more detailed information and to download the final working project spreadsheet, please visit the [Project Summary](https://teal-zuccutto-fc6e79.netlify.app/docs/goals-project-scope). In addition, I'm willing to conduct a project wrap-up session with the team to answer any questions and talk about next steps.

### Thank you

I appreciate the team at [Wheel Rail Seminars](https://wheel-rail-seminars.com) who helped with this project. Thank you!
