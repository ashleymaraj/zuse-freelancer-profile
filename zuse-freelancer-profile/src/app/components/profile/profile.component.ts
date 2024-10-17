import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  profile: any;
  loading = true;
  error: string | null = null;
  isEditing = false;
  editingPortfolioItem: any;

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
  save() {
    this.isEditing = false; 
  }

  editPortfolio(item: any) {
    this.editingPortfolioItem = { ...item }; // Create a copy of the item to edit
  }

  savePortfolio() {
    // Update the original portfolio item with the edited values
    const index = this.profile.profile.portfolio_items.findIndex((i: any) => i.id === this.editingPortfolioItem.id);
    if (index !== -1) {
      this.profile.profile.portfolio_items[index] = this.editingPortfolioItem;
    }
    this.editingPortfolioItem = null; // Clear the editing state
  }

  cancelEdit() {
    this.editingPortfolioItem = null; // Clear the editing state
  }
}
