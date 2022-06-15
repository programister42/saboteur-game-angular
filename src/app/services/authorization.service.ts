import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  name$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  private authToken$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  isAuthorized$: Observable<boolean> = this.authToken$.pipe(
    map(token => !!token),
  )

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('authToken')
    if (token) this.authToken$.next(token)

    const name = localStorage.getItem('name')
    if (name) this.name$.next(name)
  }

  signUp(name: string) {
    this.http.post(
      `https://saboteurgame.herokuapp.com/register`,
      'name=' + name,
      { responseType: 'text' },
    ).subscribe((token) => {
      localStorage.setItem('authToken', token)
      localStorage.setItem('name', name)
      this.authToken$.next(token)
      this.name$.next(name)
    })
  }
}
