import ReactQuill from 'react-quill-new';
// import 'react-quill-new/dist/quill.snow.css'

function Editor({value,onChange}) {
  const modules={
    toolbar:[
      [{header:[1,2,false]}],
      ['bold','italic','underline','strike','blockquote'],
      [
        {list:'orderd'},
        {list:'bullet'},
        {indent:'-1'},
        {indent:'+1'}
      ],
      ['link','image'],
      ['clean']
    ]
  }
  return (
        <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}/>
  )
}

export default Editor