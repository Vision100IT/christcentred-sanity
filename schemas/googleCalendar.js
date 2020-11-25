import React from 'react'

const CalendarPreview = ({ value }) => {
  return <iframe
    src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23e60505&amp;ctz=Australia%2FSydney&amp;src=YjdyMzZwM3I1ajNvZTZua2hlYzNoOWwzMTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D81B60&amp;showPrint=0&amp;title=CHRIST%20CENTRED%20COMMUNITY%20CHURCH%20EVENTS%20CALENDAR"
    style={{ border: 'solid 1px #777' }}
    width="800"
    height="600"
    frameborder="0"
    scrolling="no">
  </iframe>;
};

export default {
  name: "googleCalendar",
  type: "object",
  title: "Google Calendar Embed",
  preview: {
    component: CalendarPreview
  },
  fields: [
    {
      name: "Name",
      type: "string",
      title: "Calendar Name (not required)"
    }
  ]
};