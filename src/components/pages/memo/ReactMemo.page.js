import { useCallback, useState } from "react"
import ReactMemoChild from "./child.page"
import AWS from 'aws-sdk'
import InlineSVG from 'svg-inline-react';

const S3_BUCKET = 'test';
const REGION = 'us-east-1';


AWS.config.update({
    accessKeyId: 'AKIAIOSFODNN7EXAMPLE',
    secretAccessKey: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',
})

const myBucket = new AWS.S3({
    s3ForcePathStyle: true,
    params: { Bucket: S3_BUCKET },
    endpoint: new AWS.Endpoint("http://localhost:9444")
})

const ReactMemo = () => {
    console.log("React Memo Parent Page")
    let [count, setCount] = useState(0)
    let [props, setProps] = useState(0)
    let [bioinfo, setBioInfo] = useState({})
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);
    const [complete, setComplete] = useState(0);
    const [imgSrc, setImgSrc] = useState('');
    const [imgSvgSrc, setSvgImgSrc] = useState('');



    const countInc = (event) => {
        count = count + 1
        setCount(count)
        alert("Optimization :: Child Component will not render. Only Parent component will render.")
    }

    const passProps = () => {
        setProps(Math.random())
    }

    const bioInfoFunc = useCallback((obj) => {
        alert("Passing data from child to parent. Child Component will not render(Optimization useCallback)")
        setBioInfo({ ...bioinfo, ...obj })
    }, [props])




    const handleFileInput = (e) => {
        console.log(e.target.files[0])
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {
        setSvgImgSrc('')
        setImgSrc('')
        const fileName = `${Math.random().toString().substring(3, 10)}.${file.name.split('.')[1]}`
        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: fileName
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
                setComplete(Math.round((evt.loaded / evt.total) * 100))
                if (evt.total === evt.loaded) {
                    setComplete(100)
                    const url = `http://localhost:9444/test/${fileName}`
                    if (!fileName.includes('.svg')) {
                        setImgSrc(url)
                    }
                    else {
                        fetch(url)
                            .then(res => res.text())
                            .then(text => {
                                let data = text.replace('viewBox', `class="icon icons8-Christmas-Tree" viewBox`)
                                setSvgImgSrc(data)
                            });
                    }

                }
            })

            .send((err) => {
                if (err) console.log(err)
            })
    }


    return (
        <div style={{ marginTop: "10px" }}>

            <button onClick={(e) => { countInc(e) }}>Increment</button>
            <span style={{ marginLeft: "10px" }}>Total Clicked : {count}</span>
            {bioinfo.country && <>
                <div>Country : {bioinfo.country}</div>
                <div>Population : {bioinfo.population}</div>
                <div>Avg. Height : {bioinfo.avgHeight}</div>
            </>
            }

            <div style={{ marginTop: "10px" }}>
                <button onClick={(e) => { passProps(e) }}>Pass data to Child as props</button>
            </div>

            <ReactMemoChild data={props} handleChange={bioInfoFunc} />

            <br /><br /><br />
            <div>
                <input type="file" onChange={handleFileInput} />
                <button onClick={() => uploadFile(selectedFile)}> Upload to S3</button>
                {complete > 0 && complete < 100 ?
                    <div> File Upload Progress is {progress} %</div>
                    :
                    <div>
                        {/* <hr/> */}
                        {imgSrc && <img src={imgSrc} height={100} alt="loading..." />}
                        {imgSvgSrc && <InlineSVG src={imgSvgSrc} />}

                    </div>
                }
            </div>
        </div>
    )
}

export default ReactMemo