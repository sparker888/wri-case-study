---
title: Project Scope & Budget
nextjs:
  metadata:
    title: Project Scope & Budget
    description: Quidem magni aut exercitationem maxime rerum eos.
---

## A Focus on Improving both Brand and Experience

![Layup of Pages](/images/project-scope.png)

In determining the scope of the project, we asked ourselves how we can improve showcasing the annual conference with a modern design, but limit the amount of work needed. We decided to concentrate most efforts into the following areas:

- Home Page
- Event Tracks
- Registration System
- Hotel Reservations
- Sponsors and Sponsorship
- InfoZone and ExpoZone products

## The Project Scope

In addition to this focus, there were some limits to the project in terms of its scope. Here are the main points from the requirements docs.

1. Content for the project would be from 2023 website (with some polishing).

2. Ten page templates were to be designed and built (and filled with dummy content ready for 2024 editing which would happen separately).

3. The Registration system includes an intro page for two paths then forms that provide the various packages for both physical and virtual events.

4. There would be no site search.

5. No analytics were specified up front, but we later agreed to use Palusible Analytics

6. No database would be needed as the payment system would be a 3rd party 

7. A CDN host with a generous free tier or traffic allowance would likely be sufficient for the website, but an upgrade to the first paid tier is $19/mo.

8. No decision was made on a code repository or website host, so I agreed to use mine until we crossed that bridge (I created a [WRS GitHub account](https://github.com/wrs-dev/wri-2024-website) for the code and the site is currently being hosted on [Netlify](https://netlify.com))

9. I would perform just the basics of Google Lighthouse optimization to keep the cost down.

### Statement of Work Details

From this point we signed a Statement of Work for a budget created based on a requirements questionnaires. A substantial amount of work went into defining the Statement of work for the project which led to our agreement available at: [Gravital Proposals](https://proposal.gravitaldigital.com/index.php?ProposalID=oIpCKUoPubuUal_me2NurEu76WXYA0lFf3vZIuWGXnU&debug=yes)

{% callout title="We have the original scope documents!" %}
All of the original project scope documents are on [Notion](https://www.notion.so/gravital-digital/Project-Requirements-Questionnaire-WRI-Website-de39eb51d0694d9e99064406f37af50d?pvs=4). These include:

1.  General Project Discovery
2.  Branding and Design Questions
3.  Content: Structure & Pages
4.  Functionality and Data
5.  Repository, Hosting and Backups
6.  Legal
7.  Analytics
8.  Ongoing Maintenance
9.  Registration & Payment Requirements

{% /callout %}

### The Project Phases

The WRS team worked through five project phases to deliver the project. These phases are:

- Phase 1 - SITE CONTENT
- PHASE 2 - SITE CONCEPT & DESIGN
- PHASE 3 - SITE DEVELOPMENT (Build)
- PHASE 4 - SITE REVISIONS
- PHASE 5 - SITE TEXT & LAUNCH

## WRI 2024 Project Phases and Budget

Here is a summary of the key tasks for each phase of the project.

### PHASE 1 - SITE CONTENT - 19.0 Hours

Phase 1 of the project started with a discovery process where the team looked at the past design and content and started to discuss what changes we wanted to see. At the start, it's just the basics - a style guide and content. 

As the website was planned to be done long before we started WRI 2024, we used the text from WRI 2023 as a yardstick for content size and length. Then, putting this together with our ideas to meet our project objectives, we produced a basic user journey, a registration step-by-step and a series of wireframes.


### PHASE 2 - SITE CONCEPT & DESIGN - 37.5 Hours

After the wireframes were reviewed and approved, the team set it's sights on putting the vision to paper. We pulled in Randy Karey at Gordon's approval to head up the design guided by our goals, objectives, and style choices.

The phase went through two major rounds of changes based on feedback from Steve and Erica at first. Then we passed the final comps to the larger team for review and approval. At that point we worked on pulling together some of the elements I would need during the website build.


###  PHASE 3 - SITE DEVELOPMENT (Build) - 121.75 Hours

The development phase is where all the heavy lifting occurred. Development involved the coding of components that were pieced together to create the pages that are delivered to the user's web browser.

In addition to coding components, API code is written to enable the content to be supplied by a content management system (CMS) to the specific sections and pages where it will be displayed. Images and graphic elements are also pulled together, and they were optimized for speedy loading.

A significant number of hours that was originally allocated to coding the logic required for the registration system went into the configuration of the Cvent registration system. This did not include training. 

###  PHASE 4 - SITE REVISIONS - 21 Hours

Once the build was completed, I created a develoment server where the team could review the site as it would appear to users once it's launched. This provided the opportunity to review, make edits and approve the design prior to launch. Phases 3, 4 and 5 were done in two sprints. One for the initial registration launch in December and the second leading up to the final page builts in mid February.

###  PHASE 5 - SITE TEXT & LAUNCH - 5.25 Hours

The launch process was carefully coordinated. We created a subdomain for the wri from the wheel-rail-seminars.com address. A lot of standard checks were made to make sure the site looked good on mobile, checked that all links work correctly, tested the registration process, and ensured that third-party integrations work correctly. The site is now live and registering attendees for May 2024!

---

## Major Project Timeline Changes

There were a number of events that changed my priorities throughout 2023. While I made it a point to communicate delays early and often, it may help to remind the team of several events that pushed the project back.

### TTC Conference & Tour Website

Within weeks of our agreement to produce a new WRI website, I was asked to make a proposal to develop the TTC Conference & Tour website. This project took up much of the summer with further promotional support going into October.

### Spinoff of the Wheel Rail Seminars Website

In September 2023 we agreed that Wheel Rail Seminars would have its own website and that we would spin off the remaining work to design and develop the site to a separate project with an independent budget. The project became a priority as there was a desire to launch the site and announce the WRS team at the TTC conference.

### Signing Cvent, Software Training and their Site Builder

Quite a bit of time was required to implement the WRI registration system. There were three distinct phases we went through before signing with Cvent. First, I put together clear requirements for the system with the team. Second, I shopped these requirements out to a short list of firms that I came up with. Then I scheduled demonstrations and conducted multiple meetings. Finally, Cvent was selected to be our event software provider.

Cvent's solution was a deviation from our plans. The project was originally scoped to work with either Stripe or Authorize.net serving as our payment gateway. While it is a fantastic solution for us, it also required substantial time to get up to speed with their system. We needed a registration solution, but were handed a full suite of event management tools.

This caused the timeframe for implementation to increase. In fact, in addition to creating an event for WRI 2024 I was faced with a complete change in the way that the website would be built. I dug in, but there were several stops and starts in the process as I worked with their support staff on a range of issues. Eventually I found a way to create a website with code which helped circumvent a clunky drag-n-drop builder, but it was still going to require a lot of work and I ran out of time. The site had to launch mid December for registration. 

With that, I was essentially forced to drop everything and pick up on the build I started back in September that I knew I could use to meet the demand. We haven't looked back. My hope is that the final product makes this decision a good one. In fact, I believe it was the best decision made in the project, and I recommend that we keep our modern Jamstack solution - not only for WRI 2024 and beyond, but for all of our clients.