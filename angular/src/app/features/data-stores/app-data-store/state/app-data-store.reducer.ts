/* Angular */
import { createReducer, on } from '@ngrx/store';

/* Services */
import { UtilityService } from 'src/app/features/shared/services';

/* Service variables */
const utilityService = new UtilityService();

/* actions */
import * as AppDataStoreActions from './app-data-store.actions';

/* State key */
export const featureKey = 'AppDataStore';

/* State interface */
export interface AppState {}

/* Initial values */
export const initialState: AppState = {};

export const reducer = createReducer(initialState);
