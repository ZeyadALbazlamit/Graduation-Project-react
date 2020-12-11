import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Up() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
//    data.preventDefault();

    const fd= new FormData();
    fd.append("image",data.img[0],data.img[0].name);
    console.log(fd);
const Data=[
  fd,
  {l:0}
  ];

console.log(Data);

    axios.post("http://127.0.0.1:8000/api/Post",fd)
    .then(res => {
      console.log(res.data);
    });

}
  return (
    <form method="POST" action="http://127.0.0.1:8000/api/Post"  onSubmit={handleSubmit(onSubmit)}>
      <br />
      <input name="id" ref={register} />
      < br />
      <input  name="img" type="file" ref={register} />
      <br />
      <input type="submit" />
    </form>
  );
}