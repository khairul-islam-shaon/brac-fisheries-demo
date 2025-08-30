'use client'
import React from 'react'
import { useSelector } from "react-redux";
import {BASE_URL} from "@/config/config";
import Link from 'next/link';

const AspirationImage = ({ data: { files, name, post_language, slug } }) => {
  const { Language } = useSelector((state) => state);

  return (
    <div className="card">
      <img src={BASE_URL() + files[0]?.media_content?.original_url} alt="" />
      <Link href={slug}>
        <h3 className=' '>{Language.data === "EN" ? name : post_language[0]?.name}</h3>
      </Link>
    </div>
  );
};

export default AspirationImage