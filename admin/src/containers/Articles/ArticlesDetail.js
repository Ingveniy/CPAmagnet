import React, { PureComponent } from 'react';
import { Form, Input, Tooltip, Icon, Row, Col, DatePicker, Button } from 'antd';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import moment from 'moment';
class ArticlesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      metaTitle: 'Заголовок страницы1',
      metaKeywords: ['keyword1', 'keyword2', 'keyword3'],
      metaDescription: 'Мета описание страницы1',
      content: '<p>Контент1</p>',
      articleTitle: 'Заголовок статьи1',
      miniatureImg:
        'https://avatars.mds.yandex.net/get-pdb/28866/9e621233-36ec-4e34-a372-9829f00a67ed/s375',
      showInRSS: true,
      seoUrlPage: 'article1', // будет формироваться из заголовка статьи
      publishDate: '2019-04-19T14:38:48.745Z' // Дата отложенной публикации
    };
  }
  handleSubmit = () => {};
  handleOnChange = (name, value) => {
    this.setState({ [name]: value });
  };
  render() {
    console.log(this.props, 'this.props');

    const {
      metaTitle,
      metaDescription,
      metaKeywords,
      seoUrlPage,
      publishDate,
      content,
      articleTitle,
      showInRSS,
      miniatureImg
    } = this.state;
    return (
      <div style={styles.content}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="Мета Title">
            <Input defaultValue={metaTitle} ref={el => (this.metaTitle = el)} />
          </Form.Item>
          <Form.Item label="Мета Description">
            <Input
              defaultValue={metaDescription}
              ref={el => (this.metaDescription = el)}
            />
          </Form.Item>
          <Form.Item label="Мета Keywords">
            <Input
              defaultValue={metaKeywords}
              ref={el => (this.metaKeywords = el)}
            />
          </Form.Item>
          <Form.Item label="Дата публикации">
            <DatePicker
              locale={locale}
              defaultValue={moment(publishDate, 'YYYY-MM-DD HH:mm')}
              ref={el => (this.publishDate = el)}
            />
          </Form.Item>
          <Form.Item label="URL Статьи">
            <Input
              defaultValue={seoUrlPage}
              ref={el => (this.seoUrlPage = el)}
            />
          </Form.Item>
          <Form.Item label="Мета title">
            <Input ref={el => (this.metaTitle = el)} />
          </Form.Item>
          <Form.Item label="Заголовок статьи">
            <Input
              defaultValue={articleTitle}
              ref={el => (this.articleTitle = el)}
            />
          </Form.Item>
          <Form.Item label="Контент статьи">
            <ReactQuill
              defaultValue={content}
              ref={el => (this.content = el)}
            />
          </Form.Item>

          {/* Тут будет конструктор миниатюрки для статьи
          <Form.Item label="Миниатюра статьи">
            <Input
              defaultValue={miniatureImg}
              ref={el => (this.miniatureImg = el)}
            />
          </Form.Item>

           <Form.Item label="Показывать в RSS ?">
            <Input
              defaultValue={showInRSS}
              ref={el => (this.showInRSS = el)}
            />
          </Form.Item>

          */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
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
    flex: 6
  }
};
export default ArticlesList;
