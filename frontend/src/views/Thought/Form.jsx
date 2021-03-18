import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { Input, Text } from '@people/styles';
import { POST } from '../../api';

export const Form = ({ open, setOpen }) => {

    const [author, setAuthor] = useState(null);
    const [content, setContent] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = () => {
        POST('/thoughts', { author, content }, null, () => setOpen(false), setIsSubmitting);
    }


    return (
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={open}
          onOk={handleSubmit}
          onCancel={() => setOpen(false)}
        >
            <Text size="small">
                Your Name
            </Text>
            <Input value={author} onChange={(ev) => setAuthor(ev.target.value)}/>
            <Text size="small">
                Your Thoughts
            </Text>
            <Input value={content} onChange={(ev) => setContent(ev.target.value)}/>
        </Modal>
    )
}