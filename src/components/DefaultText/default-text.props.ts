export enum DefaultTextPreset {
  XXSmallTitle = "xxsmalltitle",
  XXSmall = "xxsmall",
  XSmall = "xsmall",
  Description = "description",
  Small = "small",
  Medium = "medium",
  Large = "large",
  Title = "title",
}

export interface IDefaultTextProps {
  preset?: DefaultTextPreset;
  color?: string;
}
