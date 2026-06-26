import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface Casino {
  rank: number;
  badge: string;
  name: string;
  initials: string;
  logoImage: string;
  accent: string;
  bonus: string;
  url: string;
  votes: string;
  minDeposit: string;
  terms: string;
  rating: number;
  ratingMobile: string;
  stars: number[];
}

@Component({
  selector: 'app-fjord-brand-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fjord-brand-panel.component.html',
  styleUrl: './fjord-brand-panel.component.css'
})
export class FjordBrandPanelComponent implements OnInit {
  private gclid: string | null = null;

  casinos: Casino[] = [
    {
      rank: 1,
      badge: 'Most Popular',
      name: 'Midnite',
      initials: 'MN',
      logoImage: 'brands/midnite-white.svg',
      accent: '#9eff3d',
      bonus: 'Bet £20 Get 150 Free Spins',
      url: 'https://www.midnite.com/',
      votes: '10,367',
      minDeposit: '£20',
      terms: '18+ New customers only. Wager £20 or more on Midnite Casino within 14 days of sign-up to get 150 Free Spins, valued at 10p and valid for 7 days. T&Cs apply. 18+, BeGambleAware.org',
      rating: 0,
      ratingMobile: '',
      stars: []
    },
    {
      rank: 2,
      badge: 'Exclusive Offer',
      name: 'Lottomart',
      initials: 'LM',
      logoImage: 'brands/Lottomart_icon.svg',
      accent: '#ffc107',
      bonus: 'Get 20 Free Spins + Win up to 500 More',
      url: 'https://lottomart.com/',
      votes: '8,142',
      minDeposit: '£10',
      terms: '18+ New players only. Opt-in required. Min £10 cash stakes on slots to qualify. Prize Wheel must be used & Free Spins claimed within 4 days. Free Spins must be played within 24 hours of claim. Full T&Cs apply. BeGambleAware.org',
      rating: 0,
      ratingMobile: '',
      stars: []
    },
    {
      rank: 3,
      badge: 'Rising Casino',
      name: 'Ivy Casino',
      initials: 'IC',
      logoImage: 'brands/ivy-casino.svg',
      accent: '#36f162',
      bonus: 'Claim up to £50 Welcome Offer',
      url: 'http://ivycasino.com/',
      votes: '5,891',
      minDeposit: '£20',
      terms: '18+. First deposit only. Deposit £20 or more and receive a 25% Deposit Match bonus up to £50 cash reward. 10x wagering applies on selected games. Must complete wagering and claim reward within 28 days of first deposit. One welcome offer per customer. Full T&Cs apply. BeGambleAware.org',
      rating: 0,
      ratingMobile: '',
      stars: []
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.casinos.forEach((casino, index) => {
      this.applyRating(casino, index);
    });

    this.route.queryParams.subscribe(params => {
      this.gclid = params['gclid'] ?? null;
    });
  }

  getLink(url: string): string {
    if (!this.gclid) {
      return url;
    }
    return url + (url.includes('?') ? '&' : '?') + 'gclid=' + this.gclid;
  }

  private calculateRating(order: number): number {
    const rating = 100 - order;
    return rating < 95 ? 95 : rating;
  }

  private calculateStars(order: number): number[] {
    if (order <= 3) {
      return [1, 1, 1, 1, 1];
    }
    if (order <= 7) {
      return [1, 1, 1, 1, 0.5];
    }
    return [1, 1, 1, 1, 0];
  }

  private applyRating(casino: Casino, order: number) {
    casino.rating = this.calculateRating(order);
    casino.ratingMobile = (casino.rating / 10).toFixed(1);
    casino.stars = this.calculateStars(order);
  }
}
