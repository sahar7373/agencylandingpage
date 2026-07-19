import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { initAnalytics } from './lib/analytics';

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
const AdelaideLocationPage = lazy(() => import('./pages/AdelaideLocationPage'));
const SydneyLocationPage = lazy(() => import('./pages/SydneyLocationPage'));
const PerthLocationPage = lazy(() => import('./pages/PerthLocationPage'));
const BrisbaneLocationPage = lazy(() => import('./pages/BrisbaneLocationPage'));
const GoldCoastLocationPage = lazy(() => import('./pages/GoldCoastLocationPage'));
const MelbourneLocationPage = lazy(() => import('./pages/MelbourneLocationPage'));
const HobartLocationPage = lazy(() => import('./pages/HobartLocationPage'));
const AliceSpringsLocationPage = lazy(() => import('./pages/AliceSpringsLocationPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

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
const TradiWebsiteCostAustralia = lazy(() => import('./pages/blog/TradiWebsiteCostAustralia'));
const SuburbSEOAdelaideTradies = lazy(() => import('./pages/blog/SuburbSEOAdelaideTradies'));
const SuburbSEOSydneyRoofers = lazy(() => import('./pages/blog/SuburbSEOSydneyRoofers'));
const SuburbSEOBrisbaneRoofers = lazy(() => import('./pages/blog/SuburbSEOBrisbaneRoofers'));
const WhatMissedCallsCost = lazy(() => import('./pages/blog/WhatMissedCallsCost'));

function App() {
    React.useEffect(() => {
        // GA4 + Meta Pixel init, both prod-gated. See src/lib/analytics.js
        initAnalytics();
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
                    <Route path="/resources/tradie-website-cost-australia" element={<TradiWebsiteCostAustralia />} />
                    <Route path="/resources/suburb-seo-for-adelaide-tradies" element={<SuburbSEOAdelaideTradies />} />
                    <Route path="/resources/suburb-seo-for-sydney-roofers" element={<SuburbSEOSydneyRoofers />} />
                    <Route path="/resources/suburb-seo-for-brisbane-roofers" element={<SuburbSEOBrisbaneRoofers />} />
                    <Route path="/resources/what-missed-calls-cost-tradies" element={<WhatMissedCallsCost />} />

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
                    <Route path="/tradie-website-design-adelaide" element={<AdelaideLocationPage />} />
                    <Route path="/tradie-website-design-sydney" element={<SydneyLocationPage />} />
                    <Route path="/tradie-website-design-perth" element={<PerthLocationPage />} />
                    <Route path="/tradie-website-design-brisbane" element={<BrisbaneLocationPage />} />
                    <Route path="/tradie-website-design-gold-coast" element={<GoldCoastLocationPage />} />
                    <Route path="/tradie-website-design-melbourne" element={<MelbourneLocationPage />} />
                    <Route path="/tradie-website-design-hobart" element={<HobartLocationPage />} />
                    <Route path="/tradie-website-design-alice-springs" element={<AliceSpringsLocationPage />} />

                    <Route path="/about" element={<AboutPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                </Suspense>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
