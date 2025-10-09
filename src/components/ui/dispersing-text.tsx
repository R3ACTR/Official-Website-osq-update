'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function DispersingText({ children }: { children: string }) {
  const letters = children.split('');

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
            transform: `
              rotate(${Math.random() * 60 - 30}deg)
              translateX(${Math.random() * 80 - 40}px)
              translateY(${Math.random() * 80 - 40}px)
              scale(0.5)
            `,
          }}
        >
          <span
            className="inline-block transition-transform duration-500 ease-out group-hover:transform-none"
            style={{
              transitionDelay: `${i * 30}ms`,
              transform: `
                rotate(${-(Math.random() * 60 - 30)}deg)
                translateX(${-(Math.random() * 80 - 40)}px)
                translateY(${-(Math.random() * 80 - 40)}px)
                scale(1.5)
              `,
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </h1>
  );
}
