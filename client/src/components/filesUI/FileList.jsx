import React,{useState} from 'react'
import FilesPage from '../../pages/FilesPage'

export default function FileList({files}) {
  
let copy=files
let [files1,setFiles1]=useState(files)

  let deleteRow=(num)=>{
    let copy=[...files1]
    console.log({copy:num})
   let ind= copy.findIndex((ele)=>ele.filename==num)
      copy.splice(ind,1)
      setFiles1(copy)
  }

  return (
    <div>
      <h1>All Uploaded Files</h1>
      <div className='mt-3'>
        <table className="table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>File Name</th>
              <th>View</th>
              <th>Delete</th>

              </tr>
              </thead>
          <tbody>
          {
                files1.map((file,index)=>{
                    return (
                    <tr key={file._id}>
                    <td>{index+1}</td>
                        <td>{file.filename}</td>
                        <td><button type="button" className="btn btn-info">View</button></td>
                        <td><button type="button" className="btn btn-danger" onClick={()=>deleteRow(file.filename)}>Delete</button></td>
                        
                        </tr>
                    )
                })
            }
            
          </tbody>
        </table>
        <ul className="list-group">
            
    </ul>
        </div>
    </div>
  )
}
