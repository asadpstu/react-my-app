import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
    const [browsefile, setBrowseFile] = useState(null)
    const [formData, setFormData] = useState({})


    const updateCrudState = (e) =>{
      const {name,value} = e.target
      const temp = formData
      temp[name] = value
      setFormData({...temp})
    }

    const submitForm = (e) =>{
        e.preventDefault();
        const formData = new FormData();
		formData.append('File', browsefile);
        formData.append('name', formData.name);
        formData.append('email', formData.email);
        formData.append('phone', formData.phone);

        console.log(formData)

    }

    return (<div className="page">

        <div><h5>Crud Operation (save data)</h5><hr/></div>
        <form  onSubmit={submitForm}>
            <Form.Label className='align-left'>Name</Form.Label>
            <input className="form-control" placeholder="name" type="text" name="name" onChange={(e) => { updateCrudState(e) }} />
            <Form.Label className='align-left'>Email address</Form.Label>
            <input className="form-control" placeholder="email" type="text" name="email" onChange={(e) => { updateCrudState(e) } } />
            <Form.Label className='align-left'>Phone</Form.Label>
            <input className="form-control" placeholder="phone" type="text" name="phone" onChange={(e) =>  { updateCrudState(e) }}  />
            <Form.Label className='align-left'>Upload file</Form.Label>
            <FileUpload onChange={(file) => { setBrowseFile(file) }} file={browsefile} />
            <Button style={{background:'#fce4ec', color : '#000', border:'2px solid #c9b2ba', marginTop:'10px'}} type="submit">
                Submit
            </Button>
        </form>
    </div>);
}


const FileUpload = ({ onChange, file }) => {
    const fileSourceType = {
        pdf: "application/pdf",
        png: "image/png",
        jpg: "image/png",
        jpeg: "image/png",
    }
    const typeofFileIsString = typeof file == 'string'
    const fileUrl = file ? typeofFileIsString ? file : URL.createObjectURL(file) : '';
    const fileType = file ? typeofFileIsString ? fileSourceType[file.split('.')[1]] : file.type : ''
    const filePreview = () => {
        switch (fileType) {
            case fileSourceType.pdf:
                return (<object data={fileUrl} />)
                break;
            case fileSourceType.png:
            case fileSourceType.jpg:
            case fileSourceType.jpeg:
                return (<img src={fileUrl} />)
                break
            default:
                return (<div className="no-preview-avilable"><p>Unable to preview..</p><p><a href={fileUrl} download={fileUrl}>Download</a></p></div>)

        }
    }
    return (
        <div className="fileUpload">

            <div className="Preview">{fileUrl ? filePreview() : null}</div>
            <input type="file" style={{ display: 'none' }} onChange={(e) => {
                const files = e.target.files
                onChange(files.length > 0 ? files[0] : null)
            }} />

            <span><input readOnly value={file ? typeofFileIsString ? fileUrl : file.name : ''} /><button onClick={(e) => {
                e.target.parentNode.parentNode.querySelector('input[type="file"]').click();
            }}>Upload</button>{fileUrl ? <button onClick={() => { onChange(null) }}>&times;</button> : null}</span>
        </div>
    )
}

export default HomePage;