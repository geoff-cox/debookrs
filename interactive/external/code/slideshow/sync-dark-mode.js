// Synchronizes dark mode class from parent <html> into iframe <html>
(function syncDarkModeFromParent() {
  try {
    const iframeHtml = document.documentElement;
    const parentClass = window.parent.document.documentElement.className;
    iframeHtml.className = parentClass;

    // Observe changes to the parent's <html class="...">
    const observer = new MutationObserver(() => {
      iframeHtml.className = window.parent.document.documentElement.className;
    });

    observer.observe(window.parent.document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  } catch (err) {
    console.warn("[Slideshow] Could not sync dark mode:", err);
  }
})();
