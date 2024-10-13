import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: any;
  loading = true;
  error: string | null = null;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      data => {
        this.profile = data;
        this.loading = false;
      },
      err => {
        this.error = 'Failed to load profile data';
        this.loading = false;
      }
    );
  }
}
