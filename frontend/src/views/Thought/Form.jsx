import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { Input, Text } from '@people/styles';
import { POST } from '../../api';

export const Form = ({ open, setOpen }) => {

    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const resetForm = () => {
        setAuthor('');
        setContent('');
        setOpen(false);
    }

    const handleSubmit = () => {
        POST('/thoughts', { author, content }, null, () => resetForm(), setIsSubmitting);
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
            <Input id="author" type="text" value={author} onChange={(ev) => setAuthor(ev.target.value)}/>
            <Text size="small">
                Your Thoughts
            </Text>
            <Input id="content" type="text" value={content} onChange={(ev) => setContent(ev.target.value)}/>
        </Modal>
    )
}