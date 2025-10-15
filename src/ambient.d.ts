interface SelectedImage {
  isSelected: boolean;
  image: string | null;
  alt?: string;
}

type Project = {
  title: string,
  slug: { current: string },
  tags: string[],
  date: Date,
  content: PortableText,
  summary: string,
  cover: { asset: string },
  carousel: string[];
  links: string[],
};
