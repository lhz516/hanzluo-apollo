import React from 'react';
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Modal from "antd/lib/modal";
import { graphql } from 'react-apollo';
import MutationState from 'react-apollo-mutation-state';
import SUBMIT_CONTACT_MUTATION from './submit_contact.graphql';

const { TextArea } = Input;
const FormItem = Form.Item;

const ContactForm = ({form, submit, mutation}) => {
  const { getFieldDecorator } = form;
  return (
    <Form layout="vertical" onSubmit={submit}>
      <FormItem
        labelCol={{ xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 } }}
        label="Your Name"
        hasFeedback
      >
        {getFieldDecorator('name', {
          rules: [{
            required: true, message: 'Please input your name!',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        labelCol={{ xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 } }}
        label="E-mail"
        hasFeedback
      >
        {getFieldDecorator('email', {
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }, {
            required: true, message: 'Please input your E-mail!',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        labelCol={{ xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 } }}
        label="Subject"
        hasFeedback
      >
        {getFieldDecorator('subject', {
          rules: [{
            required: true, message: 'Please input subject!',
          }],
        })(
          <Input />
        )}
      </FormItem>
      <FormItem
        labelCol={{ xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 } }}
        wrapperCol={{ xs: { span: 24 }, sm: { span: 24 }, md: { span: 24 } }}
        label="Content"
        hasFeedback
      >
        {getFieldDecorator('content', {
          rules: [{
            required: true, message: 'Please input content!',
          }],
        })(
          <TextArea />
        )}
      </FormItem>
      <Button size="large" type="primary" htmlType="submit" loading={mutation.loading}>
        Submit
      </Button>
    </Form>
  )
};

const withData = graphql(SUBMIT_CONTACT_MUTATION, {
  props: ({ mutate, ownProps}) => ({
    submit: e => {
      e.preventDefault();
      const { form, mutation } = ownProps;
      if (mutation.loading) return;
      form.validateFields((err, values) => {
        if (!err) {
          mutation.set({ loading: true });
          mutate({
            variables: {
              input: values
            },
          }).then(() => {
            mutation.set({ error: null, loading: false });
            form.resetFields();
            Modal.success({
              title: 'Success',
              content: 'Message has been sent to Hanz\'s email',
              okText: 'OK',
            });
          }).catch((error) => {
            mutation.set({ error, loading: false });
            Modal.error({
              title: 'Error',
              content: error.message,
              okText: 'OK',
            });
          });
        }
      });
    },
  }),
});

const withMutationState = MutationState();

const WrappedContactForm = Form.create()(withMutationState(withData(ContactForm)));

export default WrappedContactForm;
