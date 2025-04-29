import { StaticImageData } from "next/image";

export interface Episode {
  index: number,
  id: string,
  title: string,
  job: string,
  profileImage: StaticImageData | null,
  description: string
}
