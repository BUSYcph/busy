---
sort_order: 1
title: "DR"
description: "US election live tv studio application for the Danish Broadcasting Corporation"
cover: "/cover/dr.mp4"
activities:
  [
    "Firebase",
    "TypeScript",
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Touch Screen",
    "Drag and Drop",
  ]
client: "DR"
examples: ["/video/client-work-dr-01.mp4", "/video/client-work-dr-02.mp4"]
---

DR (officially the Danish Broadcasting Corporation, a Danish public-service radio and television broadcasting company) needed a Touch Screen Application for their live television broadcast og the US elections. The screens objective was act as a visual for the TV-host conveying election projections and results during the live TV coverage of the 2020 US election.

The application was build for live television studio on-screen appearance and BUSY was present during the entire election night, and interacted with Project Managers, TV Producers and aided the host with on-going instructions on the use of the touch screen.

The UI portrayed a US-map view overlaying the live-results of the various American states, as well as an interactive mandate calculator which enabled the host to drag and drop parts of the UI to set up possible election outcomes in an illustrative form.

The technical details of its inner parts was React (written in TypeScript) on top of a Firebase Realtime Database with a direct mirroring of elections results from Associated Press. The map was drawn dynamically from GeoJSON and the drag and drop mandate calculator was written with touch performance in mind.
