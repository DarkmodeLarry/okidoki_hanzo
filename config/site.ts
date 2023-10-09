export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'OkiDoki',
  description: 'We make it documenting easy.',
  mainNav: [
    {
      title: 'Dashboard',
      href: '/dashboard'
    },
    {
      title: 'Select Form',
      href: '/forms'
    },
    {
      title: 'Review Form',
      href: '/formreview'
    },
    {
      title: 'Forms',
      href: '/forms'
    }
  ],
  links: {
    github: 'https://github.com/hanzo/ui',
    docs: 'https://ui.shadcn.com'
  }
}
