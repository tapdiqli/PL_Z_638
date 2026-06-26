import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalShowcaseComponent } from '../../minimal-showcase/minimal-showcase.component';
import { FjordBrandPanelComponent } from '../../fjord-brand-panel/fjord-brand-panel.component';

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MinimalShowcaseComponent, FjordBrandPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  openFaq: number | null = 0;

  faqs: Faq[] = [
    {
      question: 'Is it legal to play at online casinos in the UK?',
      answer: 'Yes. Online gambling is perfectly legal in the UK, as long as the site you choose holds a licence from the UK Gambling Commission. Before signing up, take a moment to confirm that licence is in place so you know the casino is operating fairly and safely.'
    },
    {
      question: 'How do I know if an online casino is trustworthy?',
      answer: 'The clearest sign is a valid UK Gambling Commission licence, which is usually displayed in the site footer. Beyond that, look at how transparent the bonus terms are, how the payment options are handled, and what other players say in honest reviews.'
    },
    {
      question: 'What payment methods can I use at UK online casinos?',
      answer: 'Most UK casinos accept Visa and MasterCard debit cards, e-wallets such as PayPal, Skrill, Apple Pay and MuchBetter, and in some cases cash payments at linked physical venues. Deposits are usually instant, while withdrawal speeds vary by site.'
    },
    {
      question: 'Are the games fair at online casinos?',
      answer: 'Licensed casinos run their games on tested random number generators, and independent bodies regularly audit them. As long as you stick to UK-regulated sites, the odds are exactly what they should be and outcomes are genuinely random.'
    },
    {
      question: 'Can I play at online casinos on my mobile device?',
      answer: 'Absolutely. Almost every modern casino is fully mobile-friendly, either through your browser or a dedicated app, so you can play slots, table games and live dealer titles on your phone or tablet wherever you are.'
    }
  ];

  toggleFaq(index: number) {
    this.openFaq = this.openFaq === index ? null : index;
  }
}
