import React from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoSrc }) => {
    const videoRef = React.useRef(null);
    const isVimeo = videoSrc?.includes('vimeo.com');

    React.useEffect(() => {
        if (isOpen && videoRef.current && !isVimeo) {
            videoRef.current.playbackRate = 1.35;
        }
    }, [isOpen, isVimeo]);

    if (!isOpen) return null;

    // Extract Vimeo ID from URL: https://vimeo.com/1160709635?share=copy...
    const getVimeoId = (url) => {
        const match = url.match(/vimeo\.com\/(\d+)/);
        return match ? match[1] : null;
    };

    const vimeoId = isVimeo ? getVimeoId(videoSrc) : null;

    return (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-black border border-white/10 w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-[130] bg-black/50 p-2 rounded-full"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="aspect-video w-full bg-black flex items-center justify-center">
                    {isVimeo ? (
                        <iframe
                            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Video Demo"
                        ></iframe>
                    ) : (
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            className="w-full h-full"
                            controls
                            autoPlay
                            playsInline
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
