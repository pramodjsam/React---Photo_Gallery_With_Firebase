import {useEffect,useState} from 'react';
import {projectFirestore} from '../firebase/config';

const useFirestore=(collection)=>{
	const [docs,setDocs]=useState([]);
	useEffect(()=>{
		projectFirestore.collection(collection)
			.orderBy("createdAt",'desc')
			.onSnapshot((snap)=>{
				let document=[];
				snap.forEach((doc)=>{
					document.push({...doc.data(),id:doc.id});
				})
				setDocs(document);
			})
	},[collection])
	return {docs};
}

export default useFirestore;