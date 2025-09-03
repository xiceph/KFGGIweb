export default function Preparing( props ) {
  const { locale } = props;

  const text = {
    sk: "Obsah pripravujeme, príďte sa pozrieť neskôr",
    en: "Content is being prepared, please check back later"
  }

  return (
    <p className="italic text-gray-600">{text[locale]}</p>
  )
}