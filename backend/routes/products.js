var express = require("express");
var router = express.Router();
const db = require("../firebase");
const {
  getDoc,
  doc,
  updateDoc,
  setDoc,
  arrayUnion,
  query,
  collection,
  where,
  getDocs,
} = require("firebase/firestore");


router.get("/getItem",async(req,res,next)=>{
 const id=req.query.id
 const email=req.query.email

 const docRef = doc(db, "users", `${email}`);
 try {
  const docSnap = await getDoc(docRef);
  const userData=(docSnap.data());

  indexofid=userData.items.findIndex((item)=>item.itemId===id)


  res.json(userData.items[indexofid])
} catch(error) {
  console.log(error)
}


})

router.get("/all", async (req, res, next) => {
  let allUsersItems = [];
  let allItems = [];

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    let itemData = doc.data();
    allUsersItems.push(itemData.items);
  });
  allUsersItems.forEach((doc) => {
    doc.forEach((docs) => {
      allItems.push(docs);
    });
  });

  res.json({ allItems });
});

module.exports = router;
