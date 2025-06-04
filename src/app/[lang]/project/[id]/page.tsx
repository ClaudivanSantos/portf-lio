
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import Body from "../components/body";

export default async function Project({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)


  return (
    <Body page={page} />
  )
}