type Props = {
    children: string
}

export const HText = ({children}: Props) => {
  return (
    <div className="text-xl">{children}</div>
  )
}