
'use client';

import React, { useState, useEffect } from 'react';

type LetterStyle = {
  dispersed: React.CSSProperties;
  condensed: React.CSSProperties;
};

export function DispersingText({ children }: { children: string }) {
  const letters = children.split('');
  const [styles, setStyles] = useState<LetterStyle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setStyles(
      letters.map(() => ({
        dispersed: {
          transform: `
            rotate(${Math.random() * 60 - 30}deg)
            translateX(${Math.random() * 80 - 40}px)
            translateY(${Math.random() * 80 - 40}px)
            scale(0.5)
          `,
        },
        condensed: {
          transform: `
            rotate(${-(Math.random() * 60 - 30)}deg)
            translateX(${-(Math.random() * 80 - 40)}px)
            translateY(${-(Math.random() * 80 - 40)}px)
            scale(1.5)
          `,
        },
      }))
    );
  }, [children]);

  if (!isClient) {
    return (
        <h1 className="text-9xl font-headline font-bold text-black animate-futuristic-arrival group">
            {children}
        </h1>
    );
  }

  return (
    <h1
      className="text-9xl font-headline font-bold text-black animate-futuristic-arrival group"
    >
      {letters.map((letter, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-500 ease-out group-hover:opacity-0 group-hover:transform"
          style={{
            transitionDelay: `${i * 30}ms`,
            ...(styles[i]?.dispersed),
          }}
        >
          <span
            className="inline-block transition-transform duration-500 ease-out group-hover:transform-none"
            style={{
              transitionDelay: `${i * 30}ms`,
              ...(styles[i]?.condensed),
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </h1>
  );
}
