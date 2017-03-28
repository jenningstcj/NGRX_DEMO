import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class TodoEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

  @Effect() login$ = this.actions$
      // Listen for the 'LOGIN' action
      .ofType('ADD_TODO')
      // Map the payload into JSON to use as the request body
      .map(action => JSON.stringify(action.payload))
      .switchMap(payload => Observable.create(observer => {
  // Yield a single value and complete
  //observer.onNext(42);
  //observer.onCompleted();

  // Any cleanup logic might go here
  return () => console.log('add to do effect called')
})
      );

}
