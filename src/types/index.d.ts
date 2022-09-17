declare module "*.module" {
  const content: { [className: string]: string };
  export = content;
}