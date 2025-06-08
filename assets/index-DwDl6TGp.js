import{j as t}from"./index-BAnmHbMa.js";const c=({el:a,styles:n})=>t.jsxs(t.Fragment,{children:[a.headingBig&&t.jsx("h1",{className:n["text__heading--big"],children:a.headingBig}),a.heading&&t.jsx("h3",{className:n.text__heading,children:a.heading}),a.text&&a.text.split(`
`).map((e,i)=>e?t.jsx("p",{children:e},i):t.jsx("br",{},i)),a.table&&t.jsx("table",{className:n.text__table,children:t.jsx("tbody",{children:a.table.map((e,i)=>t.jsx("tr",{children:e.map((r,s)=>t.jsx("td",{children:r.split(`
`).map((x,d)=>t.jsx("p",{children:x},d))},s))},i))})})]});export{c as default};
