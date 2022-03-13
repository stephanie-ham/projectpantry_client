import React, { useContext, useEffect } from "react";
import { TagContext } from "./TagProvider";
import { TagForm } from "./TagForm";
import { Header } from "../header/header";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import "../../styles/table.css"
import "./tag.css"

export const TagList = (props) => {
  const { tags, getTags } = useContext(TagContext);

  useEffect(() => {
    getTags();
  }, []);

  return (
    <>
      <Header
        header={'Tags'}
      />
      <TagForm />
      <section className="body__container taglist__container">
        <Table className="tag__table">
          <thead>
            <tr>
              <th className="table__cell">Label</th>
              <th className="table__cell">Count</th>
              <th className="table__cell">Edit</th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag) => {
              return (
                <tr className="table__row" key={`tag--${tag.id}`}>
                  <td
                    className="table__cell tag">
                    <Badge
                      pill
                      className="pp_badge">
                      {tag.label}
                    </Badge>{' '}
                  </td>
                  <td className="table__cell counter">XX</td>
                  <td className="table__cell table__buttons">Button</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </section>
    </>
  )
}