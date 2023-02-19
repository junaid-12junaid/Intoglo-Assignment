import React, { Children, useEffect, useState } from 'react'
import FileUploader from '../components/filesUI/FileUploader'
import FileList from '../components/filesUI/FileList'
import { getFiles, uploadFiles } from '../services/file-service'


const Row=({children})=><div className='row'>{children}</div>
const Cloumn=({children,...props})=>{
return ( 
  
<div className={`col ${Object.keys(props)} shadow m-2`}>{children}</div>
)
}


export default function FilesPage() {
    const[selectedFiles,setSelectedFiles]= useState([])
    const [files,setFiles]=useState([])


    useEffect(()=>{
      getFiles().then(res=>{
        console.log(res.data)
        setFiles(res.data)
      })
    },[])
    const onFilesSelect=(files)=>{
      setSelectedFiles(files)
        // console.log(files)
    }

    const onUpload=()=>{
       uploadFiles(selectedFiles).then(res=>{
        setFiles([...files,...res.data])
        setSelectedFiles([])
      }).catch(err=>console.log(err));
       
    }

  return (
    <Row>
        <Cloumn col-8><FileList files={files}></FileList></Cloumn>
        <Cloumn col><FileUploader selectedFiles={selectedFiles} onFilesSelect={onFilesSelect} onUpload={onUpload}></FileUploader></Cloumn>
      
      
    </Row>
  )
}
