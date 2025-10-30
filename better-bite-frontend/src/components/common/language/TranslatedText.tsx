"use client";

import { usePathname } from "next/navigation";

const TranslatedText = ({ en, ban }: { en: string; ban: string }) => {
  const pathName = usePathname();

  return <span>{pathName.startsWith("/ban") ? ban : en}</span>;
};

export default TranslatedText;
