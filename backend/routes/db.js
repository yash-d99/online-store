var express = require('express');
var router = express.Router();
const db = require("../firebase");

const {
    getDoc,
    doc,
    updateDoc,
    setDoc,
    arrayUnion,
} = require("firebase/firestore");

router.post("/add_item", async function (req, res, next) {

    console.log('got this place');
    const email = req.body.email;
    const itemName = req.body.itemName;
    const description = req.body.description;
    const imageName = req.body.imageName;
    const price = req.body.price;
    const quantity = req.body.quantity;

    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        await updateDoc(doc(db, "users", email), {
            items: arrayUnion(
                {
                    description: description,
                    imageLink: `https://launch23-swe-week3-team6.s3.us-east-2.amazonaws.com/${imageName}`,
                    name: itemName,
                    price: price,
                    quantity: quantity

                })
        });
    } else {
        // docSnap.data() will be undefined in this case
        await setDoc(doc(db, "users", email), {
            items: [
                {
                    description: description,
                    imageLink: `https://launch23-swe-week3-team6.s3.us-east-2.amazonaws.com/${imageName}`,
                    name: itemName,
                    price: price,
                    quantity: quantity
                }
            ]

        });
    }

});



module.exports = router;