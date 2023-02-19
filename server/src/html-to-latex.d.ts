declare module "html-to-latex" {
  export function convertText(html: string): Promise<string>;
}
