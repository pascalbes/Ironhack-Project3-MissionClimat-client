import React from "react";

/*
From  React doc : https://reactjs.org/docs/context.html#when-to-use-context
---------------------------------
In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
---------------------------------
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:
*/

export default React.createContext({
  currentUser: null,
  setCurrentUser: () => {}
});
