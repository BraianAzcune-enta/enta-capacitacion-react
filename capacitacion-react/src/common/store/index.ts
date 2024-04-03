import breadcrumbSlice from "common/breadcrums/store";
import { combineReducers } from "redux";

export default combineReducers({ breadcrumb: breadcrumbSlice });
