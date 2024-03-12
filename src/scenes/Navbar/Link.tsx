import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string,
  selectedPage: SelectedPage,
  setSelectedPage: (value: SelectedPage) => void,
  setIsMenuToggled: (value: boolean) => void,
}

export const Link = ({ page, setSelectedPage, selectedPage, setIsMenuToggled }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <>
      <AnchorLink
        className={`${(selectedPage === lowerCasePage) ? "text-primary-500" : ''} 
  transition duration-500 hover:text-primary-300  `}
        href={`#${lowerCasePage}`}
        onClick={() => {setSelectedPage(lowerCasePage);
          setIsMenuToggled(false)}}
      >{page}</AnchorLink>
    </>
  )
}