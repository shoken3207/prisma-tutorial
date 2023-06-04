import prisma from '../lib/prisma';
import { User } from '../types/user/User';

const fetchUserById = async (id: number): Promise<User | null> => {
  const user: User | null = await prisma.user.findUnique({
    select: { id: true, email: true },
    where: { id },
  });
  return user;
};

const fetchUserByEmail = async (email: string): Promise<User | null> => {
  const user: User | null = await prisma.user.findUnique({
    select: { id: true, email: true },
    where: { email },
  });
  return user;
};

const createUser = async (email: string): Promise<void> => {
  await prisma.user.create({ data: { email } });
};

const deleteUser = async (id: number): Promise<void> => {
  await prisma.user.delete({ where: { id } });
};

export { fetchUserById, fetchUserByEmail, createUser, deleteUser };
