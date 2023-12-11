import { TopbarContainer } from "./Topbar.style";
import { NotificationIcon, SearchIcon } from "../../assets/icons";
import Link from "next/link";

interface TopbarProps {
  sidebarRef: React.RefObject<HTMLDivElement>;
}

export function Topbar(
  { sidebarRef }: TopbarProps
) {

  function onSandwichClick() {
    sidebarRef.current?.classList.toggle("open");
  }

  return (
    <TopbarContainer>
      {/* add sandwich button */}
      <button className="sandwich-button" aria-label="menu" onClick={onSandwichClick}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <form className="search-bar" role="search">
        <button className="search-button" aria-label="search">
          <SearchIcon />
        </button>
        <input type="text" placeholder="Search chatter" />
          </form>
          <div>
              <Link href="" aria-label="notifications">
                  <NotificationIcon />
              </Link>
          </div>
    </TopbarContainer>
  );
}
