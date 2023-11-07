import { createSelector } from "@reduxjs/toolkit";

const selectAuthor = state => state.userData;

export const selectIsSignIt = createSelector(
    selectAuthor,
    userData => userData.isSignIt
);

export const selectUser = createSelector(
    selectAuthor,
    userData => userData.user
);

export const selectToken = createSelector(
    selectAuthor,
    userData => userData.token
);

export const selectIsLoading = createSelector(
    selectAuthor,
    userData => userData.isLoading
);

export const selectError = createSelector(
    selectAuthor,
    userData => userData.error
);

