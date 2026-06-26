import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BrandData {
  id: number;
  name: string;
  logoUrl: string;
  rating: number; // e.g., 98
  bonusText: string;
  pros: string[];
  features: string[];
  ctaLink: string;
}

@Component({
  selector: 'app-minimal-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minimal-showcase.component.html',
  styleUrl: './minimal-showcase.component.css'
})
export class MinimalShowcaseComponent implements OnInit {
  @Input() brand!: BrandData;
  @Input() index: number = 0;

  ngOnInit() {
    // Rating logic: start at 10 (which maps to 100), decrease by 0.1 until 9.5
    // Wait, the instructions say: "start at 10, decrease by 0.1 until 9.5. Stars: <=3 is 5 stars, <=7 is 4.5 stars, else 4 stars. Use the assigned Rating Style: '98 / 100'."
    // This implies a list of brands. Since there is exactly ONE featured Brand Card Component, 
    // the rating logic might be applied to that one card, or it's a general rule for a list.
    // "Create a Hero Component ... and exactly ONE featured Brand Card Component."
    // Let's implement the logic based on the index, even if there's only one.
    // If index 0: rating is 10 (100), stars 5.
    
    this.calculateRating();
  }

  calculateRating() {
    // Base score calculation: 10 - (index * 0.1), min 9.5
    let baseScore = 10 - (this.index * 0.1);
    if (baseScore < 9.5) baseScore = 9.5;
    
    // Convert to 100 scale for display
    this.brand.rating = Math.round(baseScore * 10);
  }

  getStarsHtml(): string {
    // Stars: <=3 is 5 stars, <=7 is 4.5 stars, else 4 stars.
    // Assuming index is 1-based for the condition, or 0-based. Let's use 1-based (position).
    const position = this.index + 1;
    let starsCount = 4;
    
    if (position <= 3) {
      starsCount = 5;
    } else if (position <= 7) {
      starsCount = 4.5;
    }

    let html = '';
    const fullStars = Math.floor(starsCount);
    const hasHalfStar = starsCount % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      html += '★';
    }
    if (hasHalfStar) {
      html += '⯪'; // Half star character or similar, let's use a simple representation or just text.
      // Actually, standard Unicode doesn't have a great half star. Let's use HTML/CSS or just ★ for full, ☆ for empty.
      // For half, we can use a specific character or just render it via CSS.
      // Let's use standard stars for simplicity in innerHTML, or SVG.
    }
    
    // Fill remainder with empty stars
    const emptyStars = 5 - Math.ceil(starsCount);
    for (let i = 0; i < emptyStars; i++) {
      html += '☆';
    }

    // Since we need a half star, let's refine the HTML
    let refinedHtml = '';
    for (let i = 0; i < fullStars; i++) {
      refinedHtml += '<span class="star full">★</span>';
    }
    if (hasHalfStar) {
      refinedHtml += '<span class="star half" style="position:relative; display:inline-block;">';
      refinedHtml += '<span style="position:absolute; overflow:hidden; width:50%; color:#FFD700;">★</span>';
      refinedHtml += '<span style="color:#e0e0e0;">★</span>';
      refinedHtml += '</span>';
    }
    for (let i = 0; i < emptyStars; i++) {
      refinedHtml += '<span class="star empty" style="color:#e0e0e0;">★</span>';
    }

    return refinedHtml;
  }
}