import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private subject = new BehaviorSubject<string>('Newsletter Service Info');

  newsLetter$ = this.subject.asObservable();

  constructor() {
    this.init();
  }

  subscribe(email: string): void {
    console.log(`Subscribed: ${email}`);
  }

  private init(): void {
    setTimeout(() => {
      this.subject.next('New news alert!');
    }, 3000);
  }
}
