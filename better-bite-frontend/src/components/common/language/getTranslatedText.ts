import { UseCommonImports } from "@/utils/UseCommonImports";

const getTranslatedText = ({ ar, en }: { en: string; ar: string }): string => {
  const { Router } = UseCommonImports();
  const pathName = Router.pathname;
  return pathName.startsWith("/ar") ? ar : en;
};

export default getTranslatedText;
