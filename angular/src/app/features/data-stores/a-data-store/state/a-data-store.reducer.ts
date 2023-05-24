/* Angular */
import { createReducer, on } from '@ngrx/store';

/* Services */
import { UtilityService } from 'src/app/features/shared/services';

/* Service variables */
const utilityService = new UtilityService();

/* actions */
import * as ADataStoreActions from './a-data-store.actions';

/* State key */
export const featureKey = 'ADataStore';

/* State interface */
export interface AState {
  a: string;
}

/* Initial values */
export const initialState: AState = {
  a: null,
};

export const reducer = createReducer(initialState);
