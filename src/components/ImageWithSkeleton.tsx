import React, { useState, useEffect } from "react";

interface ImageWithSkeletonProps {
  src?: string;
  alt?: string;
  className?: string;
  wrapperClassName?: string;
  skeletonClassName?: string;
  referrerPolicy?: React.HTMLAttributeReferrerPolicy;
  [key: string]: any;
}

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  skeletonClassName = "",
  referrerPolicy = "no-referrer",
  ...props
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset state if src changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`} id="image-with-skeleton-wrapper">
      {/* Skeleton Shimmer Overlay */}
      {!isLoaded && !error && (
        <div 
          id="image-skeleton-shimmer"
          className={`absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800 animate-pulse ${skeletonClassName}`}
          style={{
            backgroundSize: "200% 100%",
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
          }}
        >
          {/* Subtle logo/icon inside the skeleton loader */}
          <div className="absolute inset-0 flex items-center justify-center opacity-25">
            <svg 
              className="w-10 h-10 text-slate-400 dark:text-zinc-500 animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
        </div>
      )}

      {/* Fallback if image fails */}
      {error && (
        <div className="absolute inset-0 bg-slate-100 dark:bg-zinc-900 flex flex-col items-center justify-center text-slate-400 p-4">
          <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span className="font-mono text-[9px] tracking-widest uppercase">Asset Unavailable</span>
        </div>
      )}

      {/* The Actual Image element */}
      <img
        src={src}
        alt={alt}
        referrerPolicy={referrerPolicy}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`${className} transition-opacity duration-700 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0 absolute"
        }`}
        {...props}
      />
    </div>
  );
}
