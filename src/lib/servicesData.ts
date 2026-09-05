export interface Service {
  slug: string;
  name: string;
  blurb: string;
}

export const SERVICES: Service[] = [
  { slug: 'google-ads', name: 'Google Ads', blurb: 'Search campaigns built around intent, not just keywords.' },
  { slug: 'google-shopping-ads', name: 'Google Shopping Ads', blurb: 'Feed strategy and bidding for ecommerce catalogs of any size.' },
  { slug: 'youtube-ads', name: 'YouTube Ads', blurb: 'Video campaigns that earn attention before they ask for a click.' },
  { slug: 'advertising-for-amazon', name: 'Advertising for Amazon', blurb: 'Sponsored Products, Brands, and Display, run as one account.' },
  { slug: 'dsp-for-amazon', name: 'DSP for Amazon', blurb: 'Programmatic reach across and beyond Amazon\u2019s own properties.' },
  { slug: 'brand-mgmt-for-amazon', name: 'Brand Mgmt for Amazon', blurb: 'Listings, content, and catalog health, managed end to end.' },
  { slug: 'email-sms', name: 'Email & SMS', blurb: 'Lifecycle flows and campaigns that carry their weight in retention.' },
  { slug: 'facebook-ads', name: 'Facebook', blurb: 'Meta campaigns built for a post-iOS14 measurement reality.' },
  { slug: 'tiktok-ads', name: 'TikTok Ads', blurb: 'Native-feeling creative testing at the pace the platform demands.' },
];
