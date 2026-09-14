# Advanced React Learning

This document records the concepts, experiments, observations, and production-oriented decisions made while learning advanced React with TypeScript.

---

# 1. React Rendering Mental Model

## What I learned

A React component can render again when:

- Its state changes
- Its props change
- Relevant context changes
- Its parent renders

A component rendering does not mean that the entire browser DOM is recreated.

React renders components to determine what the UI should look like and then reconciles the result to determine what actually needs to change in the DOM.

### Important distinction

```text
Component render
       ≠
Entire DOM update