import React, { useState, useEffect } from "react";
import { Container, Thoughts, CommentCard, Button } from "./styles";
import { Heading, Text } from "@people/styles";
import { Comment, Avatar } from "antd";
import "antd/dist/antd.css";
import { Form } from "./Form";
import { PreviewImage } from "./styles";

import socket from "../../socket";

const color = ["#FFABAB", "#6EB5FF", "#B2BDFF", "#85E3FF"];

const convertToInitial = (name) => {
  let initial = "";
  if (name) {
    const names = name.split(" ");
    names.slice(0, 2).forEach((name) => {
      if (name[0]) initial = initial + name[0];
    });
    return initial.toUpperCase();
  }
  return initial;
};

const Thought = () => {
  const [open, setOpen] = useState(false);
  const [thoughts, setThoughts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    socket.connect();
    socket.on("new-thought", (thought) =>
      setThoughts((values) => [...values, thought])
    );
    // GET("/thoughts", setThoughts, setIsFetching);
  }, []);

  return (
    <Container>
      <Heading type="h2">People's Thoughts</Heading>
      <Thoughts>
        {thoughts.length === 0 ? (
          <PreviewImage src={process.env.PUBLIC_URL + "/preview.png"} />
        ) : (
          <>
            {Array.isArray(thoughts) &&
              thoughts.map((thought, index) => (
                <CommentCard key={index}>
                  <Comment
                    author={
                      <Text
                        size="small"
                        style={{ textTransform: "capitalize" }}
                      >
                        {thought.author}
                      </Text>
                    }
                    avatar={
                      <Avatar
                        style={{
                          backgroundColor:
                            color[Math.floor(Math.random() * color.length)],
                          verticalAlign: "middle",
                        }}
                        size="large"
                      >
                        {convertToInitial(thought.author)}
                      </Avatar>
                    }
                    content={thought.content}
                  />
                </CommentCard>
              ))}
          </>
        )}
      </Thoughts>
      <Button type="primary" onClick={() => setOpen(true)}>
        Share My Thought
      </Button>
      <Form open={open} setOpen={setOpen} />
    </Container>
  );
};

export default Thought;
