# Must Do 📋💪

## The Problem

There are so many things that we have to do on a daily basis like work, feeding ourselves, and working on our personal goals. We only have a limited amount of energy and willpower every day, so if they're not properly prioritized and managed, we will not be able to accomplish the things that we want. With so many things to keep track of, it can be difficult to know what task to prioritize when we have multiple deadlines, especially when unexpected events occur and throw everything off balance!

## The Solution

The MustDo App prioritizes your tasks and generates a schedule that you can follow that will keep in mind your energy levels and plot out what tasks need to be done over time. When things go awry and we can't finish the things we need to do, the app will ask to reschedule the task or to archive it until you get time to address it so that your tasks don't fall by the wayside!. Remove the clutter from your mental stack by putting tasks into the app with deadlines and energy levels, so you can tackle each day with the confidence that important things aren't missed, your goals are being worked on, and you're able to celebrate your accomplishments!

## Features

- Three Views to show tasks for Today, the week, and the month so you can stay on track with everything in your life
- Focused view that keeps you on track without distraction! Has a pomodoro time tracker to make give you windows of rest for long sessions
- Small "Break Tasks" that can be slotted into times of rest when you've only got a low amount of energy. Accomplishment no matter the size
-

**This application is still a WIP! Expect bugs and experimentation!**

## Tech Stack:

Front end: **React | Next.js**  
Back end: **Django | ~~PostreSQL~~ IndexedDB**

## Figma Design:

https://www.figma.com/design/Vs9u4gPe4I5IjFoV8H3tpN/Task-Tracker?node-id=44-2

## How to run:

To run the project, you need to create a `.env` file and spin up the frontend/backend containers.

You can run the docker.sh bash script in the root directory using the "up" and "down" parameters to run both containers in parallel  
You may need to make the script executable first

Here are instructions on how to run the project from the root directory:

1. Run this command to make the script executable:
   `chmod +x docker.sh`

2. Run this command to spin up the app containers:
   `./docker.sh [up|down]`

3. If this command errs out, you may need to create a blank `.env` file inside the `frontend` directory!

You can also check the respective README's for instructions on running those containers standalone
