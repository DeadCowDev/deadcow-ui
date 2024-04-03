"use client";

import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      headlineXl: "font-bold text-[56px]/[64px]",
      headlineL: "font-bold text-[40px]/[48px]",
      headlineS: "font-bold text-[32px]/[48px]",

      longTextBold: "font-bold text-[24px]/[48px]",
      longTextMedium: "font-medium text-[24px]/[48px]",
      longTextRegular: "font-normal text-[24px]/[48px]",

      titleXlBold: "font-bold text-[28px]/[32px]",
      titleLBold: "font-bold text-[24px]/[32px]",
      titleLMedium: "font-medium text-[24px]/[32px]",
      titleLRegular: "font-normal text-[24px]/[32px]",

      mediumTextBold: "font-bold text-[20px]/[32px]",
      mediumTextMedium: "font-medium text-[20px]/[32px]",
      mediumTextRegular: "font-normal text-[20px]/[32px]",

      smallTextXlBold: "font-bold text-[20px]/[24px]",
      smallTextXlMedium: "font-medium text-[20px]/[24px]",
      smallTextXlRegular: "font-normal text-[20px]/[24px]",

      smallTextLBold: "font-bold text-[16px]/[24px]",
      smallTextLMedium: "font-medium text-[16px]/[24px]",
      smallTextLRegular: "font-normal text-[16px]/[24px]",

      xSmallTextLMedium: "font-medium text-[14px]/[24px]",

      inputLabel: "font-normal text-[14px]/[22px]",

      inputContent: "font-medium text-[16px]/[24px]",

      mobileLongTextBold: "font-bold text-[16px]/[32px]",
      mobileLongTextMedium: "font-medium text-[16px]/[32px]",
      mobileLongTextRegular: "font-normal text-[16px]/[32px]",

      //responsive
      titleLBoldXlTitleXlBold:
        "font-bold text-[24px]/[32px] xl:text-[28px]/[32px]",

      mobileLongTextRegularXlMediumTextRegular:
        "font-normal text-[16px]/[32px] xl:text-[20px]/[32px]",

      smallTextLBoldXlTitleXlBold:
        "font-bold text-[16px]/[24px] xl:text-[28px]/[32px]",

      titleXlBoldXlHeadlineS:
        "font-bold text-[28px]/[32px] xl:text-[32px]/[48px]",

      smallTextXlBoldXlTitleLBold:
        "font-bold text-[20px]/[24px] xl:text-[24px]/[32px]",

      titleXlBoldXlHeadlineL:
        "font-bold text-[28px]/[32px] xl:text-[40px]/[48px]",

      mobileLongTextRegularXlLongTextRegular:
        "font-normal text-[16px]/[32px] xl:text-[24px]/[48px]",

      headlineSXlHeadlineXl:
        "font-bold text-[32px]/[48px] xl:text-[56px]/[64px]",
    },
  },
});

export interface TypographyProps
  extends VariantProps<typeof typographyVariants> {
  className?: string;
  children?: React.ReactNode;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <Slot
        className={cn(typographyVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
