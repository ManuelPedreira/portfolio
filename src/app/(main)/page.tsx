import { getTranslations } from "next-intl/server";
import styles from "./page.module.css";
import LanguageSwitcher from "@/ui/LanguageSwitcher/LanguageSwitcher";

export default async function Home() {
  const t = await getTranslations();

  return (
    <>
      <div>Main page</div>
      <p>{t("Info.name")}</p>
      <LanguageSwitcher />
    </>
  );
}
