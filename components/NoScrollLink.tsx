import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface IProps extends LinkProps {
    children: ReactNode
}


const NoScrollLink = ({ children, href, passHref }: IProps): JSX.Element => (
    <Link href={href} passHref={passHref} scroll={false}>
        {children}
    </Link>
)

export default NoScrollLink