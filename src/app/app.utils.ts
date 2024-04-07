export class Subsection {
  title: string;
  subtitle: string; // Subtítulo
  icon: string;
  description: string;
  job: string; // Trabajo
  dates: string; // Fechas
  location: string; // Ubicación
  tech: string;
  sector: string;

  constructor(
    title: string,
    subtitle: string,
    job: string,
    description: string,
    dates: string,
    location: string,
    icon: string,
    tech: string,
    sector: string
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.job = job;
    this.description = description;
    this.dates = dates;
    this.location = location;
    this.icon = icon;
    this.tech = tech;
    this.sector = sector;
  }
}

export class Section {
  title: string;
  subsections: Subsection[];

  constructor(title: string, subsections: Subsection[]) {
    this.title = title;
    this.subsections = subsections;
  }

  addSubsection(subsection: Subsection) {
    this.subsections.push(subsection);
  }
}

export class Info {
  name: string;
  jobTitle: string;
  email: string;
  location: string;
  phoneNumber: string;
  img: string;
  linkedin: string;

  constructor(
    name: string,
    jobTitle: string,
    email: string,
    location: string,
    phoneNumber: string,
    img: string,
    linkedin: string
  ) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.email = email;
    this.location = location;
    this.phoneNumber = phoneNumber;
    this.img = img;
    this.linkedin = linkedin;
  }
}

export class Sheet {
  info: Info | undefined;
  rightSections: Section[] | undefined;
  leftSections: Section[];

  constructor(
    info: Info | undefined,
    rightSections: Section[] | undefined,
    leftSections: Section[]
  ) {
    this.info = info;
    this.rightSections = rightSections;
    this.leftSections = leftSections;
  }
}
