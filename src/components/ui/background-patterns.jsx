import React from "react";
import { cn } from "@/lib/utils";

/**
 * BGPattern — pure-CSS background texture (no images / no external assets).
 * Faithful to the 21st.dev "Background Patterns" component API
 * (https://21st.dev/community/components/efferd/background-patterns):
 *   variant: 'grid' | 'dots' | 'diagonal-stripes' | 'horizontal-lines' | 'vertical-lines' | 'checkerboard'
 *   mask:    'none' | 'fade-edges' | 'fade-center' | 'fade-x' | 'fade-y'
 *          | 'fade-top' | 'fade-bottom' | 'fade-left' | 'fade-right'
 */

const getMaskImage = (mask) => {
    switch (mask) {
        case "fade-edges":
            return "radial-gradient(ellipse at center, #000 40%, transparent 100%)";
        case "fade-center":
            return "radial-gradient(ellipse at center, transparent 0%, #000 80%)";
        case "fade-x":
            return "linear-gradient(to right, transparent, #000 25%, #000 75%, transparent)";
        case "fade-y":
            return "linear-gradient(to bottom, transparent, #000 25%, #000 75%, transparent)";
        case "fade-top":
            return "linear-gradient(to bottom, transparent, #000 35%)";
        case "fade-bottom":
            return "linear-gradient(to top, transparent, #000 35%)";
        case "fade-left":
            return "linear-gradient(to right, transparent, #000 35%)";
        case "fade-right":
            return "linear-gradient(to left, transparent, #000 35%)";
        default:
            return undefined;
    }
};

const getBackgroundImage = (variant, fill, size) => {
    switch (variant) {
        case "dots":
            return `radial-gradient(${fill} 1px, transparent 1px)`;
        case "grid":
            return `linear-gradient(to right, ${fill} 1px, transparent 1px), linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
        case "diagonal-stripes":
            return `repeating-linear-gradient(45deg, ${fill}, ${fill} 1px, transparent 1px, transparent ${size}px)`;
        case "horizontal-lines":
            return `linear-gradient(to bottom, ${fill} 1px, transparent 1px)`;
        case "vertical-lines":
            return `linear-gradient(to right, ${fill} 1px, transparent 1px)`;
        case "checkerboard":
            return `linear-gradient(45deg, ${fill} 25%, transparent 25%), linear-gradient(-45deg, ${fill} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${fill} 75%), linear-gradient(-45deg, transparent 75%, ${fill} 75%)`;
        default:
            return undefined;
    }
};

export const BGPattern = ({
    variant = "grid",
    mask = "none",
    size = 24,
    fill = "rgba(26,26,26,0.06)",
    className,
    style,
    ...props
}) => {
    const maskImage = getMaskImage(mask);
    const backgroundImage = getBackgroundImage(variant, fill, size);

    return (
        <div
            aria-hidden="true"
            className={cn("absolute inset-0 pointer-events-none", className)}
            style={{
                backgroundImage,
                backgroundSize:
                    variant === "diagonal-stripes"
                        ? undefined
                        : `${size}px ${size}px`,
                maskImage,
                WebkitMaskImage: maskImage,
                ...style,
            }}
            {...props}
        />
    );
};

export default BGPattern;
