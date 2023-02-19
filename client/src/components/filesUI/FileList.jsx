import React,{useState} from 'react'
import FilesPage from '../../pages/FilesPage'

export default function FileList({files}) {
  

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
                files.map((file,index)=>{
                    return (
                    <tr key={file._id}>
                    <td>{index+1}</td>
                        <td>{file.filename}</td>
                        <td><button type="button" className="btn btn-info">View</button></td>
                        <td><button type="button" className="btn btn-danger" >Delete</button></td>
                        
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
