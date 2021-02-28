// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { firebaseAdmin } from '../../../utils/firebaseAdmin'


const handleFirebase = async (value) => {
    //sending data to firebase
    let db = firebaseAdmin.firestore();
    db.collection("markets")
        .doc(value)
        .delete()
        .then((ref) => {
            console.log("market deleted with ID:" + ref);
        })
        .catch((error) => {
            console.log(error);
        });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {

    console.log(req.body);
    await handleFirebase(req.body);

    console.log("market deleting works");
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(req.body));
};

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//     const db = firebaseAdmin.firestore();
//     const newScream = {
//         body: req.body,
//         userHandle: req.body.userHandle,
//         createdAt: firebaseAdmin.firestore.Timestamp.fromDate(new Date())
//     };
//     console.log(newScream)

//     const ref = await db.collection('markets').add(newScream)

//     console.log('Added document with ID: ', ref.id);

//     res.status(200).json({ result: 'Added document with ID: ' + ref.id });
// }

