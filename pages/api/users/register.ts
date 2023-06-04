import type { NextApiRequest, NextApiResponse } from 'next';
import { RegisterRequest } from '../../../types/user/request/RegisterRequest';
import { createUser, fetchUserByEmail } from '../../../services/userService';
import { User } from '../../../types/user/User';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email }: RegisterRequest = req.body;
    let user: User | null;
    user = await fetchUserByEmail(email);
    if (!user) {
      await createUser(email);
      user = await fetchUserByEmail(email);
    }

    res.status(200).json({ message: '', user });
  } catch (err) {
    return res.status(500).json({ err });
  }
};
