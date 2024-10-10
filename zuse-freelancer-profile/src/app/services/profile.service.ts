import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Profile {
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
      name: 'John Doe',
      location: 'San Francisco, CA',
      hourlyRate: 50,
      bio: 'Experienced web developer with a passion for creating user-friendly applications.',
      skills: ['Angular', 'JavaScript', 'CSS', 'HTML'],
      portfolio: ['assets/image1.jpg', 'assets/image2.jpg'],
      socialMedia: {
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe'
      },
      contact: { email: 'john@example.com', phone: '+1234567890' }
    };
    return of(mockProfile);
  }
}
