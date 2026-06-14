'use strict';

'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

export type ButtonVariant = 'primary' | 'secondary';

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  as?: React.ElementType;
}

const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(function StyledButton(
  { variant = 'primary', as: Component = 'button', className = '', ...props },
  ref,
) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md focus:outline-none disabled:opacity-50';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#005F56] to-[#047857] text-white hover:from-[#004B4A] hover:to-[#036647] focus:ring-2 focus:ring-offset-2 focus:ring-[#005F56]',
    secondary:
      'bg-white text-teal-800 border border-teal-800/30 hover:bg-teal-50 hover:border-teal-800/50 backdrop-blur-md',
  }[variant];

  const ComponentWrapper = Component as any;

  return (
    <ComponentWrapper
      ref={ref}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    />
  );
});

export default StyledButton;
