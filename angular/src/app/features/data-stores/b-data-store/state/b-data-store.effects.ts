import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { map, mergeMap, withLatestFrom, catchError } from 'rxjs/operators';

/* notification service */
import { NotificationService } from 'src/app/features/shared/services/notification-service/notification.service';

/* lodash lib */
import * as lodash from 'lodash';

/* DataStorage interface for ngrx */
import { DataStorage } from 'src/app/features/data-stores/data-storage.interface';

/* navigate action */
import { Navigate } from 'src/app/features/data-stores/router-data-store/state/router-data-store.actions';

export const navigatePathAfterCreatingInstance = null;
export const navigatePathAfterUpdatingInstance = null;

@Injectable()
export class BDataStoreEffects {
  constructor(
    private actions$: Actions,
    private store: Store<DataStorage>,
    private notificationService: NotificationService
  ) {}
}
