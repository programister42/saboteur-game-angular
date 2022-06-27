import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, map, Observable } from 'rxjs'

interface ResponseOk {
  status: 'OK'
  uuid: string
}

interface ResponseError {
  status: 'ERROR'
  message: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private authToken$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  name$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  isAuthorized$: Observable<boolean> = this.authToken$.pipe(
    map(token => !!token),
  )
  serverError$: BehaviorSubject<string> = new BehaviorSubject<string>('')

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('authToken')
    if (token) this.authToken$.next(token)

    const name = localStorage.getItem('name')
    if (name) this.name$.next(name)
  }

  signUp(name: string) {
    this.http.post<ResponseOk | ResponseError>(
      `https://saboteurgame.herokuapp.com/register`,
      { name },
      { responseType: 'json', headers: { 'Content-Type': 'text/plain' } },
    ).subscribe((response) => {
      if (response.status === 'OK') {
        localStorage.setItem('authToken', response.uuid)
        this.authToken$.next(response.uuid)
        localStorage.setItem('name', name)
        this.name$.next(name)
      } else if (response.status === 'ERROR') {
        this.serverError$.next(response.message)
      }
    })
  }
}
