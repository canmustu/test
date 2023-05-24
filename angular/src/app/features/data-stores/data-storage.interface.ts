/* app-data-store informations */
import {
  AppState,
  featureKey as appStateFeatureKey,
} from 'src/app/features/data-stores/app-data-store/state/app-data-store.reducer';
/* a-data-store informations */
import {
  AState,
  featureKey as aStateFeatureKey,
} from 'src/app/features/data-stores/a-data-store/state/a-data-store.reducer';
/* b-data-store informations */
import {
  BState,
  featureKey as bStateFeatureKey,
} from 'src/app/features/data-stores/b-data-store/state/b-data-store.reducer';
/* router-data-store informations */
import {
  RouterState,
  featureKey as routerStateFeatureKey,
} from 'src/app/features/data-stores/router-data-store/state/router-data-store.reducer';
/* c-data-store informations */
import {
  CState,
  featureKey as cStateFeatureKey,
} from 'src/app/features/data-stores/c-data-store/state/c-data-store.reducer';

export interface DataStorage {
  [appStateFeatureKey]: AppState;
  [aStateFeatureKey]: AState;
  [bStateFeatureKey]: BState;
  [routerStateFeatureKey]: RouterState;
  [cStateFeatureKey]: CState;
}
