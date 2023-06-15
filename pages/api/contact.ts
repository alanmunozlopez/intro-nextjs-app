import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if(req.method === 'POST') {
    // Save to DB
    console.log(req.body);
    res.json({ message: 'ok' })
  }
}