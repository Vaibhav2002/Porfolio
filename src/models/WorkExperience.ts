export default interface WorkExperience {
  experiences: Experience[]
}

export interface Experience {
  company: string,
  position: string,
  startDate: string,
  endDate: string,
  description: string[]
}