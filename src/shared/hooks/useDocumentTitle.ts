import { useEffect } from 'react';
import { brand } from '../ui/brand/brand';

export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${brand.name}` : brand.title;
  }, [title]);
}
