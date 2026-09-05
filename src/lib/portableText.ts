import { toHTML } from '@portabletext/to-html';
import { urlFor } from './sanity';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/** Renders a post body to HTML with typography matching the Journal design. */
export function renderBody(body: any): string {
  if (!body) return '';
  return toHTML(body, {
    components: {
      block: {
        normal: ({ children }) =>
          `<p style="margin:0;font:400 18px/1.72 'Helvetica Neue',Helvetica,sans-serif;color:rgba(0,0,0,.78)">${children}</p>`,
        h1: ({ children }) =>
          `<h1 style="margin:20px 0 0;font:400 clamp(30px,3.6vw,40px)/1.16 'Helvetica Neue',Helvetica,sans-serif;letter-spacing:-.026em">${children}</h1>`,
        h2: ({ children, value }) => {
          const text = (value.children ?? []).map((c: any) => c.text).join('');
          const id = slugify(text);
          return `<h2 id="${id}" style="margin:14px 0 0;font:400 clamp(26px,3vw,34px)/1.2 'Helvetica Neue',Helvetica,sans-serif;letter-spacing:-.024em">${children}</h2>`;
        },
        h3: ({ children }) =>
          `<h3 style="margin:10px 0 0;font:400 clamp(22px,2.6vw,28px)/1.26 'Helvetica Neue',Helvetica,sans-serif;letter-spacing:-.02em">${children}</h3>`,
        h4: ({ children }) =>
          `<h4 style="margin:8px 0 0;font:500 19px/1.3 'Helvetica Neue',Helvetica,sans-serif;letter-spacing:-.01em">${children}</h4>`,
        blockquote: ({ children }) =>
          `<blockquote style="margin:20px 0;padding:0 0 0 28px;border-left:4px solid #16150f"><p style="margin:0;font:400 clamp(22px,2.6vw,28px)/1.44 'Helvetica Neue',Helvetica,sans-serif;letter-spacing:-.018em;color:#16150f">${children}</p></blockquote>`,
      },
      list: {
        bullet: ({ children }) => `<ul style="margin:0;padding-left:22px;display:flex;flex-direction:column;gap:10px;font:400 18px/1.6 'Helvetica Neue',Helvetica,sans-serif;color:rgba(0,0,0,.78)">${children}</ul>`,
        number: ({ children }) => `<ol style="margin:0;padding-left:22px;display:flex;flex-direction:column;gap:10px;font:400 18px/1.6 'Helvetica Neue',Helvetica,sans-serif;color:rgba(0,0,0,.78)">${children}</ol>`,
      },
      marks: {
        strong: ({ children }) => `<strong style="font-weight:500">${children}</strong>`,
      },
      types: {
        image: ({ value }) =>
          `<figure style="margin:14px 0"><img src="${urlFor(value).width(1200).url()}" alt="${value.alt ?? ''}" style="width:100%;display:block" /></figure>`,
      },
    },
  });
}

/** Extracts H2 headings from a post body for the table-of-contents sidebar. */
export function extractHeadings(body: any): { id: string; text: string }[] {
  if (!body || !Array.isArray(body)) return [];
  return body
    .filter((block: any) => block._type === 'block' && block.style === 'h2')
    .map((block: any) => {
      const text = (block.children ?? []).map((c: any) => c.text).join('');
      return { id: slugify(text), text };
    });
}

/** Rough reading time estimate from Portable Text word count (~200wpm). */
export function readingTime(body: any): number {
  if (!body || !Array.isArray(body)) return 1;
  const words = body
    .filter((block: any) => block._type === 'block')
    .flatMap((block: any) => (block.children ?? []).map((c: any) => c.text ?? ''))
    .join(' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
