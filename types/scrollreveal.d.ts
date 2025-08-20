declare module 'scrollreveal' {
  interface ScrollRevealOptions {
    delay?: number;
    distance?: string;
    duration?: number;
    easing?: string;
    opacity?: number;
    origin?: string;
    reset?: boolean;
    scale?: number;
    cleanup?: boolean;
    desktop?: boolean;
    mobile?: boolean;
    viewFactor?: number;
  }

  interface ScrollRevealInstance {
    reveal(selector: string | Element | NodeList, options?: ScrollRevealOptions): ScrollRevealInstance;
    sync(): void;
    clean(target?: string | Element | NodeList): void;
    destroy(): void;
  }

  const ScrollReveal: (options?: ScrollRevealOptions) => ScrollRevealInstance;
  export = ScrollReveal;
}