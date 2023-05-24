/*
  Page ID: b20e0d47-88be-4efa-8cba-bdb109c19104
  Page Name: HomePage
  Page Slug: 
*/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

import { JSONAtaObject } from 'src/app/features/shared/helper-classes';

/* DataStorage interface for ngrx */
import { DataStorage } from 'src/app/features/data-stores/data-storage.interface';

import * as lodash from 'lodash';

@Component({
  selector: 'test-4-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  /* Component: Text 1 */
  text_1: any = {
    textMode: 'text',
    text: null,
    content:
      '<html>\n<head>\n<style>\n/* This style sets the width of all images to 100%: */\nimg {\n  width: 100%;\n}\n</style>\n</head>\n<body>\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar lorem in facilisis viverra. Cras leo arcu, sodales nec mattis eu, tincidunt at dui. Nunc viverra luctus arcu ac tristique. Fusce nulla velit, ornare tempus efficitur vel, semper feugiat nibh.</p>\n<img src="/assets/img/placeholders/placeholder-primary.png" alt="HTML5 Icon" style="width:128px;height:128px;">\n</body>\n</html>',
    typography: {
      fontSize: '0auto',
      fontFamily: null,
      fontWeight: null,
      fontStyle: null,
      textDecoration: 'none',
      textAlign: null,
      textShadow: null,
      fontStretch: null,
      textIndent: null,
      letterSpacing: null,
      lineHeight: null,
      wordSpacing: null,
      textTransform: null,
      userSelect: null,
      textColor: null,
    },
    colorSettings: { color: '', backgroundColor: '' },
  };

  /* state subscriptions */
  subscriptions: Subscription[];

  constructor(private store: Store<DataStorage>) {}

  ngOnInit(): void {
    this.subscribeToData();
  }

  ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => subscription.unsubscribe());
  }

  subscribeToData() {
    this.subscriptions = [
      this.store
        .select((state) => state.ADataStore.a)
        .subscribe((a) => {
          this.text_1.text = a;
        }),
    ];
  }
}
