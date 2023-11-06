"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";

type Props = {};

const ImageGenPage = (props: Props) => {
  // session

  // state
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");

  // effect

  return (
    <div className="gap-2">
      <div className="flex flex-col p-2 gap-2 md:flex-row">
        <Input placeholder="moon landing in 2100.." value={prompt} onChange={(e)=>{e.preventDefault(); setPrompt(e.target.value);}}></Input>
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Generate
        </Button>
      </div>
      <div className="p-2">
        {image && (
          <Image
            src={image}
            width={2000}
            height={2000}
            alt={""}
            className="w-full"
          />
        )}
      </div>
    </div>
  );

  // handler functions
  async function handleSubmit() {
    const res = await axios.post( "api/imagegen", { prompt: prompt }, { timeout: 30000 } );
    // console.log(res.data.data[0]);
    console.log(res.data[0]);
    setImage(res.data[0]);
  }
};

export default ImageGenPage;
