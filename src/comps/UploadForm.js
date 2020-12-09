import React,{useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm=()=>{
	const [file,setFile]=useState(null);
	const [error,setError]=useState(null);
	const changeHandler=(e)=>{
		const selected=e.target.files[0];
		const types=['image/jpeg','image/png','image/jpg'];
		if(selected && types.includes(selected.type)){
			setFile(selected);
			setError("");
		}else{
			setError("Please select an image type (jpeg or png)");
			setFile(null);
		}
	}
	return(
		<form>
			<label>
				<input type="file" onChange={changeHandler} />
				<span>+</span>
			</label>
			<div className='output'>
				{error && <div className='error'>{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	)
}

export default UploadForm;