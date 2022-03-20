import React, { } from "react";
import { useHistory, useParams } from "react-router-dom"
import { TagForm } from "./TagForm";
import { TagTable } from "./TagTable";
import { Header } from "../header/header";


import "../../styles/table.css"
import "./tag.css"


export const TagList = (props) => {
  const history = useHistory();
  const { tagId } = useParams();


  return (
    <>
      <Header
        header={'Tags'}
        path={() => history.push(`/tags/new`)}
        button={'Create Tag'}
        form={
        <TagForm />
      
        }
        param={props.form}
      />

        {!tagId ? <TagTable /> : false}

    </>
  )
}