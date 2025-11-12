import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const singInEmailPAssword = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    const dbUser = await createUser(email, password);
    return dbUser;
  }

  if (!bcrypt.compareSync(password, user.password ?? "")) {
    return null;
  }
  return user;
};

const createUser = async (email: string, password: string) => {
  const hasPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      email,
      password: hasPassword,
      name: email.split("@")[0],
    },
  });

  return user;
};
