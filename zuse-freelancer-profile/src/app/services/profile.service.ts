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
  socialMedia: Record<string, string>;
  contact: { email: string; phone: string };
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  getProfile(): Observable<Profile> {
    const mockProfile: Profile = {
      profilepic: ['assets/walterwhite.jpg'],
      name: 'Walter White',
      location: 'Umhlanga, Durban',
      hourlyRate: 450,
      bio: '20 years experience in Angular development',
      skills: ['Angular', 'JavaScript', 'CSS', 'HTML'],
      portfolio: ['assets/image1.jpg', 'assets/image2.jpg'],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/walterwhite',
        x: 'https://x.com/walterwhite',
        instagram : 'https://instagram.com/walterwhite'
      },
      contact: { email: 'walterwhite@breakingbad.com', phone: '+2708882200' }
    };
    return of(mockProfile);
  }
}
