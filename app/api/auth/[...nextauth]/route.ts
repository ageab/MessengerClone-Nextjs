import client from "@/app/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(client),
  providers: [GithubProvider({
    clientId: proccess.env.GITHUB_ID as string,
    clientSecret: proccess.env.GITHUB_ID as string,
  })],
};
