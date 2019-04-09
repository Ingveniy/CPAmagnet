import { Schema } from 'mongoose';
const autoIncrement = require('mongoose-auto-increment');
module.exports = function(db) {
  const schema = new Schema(
    {
      metaTitle: {
        type: String,
        default: 'Заголовок страницы1'
      },
      metaKeywords: {
        type: Array,
        default: ['keyword1', 'keyword2', 'keyword3']
      },
      metaDescription: {
        type: String,
        default: 'Мета описание страницы1'
      },
      articlesTitle: {
        type: String,
        default: 'Заголовок статьи1'
      },
      content: {
        type: String,
        default: '<p>Контент1</p>'
      },
      miniatureImg: {
        type: String,
        default:
          'https://avatars.mds.yandex.net/get-pdb/28866/9e621233-36ec-4e34-a372-9829f00a67ed/s375'
      },
      showInRSS: {
        type: Boolean,
        default: true
      },
      seoUrlPage: {
        type: String,
        default: 'article1'
      },
      publishDate: {
        type: Date,
        default: '2019-04-19T14:38:48.745Z'
      }
    },
    { id: false, strict: false, timestamps: true }
  );
  schema.plugin(autoIncrement.plugin, {
    model: 'Article',
    id: 'id',
    startAt: 1
  });
  return db.model('Article', schema);
};
