export enum DefaultLinkPreset {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export interface IDefaultLinkProps {
  preset?: DefaultLinkPreset;
  color?: string;
  href: string;
  title?: string;
}
