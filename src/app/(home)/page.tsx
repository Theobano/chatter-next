"use client";
import { HomeContainer } from "./Home.style";
import AboutChatterImage from "./about-chatter-image.svg";
import { ReasonCard } from "./ReasonCard";
import AnalyticsIcon from "./images/analytics-icon.svg";
import ContentCreationIcon from "./images/content-creation-icon.svg";
import SocialInteractionsIcon from "./images/social-interactions-icon.svg";
import AdebobolaMuhydeenImage from "./images/adebobola-muhydeen-image.svg";
import GetStartedImage1 from "./images/get-started-image-1.svg";
import GetStartedImage2 from "./images/get-started-image-2.svg";
import GetStartedImage3 from "./images/get-started-image-3.svg";
import Link from "next/link";

export default function Home() {
  return (
    <HomeContainer>
      <header>
        <div className="overlay">
          <div>
            <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
            <p>
              Unleash the Power of Words, Connext with Like-minded Readers and
              Writers
            </p>
            <Link href="/auth/register" className="styled-button">
              Get started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="section about" id="about">
          <div className="about-chatter">
            <div>
              <h1>About Chatter</h1>
              <p>
                Chatter is a multi-functional platform where authors and readers
                can have access to their own content. It aims to be a
                traditional bookworm’s heaven and a blog to get access to more
                text based content. Our vision is to foster an inclusive and
                vibrant community where diversity is celebrated. We encourage
                open-mindedness and respect for all individuals, regardless of
                their backgrounds or beliefs. By promoting dialogue and
                understanding, we strive
              </p>
            </div>
            <div className="about-chatter-image">
              <img src={AboutChatterImage.src} alt="About Chatter" />
            </div>
          </div>
        </section>
        <section className="section why-chatter">
          <div>
            <h1>Why you should join chatter</h1>
            <p>
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions,
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great ideas with
              people
            </p>
          </div>
          <div className="reasons">
            <ReasonCard
              title="Analytics"
              description="Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time"
              icon={AnalyticsIcon}
            />
            <ReasonCard
              title="Social Interactions"
              description="Write nice and appealing with our in-built markdown, a rich text editor"
              icon={SocialInteractionsIcon}
            />
            <ReasonCard
              title="Content Creation"
              description="Users on the platform can interact with posts they like, comment and engage in discussions"
              icon={ContentCreationIcon}
            />
          </div>
        </section>
        <section className="section join-chatter">
          <div>
            <img src={AdebobolaMuhydeenImage.src} alt="Adebobola Muhydeen" />
          </div>
          <div className="text">
            <div>
              <p>
                "Chatter has become an integral part of my online experience. As
                a user of this incredible blogging platform, I have discovered a
                vibrant community of individuals who are passionate about
                sharing their ideas and engaging in thoughtful discussions.”
              </p>
              <p>
                <em>Adebobola Muhydeen,</em> Software developer at Apple
              </p>
            </div>
                <Link href="/auth/register" className="styled-button">
                  Join chatter
                </Link>
          </div>
        </section>
        <section className="section get-started">
          <div>
            <div>
              <img src={GetStartedImage1.src} alt="human" />
              <img src={GetStartedImage2.src} alt="human" />
            </div>
            <div>
              <img src={GetStartedImage3.src} alt="human" />
            </div>
          </div>
          <div>
              <div>
                <h1>Write, read and connect with great minds on chatter</h1>
                <p>
                  Share people your great ideas, and also read write-ups based on
                  your interests. connect with people of same interests and goals
                </p>
                <Link href="/auth/register" className="styled-button">
                  Get started
                </Link>
              </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div>
          <Link href="/" className="logo">
            Chatter
          </Link>
        </div>
        <div>
          <h3>Explore</h3>
          <p>Community</p>
          <p>Trending blogs</p>
          <p>Chatter for teams</p>
        </div>
        <div>
          <h3>Support</h3>
          <p>Support docs</p>
          <p>Join slack</p>
          <p>Contact</p>
        </div>
        <div>
          <h3>Official blog</h3>
          <p>Official blog</p>
          <p>Engineering blog</p>
        </div>
      </footer>
    </HomeContainer>
  );
}
