import { SidebarContainer } from "./Sidebar.style";
import {
  AccountIcon,
  AnalyticsIcon,
  BookmarksIcon,
  DraftsIcon,
  FeedIcon,
  NotificationIcon,
  TeamBlogsIcon,
  TrendingTagsIcon,
} from "../../assets/icons";
import { useRef } from "react";
import { useAuthContext } from "../../contexts";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";

interface SidebarProps {
  sidebarRef: React.RefObject<HTMLDivElement>;
}

export function Sidebar({ sidebarRef }: SidebarProps) {
  function onCloseClick() {
    sidebarRef.current?.classList.remove("open");
  }

  const { signout } = useAuthContext();
  return (
    <SidebarContainer ref={sidebarRef}>
      <div className="logo">
        <Link href="/">CHATTER</Link>
        <button
          className="close-button"
          aria-label="close sidebar"
          onClick={onCloseClick}
        >
          <div></div>
          <div></div>
        </button>
      </div>
      <div className="links">
        <section className="overview">
          <h4>Overview</h4>
          <div>
            <NavLink href="/feed" end>
              <span className="icon">
                <FeedIcon />
              </span>
              <span>Feed</span>
            </NavLink>
            <NavLink href="" end>
              <span className="icon">
                <BookmarksIcon />
              </span>
              <span>Bookmarks</span>
            </NavLink>
            <NavLink href="" end>
              <span className="icon">
                <TeamBlogsIcon />
              </span>
              <span>Team blogs</span>
            </NavLink>
            <NavLink href="" end>
              <span className="icon">
                <DraftsIcon />
              </span>
              <span>Drafts</span>
            </NavLink>
            <NavLink href="" end>
              <span className="icon">
                <AnalyticsIcon />
              </span>
              <span>Analytics</span>
            </NavLink>
          </div>
        </section>
        <section className="trending-tags">
          <h4>
            <span>Trending tags</span>
            <span>
              <TrendingTagsIcon />
            </span>
          </h4>
          <div className="tags">
            <NavLink href="" end>
              Programming
            </NavLink>
            <NavLink href="" end>
              Data science
            </NavLink>
            <NavLink href="" end>
              Technology
            </NavLink>
            <NavLink href="" end>
              Machine learning
            </NavLink>
            <NavLink href="" end>
              Politics
            </NavLink>
            <NavLink href="" end>
              See all
            </NavLink>
          </div>
        </section>
        <section className="personal">
          <h4>Personal</h4>
          <div>
            <NavLink href="" end>
              <span className="icon">
                <AccountIcon />
              </span>
              <span>Account</span>
            </NavLink>
            <NavLink href="" end>
              <span className="icon">
                <NotificationIcon />
              </span>
              <span>Notifications</span>
            </NavLink>
            <button className="logout" onClick={signout}>
              <h4>Log out</h4>
            </button>
          </div>
        </section>
      </div>
    </SidebarContainer>
  );
}
