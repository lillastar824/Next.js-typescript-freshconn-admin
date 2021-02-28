// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { firebaseAdmin } from '../../utils/firebaseAdmin'

const Failed = {
    "success": false,
    "message": "Invalid Authorization",
    "error_code": 1308,
    "data": {}
}

const Sucess = (users) => ({
    "success": true,
    "message": "User logged in successfully",
    "data": users
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const authState = req.headers.authorization;
    if (authState) {
        let db = firebaseAdmin.firestore();
        const users = []
        let userRef = db.collection('users');
        let snapshot = await userRef.get();
        for (const doc of snapshot.docs) {
            var foo = doc.data()
            foo.id = doc.id
            let addressRef = db.collection('users').doc(doc.id).collection('private').doc('address')
            let bar = await addressRef.get();
            let merge = { ...foo, ...bar.data() }
            users.push(merge)
        }
        res.status(200).json(Sucess(users));
    }
    else {
        res.status(401).json(Failed)
    }
    res.end()
}

