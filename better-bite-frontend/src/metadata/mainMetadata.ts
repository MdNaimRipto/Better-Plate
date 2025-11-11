import { Metadata } from "next";

export const mainMeta: Metadata = {
  title: "Better Plate | Subscription-Based Meal Plans for Healthy Living",
  description:
    "Better Plate provides subscription-based meal plans to help you eat healthy without the hassle. Choose from weekly, monthly, or 3-month plans, designed to fit your lifestyle and dietary needs.",
  keywords: [
    "Better Plate",
    "Meal Plans",
    "Healthy Meals",
    "Subscription Meal Service",
    "Weekly Meal Plans",
    "Monthly Meal Plans",
    "3-Month Meal Plans",
    "Nutrition Plans",
    "Healthy Eating",
    "Diet Plans",
    "Meal Prep Subscription",
    "Balanced Diet",
    "Personalized Meal Plans",
    "Fitness Meals",
    "Calorie-Controlled Meals",
    "Quick Healthy Meals",
    "Food Delivery Service",
    "Meal Plan Automation",
  ],
  authors: [{ name: "Better Plate" }],
  creator: "Better Plate",
  openGraph: {
    title: "Better Plate | Subscription-Based Meal Plans for Healthy Living",
    description:
      "Better Plate offers flexible subscription-based meal plans to help you maintain a healthy diet effortlessly. Select from weekly, monthly, or quarterly plans and enjoy nutritious, ready-to-eat meals delivered to your door.",
    url: "https://betterplate.com", // replace with actual domain
    siteName: "Better Plate",
    images: [
      {
        url: "https://betterplate.com/og-image.png", // replace with actual OG image
        width: 1200,
        height: 630,
        alt: "Better Plate - Subscription Meal Plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Better Plate | Subscription-Based Meal Plans for Healthy Living",
    description:
      "Better Plate makes healthy eating easy with subscription-based meal plans. Choose weekly, monthly, or quarterly plans tailored to your lifestyle and enjoy nutritious meals delivered to your doorstep.",
    creator: "@betterplate", // replace with your official handle
    images: ["https://betterplate.com/og-image.png"],
  },
};
