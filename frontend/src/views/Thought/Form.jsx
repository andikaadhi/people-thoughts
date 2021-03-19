import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { Input, TextArea, Text } from '@people/styles';
import { POST } from '../../api';
import { FormText } from './styles';

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
          title="Your Thoughts"
          centered
          visible={open}
          onOk={handleSubmit}
          onCancel={() => setOpen(false)}
        >
            <FormText size="small">
                Your Name
            </FormText>
            <Input id="author" type="text" value={author} onChange={(ev) => setAuthor(ev.target.value)}/>
            <div style={{height: '16px'}}></div>
            <FormText size="small">
                Your Thoughts
            </FormText>
            <TextArea rows="5" id="content" type="text" value={content} onChange={(ev) => setContent(ev.target.value)}/>
        </Modal>
    )
}