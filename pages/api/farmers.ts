// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { firebaseAdmin } from '../../utils/firebaseAdmin'



export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = firebaseAdmin.firestore();
    const farmers = []

    const farmerRef = db.collection('farmers');
    const snapshot = await farmerRef.get();
    snapshot.forEach(doc => {
        var foo = doc.data()
        foo.id = doc.id
        // console.log(doc.id, '=>', doc.data());
        farmers.push(foo)
    });

    res.status(200).json(farmers);
}

