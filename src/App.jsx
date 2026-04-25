import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Guide from './pages/Guide';
import RevenueBlueprint from './pages/RevenueBlueprint';
import LandingPage from './pages/LandingPage';
import Unsubscribe from './pages/Unsubscribe';
import Resources from './pages/Resources';
import PlumbingWebsites from './pages/PlumbingWebsites';
import ElectricianWebsites from './pages/ElectricianWebsites';
import RooferWebsites from './pages/RooferWebsites';
import HVACWebsites from './pages/HVACWebsites';
import BuilderWebsites from './pages/BuilderWebsites';
import CarpenterWebsites from './pages/CarpenterWebsites';
import ConcreteLayerWebsites from './pages/ConcreteLayerWebsites';
import LandscaperWebsites from './pages/LandscaperWebsites';
import PainterWebsites from './pages/PainterWebsites';
import MarketingForTradies from './pages/MarketingForTradies';
import SEOForTradies from './pages/SEOForTradies';

// Blog Articles
import WhyTradieWebsitesDontGetCalls from './pages/blog/WhyTradieWebsitesDontGetCalls';
import AIReceptionistForTradies from './pages/blog/AIReceptionistForTradies';
import GoogleBusinessProfileSetup from './pages/blog/GoogleBusinessProfileSetup';
import ElectricianWebsiteRequirements from './pages/blog/ElectricianWebsiteRequirements';
import WebsiteROICalculation from './pages/blog/WebsiteROICalculation';
import SuburbSEOForTradies from './pages/blog/SuburbSEOForTradies';
import ProfessionalTrustSignals from './pages/blog/ProfessionalTrustSignals';
import GoogleAdsVsSEO from './pages/blog/GoogleAdsVsSEO';
import AEOForTradies from './pages/blog/AEOForTradies';
import GoogleAIOverviewsTradieLeads from './pages/blog/GoogleAIOverviewsTradieLeads';

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

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
