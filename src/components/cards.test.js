import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { CardItem } from "./cards";
import icontimer from "../assets/icontimer.png";
import Favorite from "../assets/heart_on.png";
import { timeSince } from "../pages/home";

test("renders content", () => {
  const data = {
    author: "John Doe",
    timelogo: icontimer,
    body: "Lorem ipsum...",
    path: "http://example.com",
    id: "1",
    date: "2022-08-29T14:50:13.000Z",
    src: Favorite
  };

  const view = render(
    <CardItem
      timelogo={data.icontimer}
      tittle={`${timeSince(
        new Date(data.date.split("T").join(" ").slice(0, -5))
      )} ago by ${data.author}`}
      body={data.body}
      path={data.path}
      id={data.id}
      date={data.date}
      author={data.author}
      src={data.src}
    />
  )

  expect(view.container).toHaveTextContent(data.body)
});

test('clicking the heart icon', ()=>{
  const data = {
    author: "John Doe",
    timelogo: icontimer,
    body: "Lorem ",
    path: "http://example.com",
    id: "1",
    date: "2022-08-29T14:50:13.000Z",
    src: Favorite
  };

  //const mockHandler = jest.fn();

  const view = render(
    <CardItem
      body={data.body}
      path={data.path}
      id={data.id}
      date={data.date}
      author={data.author}
      src={data.src}
    />
  )

  console.log(view);
  /*const button = view.getByText(data.path)
  fireEvent.click(button)*/
})


