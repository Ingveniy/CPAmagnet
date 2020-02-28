import React, { PureComponent } from "react";
import { Form, Input, Tooltip, Icon, Row, Col, DatePicker, Button } from "antd";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import locale from "antd/lib/date-picker/locale/ru_RU";
import moment from "moment";

class ArticlesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      metaTitle: "Статья1",
      metaKeywords: ["ключ слово1", "ключ слово2", "ключ слово3"],
      metaDescription: "Это описание статьи",
      content: "<p>Контент1</p>",
      title: "Статья 1",
      category: 1,
      rssStatus: false,
      seoUrl: "statya1",
      sendNotification: false,
      previewImage: "",
    };
  }

  componentDidMount() {}

  handleSubmit = () => {};
  handleOnChange = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.props, "this.props");

    const {
      metaTitle,
      metaKeywords,
      metaDescription,
      content,
      title,
      previewImage,
      rssStatus,
      seoUrl,
      sendNotification,
    } = this.state;
    return (
      <div style={styles.content}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label='Мета Title'>
            <Input defaultValue={metaTitle} ref={el => (this.metaTitle = el)} />
          </Form.Item>
          <Form.Item label='Мета Description'>
            <Input
              defaultValue={metaDescription}
              ref={el => (this.metaDescription = el)}
            />
          </Form.Item>
          <Form.Item label='Мета Keywords'>
            <Input
              defaultValue={metaKeywords}
              ref={el => (this.metaKeywords = el)}
            />
          </Form.Item>
          <Form.Item label='URL Статьи'>
            <Input defaultValue={seoUrl} ref={el => (this.seoUrl = el)} />
          </Form.Item>
          <Form.Item label='Мета title'>
            <Input ref={el => (this.metaTitle = el)} />
          </Form.Item>
          <Form.Item label='Заголовок статьи'>
            <Input defaultValue={title} ref={el => (this.title = el)} />
          </Form.Item>
          <Form.Item label='Контент статьи'>
            <ReactQuill
              defaultValue={content}
              ref={el => (this.content = el)}
            />
          </Form.Item>

          {/* Тут будет конструктор миниатюрки для статьи
          <Form.Item label="Миниатюра статьи">
            <Input
              defaultValue={previewImage}
              ref={el => (this.previewImage = el)}
            />
          </Form.Item>
          */}
          <Form.Item>
            <Button type='primary' htmlType='submit'>
              Сохранить статью
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const styles = {
  content: {
    flex: 6,
  },
};
export default ArticlesList;
