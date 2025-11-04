import type { PostHideElements } from '~/content/config';

export const Site = 'https://astro-blog-zozo.pages.dev';
export const SiteLanguage = 'en';
export const SiteTitle = 'Kazeous blog';
export const SiteDescription = 'quiet life, or a blaze of glory';
export const FooterDescription = 'OUS production';
export const AdminName = 'Kaze';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	mail: { url: 'mailto:vu.nguyenanh@reyuugames.com' },
	github: { url: 'https://github.com/kazeous' },
	x: { url: 'https://x.com/kazetheshou' },
	mastodon: { url: 'https://mastodon.social/@userName' },
	facebook: { url: 'https://facebook.com/kazeous' },
	instagram: { url: 'https://instagram.com/kaze.ous' },
	telegram: { url: 'https://t.me/@kazeous' },
	youtube: { url: 'https://youtube.com/@kazeous' },
	twitch: { url: 'https://twitch.com/kazeous' },
	rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'kazeous/kaze-blog',
	'data-repo-id': 'R_kgDOQOtwKg',
	'data-category': 'General',
	'data-category-id': 'DIC_kwDOQOtwKs4CxaSJ',
	'data-mapping': 'pathname',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'en-US',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
