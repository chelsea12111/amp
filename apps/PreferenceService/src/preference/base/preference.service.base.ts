/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Preference as PrismaPreference } from "@prisma/client";

export class PreferenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PreferenceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.preference.count(args);
  }

  async preferences<T extends Prisma.PreferenceFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PreferenceFindManyArgs>
  ): Promise<PrismaPreference[]> {
    return this.prisma.preference.findMany<Prisma.PreferenceFindManyArgs>(args);
  }
  async preference<T extends Prisma.PreferenceFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PreferenceFindUniqueArgs>
  ): Promise<PrismaPreference | null> {
    return this.prisma.preference.findUnique(args);
  }
  async createPreference<T extends Prisma.PreferenceCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PreferenceCreateArgs>
  ): Promise<PrismaPreference> {
    return this.prisma.preference.create<T>(args);
  }
  async updatePreference<T extends Prisma.PreferenceUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PreferenceUpdateArgs>
  ): Promise<PrismaPreference> {
    return this.prisma.preference.update<T>(args);
  }
  async deletePreference<T extends Prisma.PreferenceDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PreferenceDeleteArgs>
  ): Promise<PrismaPreference> {
    return this.prisma.preference.delete(args);
  }
}