import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  end?: boolean;
    className?: string;
    children: React.ReactNode;
    
}

export default function NavLink({ ...props }: NavLinkProps) {
  const currentRoute = usePathname();
  const isActive = props.end
    ? currentRoute === props.href.toString()
    : currentRoute.split("/")[1] === props.href.toString().split("/")[1];

  const { end, className,children, ...linkProps } = props;

  return (
      <Link {...linkProps} className={`${className? className:"" } ${isActive ? "active":""}`} >
          {children}
    </Link>
  );
}
