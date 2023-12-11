"use client"
import { ReasonCardContainer } from "./ReasonCard.style";

interface ReasonCardProps {
  title: string;
  description: string;
  icon: any;
}
export function ReasonCard({ title, description, icon }: ReasonCardProps) {
  return (
    <ReasonCardContainer>
      <div className="icon">
        <img src={icon.src} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </ReasonCardContainer>
  );
}
