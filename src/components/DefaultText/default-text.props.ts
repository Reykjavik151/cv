export enum DefaultTextPreset {
  Small = "small",
  Medium = "medium",
  Large = "large",
  Description = "description",
  Title = "title",
}

export interface IDefaultTextProps {
  preset?: DefaultTextPreset;
}
