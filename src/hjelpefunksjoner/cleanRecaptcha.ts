const cleanGstaticRecaptchaScript = () => {
    const script = document.querySelector(
      'script[src^="https://www.gstatic.com/recaptcha/releases"]'
    );
  
    if (script) {
      script.remove();
    }
  };
  
  /**
   * Function to remove default badge
   *
   * @returns
   */
  const removeDefaultBadge = () => {
    const nodeBadge = document.querySelector('.grecaptcha-badge');
    if (nodeBadge && nodeBadge.parentNode) {
      document.body.removeChild(nodeBadge.parentNode);
    }
  };
  
  /**
   * Function to clear custom badge
   *
   * @returns
   */
  const cleanCustomBadge = (customBadge: HTMLElement | null) => {
    if (!customBadge) {
      return;
    }
  
    while (customBadge.lastChild) {
      customBadge.lastChild.remove();
    }
  };
  
  /**
   * Function to clean node of badge element
   *
   * @param container
   * @returns
   */
  export const cleanBadge = (container?: HTMLElement | string) => {
    if (!container) {
      removeDefaultBadge();
  
      return;
    }
  
    const customBadge = typeof container === 'string' ? document.getElementById(container) : container;
  
    cleanCustomBadge(customBadge);
  };
  
  /**
   * Function to clean google recaptcha script
   *
   * @param scriptId
   * @param container
   */
  export const cleanGoogleRecaptcha = (scriptId: string, container?: HTMLElement | string) => {
    // remove badge
    cleanBadge(container);
  
    // remove old config from window
    /* eslint-disable @typescript-eslint/no-explicit-any */
    (window as any).___grecaptcha_cfg = undefined;
  
    // remove script
    const script = document.querySelector(`#${scriptId}`);
    if (script) {
      script.remove();
    }
  
    cleanGstaticRecaptchaScript();
  };