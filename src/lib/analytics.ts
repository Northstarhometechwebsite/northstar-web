declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
  }
}

export function trackFormSubmit(formType: string, projectType?: string) {
  trackEvent("form_submit_contact", { form_type: formType, project_type: projectType });
}

export function trackCTAClick(ctaName: string) {
  trackEvent("click_schedule", { cta_name: ctaName });
}

export function trackPhoneClick() {
  trackEvent("click_phone");
}

export function trackEmailClick() {
  trackEvent("click_email");
}

export function trackStudioTour() {
  trackEvent("click_studio_tour");
}
