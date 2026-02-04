import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

const SmoothScroll = () => {
    const { pathname } = useLocation();
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    // Handle Scroll to Top on route change
    useEffect(() => {
        if (lenisRef.current) {
            // Delay scroll to top to match page transition exit (300ms)
            // preventing the old page from jumping to top before fading out.
            const timer = setTimeout(() => {
                lenisRef.current?.scrollTo(0, { immediate: true });
            }, 350);
            return () => clearTimeout(timer);
        } else {
            // Fallback
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
};

export default SmoothScroll;
