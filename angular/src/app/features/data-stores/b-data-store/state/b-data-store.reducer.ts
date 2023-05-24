/* Angular */
import { createReducer, on } from '@ngrx/store';

/* Services */
import { UtilityService } from 'src/app/features/shared/services';

/* Service variables */
const utilityService = new UtilityService();

/* actions */
import * as BDataStoreActions from './b-data-store.actions';

/* State key */
export const featureKey = 'BDataStore';

/* State interface */
export interface BState {
  b: string;
}

/* Initial values */
export const initialState: BState = {
  b: null,
};

export const reducer = createReducer(initialState);
