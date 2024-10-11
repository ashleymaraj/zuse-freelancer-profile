import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Profile {
  profilepic: string[];
  name: string;
  location: string;
  hourlyRate: number;
  bio: string;
  skills: string[];
  portfolio: string[];
  portfolioBio: string;
  socialMedia: Record<string, string>;
  contact: { email: string; phone: string };
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfile(): Observable<Profile> {
    const mockProfile: Profile = {
      profilepic: ['assets/images/walterwhite.jpg'],
      name: 'Walter White',
      location: 'Umhlanga, Durban',
      hourlyRate: 450,
      bio: '20 years experience in Angular development',
      skills: ['Angular', 'JavaScript', 'CSS', 'HTML'],
      portfolio: ['assets/images/mtn.png', 'assets/images/vodacom.png', 'assets/images/stdbank.jpg', 'assets/images/fnb.png', 'assets/images/absa.png'],
      portfolioBio: 'The below links will take you the work I have done for these companies',
      socialMedia: {
        LinkedIn: 'https://linkedin.com/in/walterwhite',
        X: 'https://x.com/walterwhite',
        Instagram : 'https://instagram.com/walterwhite'
      },
      contact: { email: 'walterwhite@breakingbad.com', phone: '+2708882200' }
    };
    return of(mockProfile);
  }
}
