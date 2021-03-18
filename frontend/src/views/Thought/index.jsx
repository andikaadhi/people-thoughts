import React, { useState, useEffect } from "react";
import { Container, Thoughts, CommentCard, Button } from "./styles";
import { Heading } from "@people/styles";
import { Comment, Avatar } from "antd";
import "antd/dist/antd.css";
import { Form } from "./Form";

import { GET } from "../../api";

const Thought = () => {
  const [open, setOpen] = useState(false);
  const [thoughts, setThoughts] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    GET("/thoughts", setThoughts, setIsFetching);
  }, []);

  console.log(thoughts);
  return (
    !isFetching && (
      <Container>
        <Heading type="h2">People's Thoughts</Heading>
        <Thoughts>
          {Array.isArray(thoughts) &&
            thoughts.map((thought) => (
              <CommentCard>
                <Comment
                  author={<a>{thought.author}</a>}
                  avatar={
                    <Avatar
                      style={{
                        backgroundColor: "blue",
                        verticalAlign: "middle",
                      }}
                      size="large"
                    >
                      AA
                    </Avatar>
                  }
                  content={thought.content}
                />
              </CommentCard>
            ))}

          <CommentCard>
            <Comment
              author={<a>Han Solo</a>}
              avatar={
                <Avatar
                  style={{ backgroundColor: "blue", verticalAlign: "middle" }}
                  size="large"
                >
                  AA
                </Avatar>
              }
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
          </CommentCard>
          <CommentCard>
            <Comment
              author={<a>Han Solo</a>}
              avatar={
                <Avatar
                  style={{ backgroundColor: "blue", verticalAlign: "middle" }}
                  size="large"
                >
                  AA
                </Avatar>
              }
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
          </CommentCard>
          <CommentCard>
            <Comment
              author={<a>Han Solo</a>}
              avatar={
                <Avatar
                  style={{ backgroundColor: "blue", verticalAlign: "middle" }}
                  size="large"
                >
                  AA
                </Avatar>
              }
              content={
                <p>
                  We supply a series of design principles, practical patterns
                  and high quality design resources (Sketch and Axure), to help
                  people create their product prototypes beautifully and
                  efficiently.
                </p>
              }
            />
          </CommentCard>
        </Thoughts>
        <Button type="primary" onClick={() => setOpen(true)}>Share My Thought</Button>
        <Form open={open} setOpen={setOpen} />
      </Container>
    )
  );
};

export default Thought;
