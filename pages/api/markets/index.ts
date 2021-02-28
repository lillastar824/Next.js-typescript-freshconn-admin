// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { firebaseAdmin } from '../../../utils/firebaseAdmin'



export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = firebaseAdmin.firestore();
    const markets = []

    const citiesRef = db.collection('markets');
    const snapshot = await citiesRef.get();
    snapshot.forEach(doc => {
        var foo = doc.data()
        foo.id = doc.id
        // console.log(doc.id, '=>', doc.data());
        markets.push(foo)
    });

    res.status(200).json(markets);
}

