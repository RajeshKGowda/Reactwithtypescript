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

---

# 13. useState Deep Dive

## State as a Snapshot

State variables represent the state for the current render.

Calling a state setter schedules an update but does not mutate the state variable belonging to the current render.

Example:

```tsx
setCount(count + 1);

console.log(count);

---

# 14. useReducer and State Architecture

## Why useReducer?

`useState` works very well for simple, independent pieces of state.

As state becomes more complex, there may be many different operations that can modify the same state.

For example, a task management application may need:

- Add task
- Toggle task
- Delete task
- Clear completed tasks

`useReducer` allows these state transitions to be modeled explicitly.

---

## Reducer Mental Model

```text
Current State
      +
   Action
      ↓
   Reducer
      ↓
 New State