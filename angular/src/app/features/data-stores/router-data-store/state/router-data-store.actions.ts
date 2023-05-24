/* angular */
import { createAction, props } from '@ngrx/store';

/* payloads */
import {
  ActivePathChangedActionPayload,
  SetQueryParamsActionPayload,
  SetParamsActionPayload,
  NavigateActionPayload,
} from 'src/app/features/shared/models';

/* action types */
export enum ActionTypes {
  ActivePathChanged = '[ROUTER] ActivePathChanged',
  SetQueryParams = '[ROUTER] SetQueryParams',
  SetParams = '[ROUTER] SetParams',
  Navigate = '[ROUTER] Navigate',
}

/* actions */

export const ActivePathChanged = createAction(
  ActionTypes.ActivePathChanged,
  props<{ payload: ActivePathChangedActionPayload }>()
);

export const SetQueryParams = createAction(
  ActionTypes.SetQueryParams,
  props<{ payload: SetQueryParamsActionPayload }>()
);

export const SetParams = createAction(
  ActionTypes.SetParams,
  props<{ payload: SetParamsActionPayload }>()
);

export const Navigate = createAction(
  ActionTypes.Navigate,
  props<{ payload: NavigateActionPayload }>()
);
