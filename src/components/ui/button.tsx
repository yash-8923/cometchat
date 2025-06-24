import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/25 hover:shadow-primary/40",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-destructive/25 hover:shadow-destructive/40",
        outline:
          "border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-secondary/25 hover:shadow-secondary/40",
        ghost:
          "hover:bg-accent hover:text-accent-foreground shadow-none hover:shadow-lg",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 py-2",
        lg: "h-14 rounded-xl px-8 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
