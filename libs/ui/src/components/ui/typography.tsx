import React from 'react';
import { cn } from '../../lib';
import { type VariantProps, cva } from 'class-variance-authority';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export const Heading1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        className={cn('text-4xl font-extrabold tracking-tight', className)}
        {...props}
        ref={ref}
      >
        {children}
      </h1>
    );
  },
);
Heading1.displayName = 'Heading1';

export const Heading2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        className={cn(
          'pb-2 text-3xl font-semibold tracking-tight first:mt-0',
          className,
        )}
        {...props}
        ref={ref}
      >
        {children}
      </h2>
    );
  },
);
Heading2.displayName = 'Heading2';

export const Heading3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3
        className={cn('text-2xl font-semibold tracking-tight', className)}
        {...props}
        ref={ref}
      >
        {children}
      </h3>
    );
  },
);
Heading3.displayName = 'Heading3';

export const Heading4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h4
        className={cn('text-xl font-semibold tracking-tight', className)}
        {...props}
        ref={ref}
      >
        {children}
      </h4>
    );
  },
);
Heading4.displayName = 'Heading3';

const textVariants = cva('font-sans font-normal', {
  variants: {
    variant: {
      default: 'leading-7 text-base',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const Text = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & VariantProps<typeof textVariants>
>(({ className, children, variant, ...props }, ref) => {
  return (
    <p
      className={cn(textVariants({ variant, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </p>
  );
});
Text.displayName = 'Text';
