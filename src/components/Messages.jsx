import React, { useState } from 'react'
import Message from './Message'
import { useEffect } from 'react'
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore'
import { db } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { setEmails } from './redux/appSlice';

const Messages = () => {

  const dispatch=useDispatch();
  const {searchText,emails}=useSelector(store=>store.appSlice);
  const [tempEmail,setTempEmail]=useState(emails);

  useEffect(() => {
    const q= query(collection(db,"emails"),orderBy('createdAt','desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(allEmails);
      dispatch(setEmails(allEmails));
    })
    //cleanup
    return () => unsubscribe();
  }, []);

  // useEffect(()=>{
  //   const filteredEmail =emails?.filter((email)=>{
  //    return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
  //   })
  //   setTempEmail(filteredEmail);
  //  },[searchText,emails]);

  useEffect(() => {
    const queryText = searchText?.toLowerCase() || "";
  
    const filteredEmail = emails?.filter((email) => {
      const subject = email?.subject?.toLowerCase() || "";
      const to = email?.to?.toLowerCase() || "";
      const message = email?.message?.toLowerCase() || "";
  
      return subject.includes(queryText) || to.includes(queryText) || message.includes(queryText);
    });
  
    setTempEmail(filteredEmail);
  }, [searchText, emails]);
  

  return (
    <div>
      {
        tempEmail && tempEmail?.map((email)=> <Message email={email}/>)
      }
    </div>
  )
}

export default Messages