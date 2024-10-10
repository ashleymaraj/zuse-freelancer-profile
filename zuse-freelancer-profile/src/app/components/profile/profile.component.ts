import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../../services/profile.service';

@Component({
  selector: 'app-profile', // This should match
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  profile!: Profile;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(data => {
      this.profile = data;
    });
  }
}
