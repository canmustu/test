/* Angular */
import { createReducer, on } from '@ngrx/store';

/* Services */
import { UtilityService } from 'src/app/features/shared/services';

/* Service variables */
const utilityService = new UtilityService();

/* actions */
import * as CDataStoreActions from './c-data-store.actions';

/* State key */
export const featureKey = 'CDataStore';

/* State interface */
export interface CState {
  c: string;
}

/* Initial values */
export const initialState: CState = {
  c: null,
};

export const reducer = createReducer(initialState);
