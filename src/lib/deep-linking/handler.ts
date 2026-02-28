import { App, URLOpenListenerEvent } from '@capacitor/app';

type RouterLike = {
  push: (path: string) => void;
};

const HANDLED_PATH_PREFIXES = [
  '/explore',
  '/lessons',
  '/auth/callback',
  '/modules',
] as const;

export function setupDeepLinks(router: RouterLike) {
  if (typeof window !== 'undefined') {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      const url = new URL(event.url);
      if (url.hostname === 'koydo.app' || url.hostname === 'localhost') {
        const path = url.pathname + url.search;
        const isHandled = HANDLED_PATH_PREFIXES.some((prefix) => path.startsWith(prefix));
        if (isHandled) {
          router.push(path);
        }
      }
    });
  }
}
