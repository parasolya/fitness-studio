import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    icon: JSX.Element;
title: string;
    description: string;

}

export const Benefit = ({icon, title, description}: Props) => {
  return (
    <div className='py-5 text-center flex flex-col gap-5 items-center border-2 rounded-sm'>
        <div>{icon}</div>
        <h1>{title}</h1>
        <p>{description}</p>
        <AnchorLink href='#`${SelectedPage}'>Learn More</AnchorLink>
    </div>
  )
}