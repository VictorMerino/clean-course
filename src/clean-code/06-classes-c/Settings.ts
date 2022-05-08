export interface SettingsProperties {
  workingDirectory: string
  lastOpenFolder: string
}
export class Settings {
  public workingDirectory: string
  public lastOpenFolder: string

  constructor({ workingDirectory, lastOpenFolder }: SettingsProperties) {
    this.workingDirectory = workingDirectory
    this.lastOpenFolder = lastOpenFolder
  }
}
