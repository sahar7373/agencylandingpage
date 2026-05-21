import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const Guide = lazy(() => import('./pages/Guide'));
const RevenueBlueprint = lazy(() => import('./pages/RevenueBlueprint'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const Unsubscribe = lazy(() => import('./pages/Unsubscribe'));
const Resources = lazy(() => import('./pages/Resources'));
const PlumbingWebsites = lazy(() => import('./pages/PlumbingWebsites'));
const ElectricianWebsites = lazy(() => import('./pages/ElectricianWebsites'));
const RooferWebsites = lazy(() => import('./pages/RooferWebsites'));
const HVACWebsites = lazy(() => import('./pages/HVACWebsites'));
const BuilderWebsites = lazy(() => import('./pages/BuilderWebsites'));
const CarpenterWebsites = lazy(() => import('./pages/CarpenterWebsites'));
const ConcreteLayerWebsites = lazy(() => import('./pages/ConcreteLayerWebsites'));
const LandscaperWebsites = lazy(() => import('./pages/LandscaperWebsites'));
const PainterWebsites = lazy(() => import('./pages/PainterWebsites'));
const MarketingForTradies = lazy(() => import('./pages/MarketingForTradies'));
const SEOForTradies = lazy(() => import('./pages/SEOForTradies'));
const AutomationPage = lazy(() => import('./pages/AutomationPage'));

// Blog Articles
const WhyTradieWebsitesDontGetCalls = lazy(() => import('./pages/blog/WhyTradieWebsitesDontGetCalls'));
const AIReceptionistForTradies = lazy(() => import('./pages/blog/AIReceptionistForTradies'));
const GoogleBusinessProfileSetup = lazy(() => import('./pages/blog/GoogleBusinessProfileSetup'));
const ElectricianWebsiteRequirements = lazy(() => import('./pages/blog/ElectricianWebsiteRequirements'));
const WebsiteROICalculation = lazy(() => import('./pages/blog/WebsiteROICalculation'));
const SuburbSEOForTradies = lazy(() => import('./pages/blog/SuburbSEOForTradies'));
const ProfessionalTrustSignals = lazy(() => import('./pages/blog/ProfessionalTrustSignals'));
const GoogleAdsVsSEO = lazy(() => import('./pages/blog/GoogleAdsVsSEO'));
const AEOForTradies = lazy(() => import('./pages/blog/AEOForTradies'));
const GoogleAIOverviewsTradieLeads = lazy(() => import('./pages/blog/GoogleAIOverviewsTradieLeads'));

function App() {
    React.useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                const pixelId = import.meta.env.VITE_FB_PIXEL_ID;
                if (pixelId) {
                    ReactPixel.init(pixelId);
                    ReactPixel.pageView();
                } else {
                    console.warn("Meta Pixel ID not found in VITE_FB_PIXEL_ID");
                }
            });

        // GA4 Initialization
        import('react-ga4')
            .then((x) => x.default)
            .then((ReactGA) => {
                const gaId = import.meta.env.VITE_GA_ID;
                if (gaId) {
                    ReactGA.initialize(gaId);
                    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
                } else {
                    console.warn("GA4 ID not found in VITE_GA_ID");
                }
            });
    }, []);

    return (
        <HelmetProvider>
            <BrowserRouter>
                <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/guide" element={<Guide />} />
                    <Route path="/guide-pdf" element={<Guide />} />
                    <Route path="/blueprint" element={<RevenueBlueprint />} />
                    <Route path="/blueprint-pdf" element={<RevenueBlueprint />} />
                    <Route path="/unsubscribe" element={<Unsubscribe />} />
                    <Route path="/resources" element={<Resources />} />

                    {/* Blog Articles */}
                    <Route path="/resources/why-tradie-websites-dont-get-calls" element={<WhyTradieWebsitesDontGetCalls />} />
                    <Route path="/resources/ai-receptionist-for-tradies" element={<AIReceptionistForTradies />} />
                    <Route path="/resources/google-business-profile-setup" element={<GoogleBusinessProfileSetup />} />
                    <Route path="/resources/electrician-website-requirements" element={<ElectricianWebsiteRequirements />} />
                    <Route path="/resources/website-roi-calculation" element={<WebsiteROICalculation />} />
                    <Route path="/resources/suburb-seo-for-tradies" element={<SuburbSEOForTradies />} />
                    <Route path="/resources/professional-trust-signals" element={<ProfessionalTrustSignals />} />
                    <Route path="/resources/google-ads-vs-seo-tradies" element={<GoogleAdsVsSEO />} />
                    <Route path="/resources/aeo-for-tradies" element={<AEOForTradies />} />
                    <Route path="/resources/google-ai-overviews-tradie-leads" element={<GoogleAIOverviewsTradieLeads />} />

                    {/* Trade-Specific Landing Pages */}
                    <Route path="/plumbing-websites" element={<PlumbingWebsites />} />
                    <Route path="/electrician-websites" element={<ElectricianWebsites />} />
                    <Route path="/roofer-websites" element={<RooferWebsites />} />
                    <Route path="/hvac-websites" element={<HVACWebsites />} />
                    <Route path="/builder-websites" element={<BuilderWebsites />} />
                    <Route path="/carpenter-websites" element={<CarpenterWebsites />} />
                    <Route path="/concrete-layer-websites" element={<ConcreteLayerWebsites />} />
                    <Route path="/landscaper-websites" element={<LandscaperWebsites />} />
                    <Route path="/painter-websites" element={<PainterWebsites />} />
                    <Route path="/marketing-for-tradies" element={<MarketingForTradies />} />
                    <Route path="/seo-for-tradies" element={<SEOForTradies />} />
                    <Route path="/automation" element={<AutomationPage />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                </Suspense>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
