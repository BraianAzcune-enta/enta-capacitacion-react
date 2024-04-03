import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BreadcrumbNode = {
  text: string;
  url?: string;
};

type BreadcrumbState = {
  nodes: BreadcrumbNode[];
};

const initialState: BreadcrumbState = {
  nodes: [],
};

export const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    replaceNodesBreadcrumb: (
      state,
      action: PayloadAction<BreadcrumbNode[]>
    ): void => {
      const breadcrumNodes = action.payload;
      state.nodes = breadcrumNodes;
    },
  },
});

export const { replaceNodesBreadcrumb } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
