import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Guide from './pages/Guide';
import RevenueBlueprint from './pages/RevenueBlueprint';
import LandingPage from './pages/LandingPage';
import Unsubscribe from './pages/Unsubscribe';

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
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
