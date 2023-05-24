/* angular */
import { createAction, props } from '@ngrx/store';

/* action types */
export enum ActionTypes {
  InitApp = '[APP] InitApp',
}

/* actions */

export const InitApp = createAction(ActionTypes.InitApp);
