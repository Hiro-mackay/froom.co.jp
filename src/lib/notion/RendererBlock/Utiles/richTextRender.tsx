import { Link } from '../../../../components/Link';
import { RichTextItem, TextAnnotations } from '../../types';
import { getParagraphStyle, ParagraphStyleType } from './getParagraphStyle';

const getStyle = (annotations: TextAnnotations) => {
  let styles: string[] = [];

  Object.entries(annotations).forEach((annotation) => {
    const [key, val] = annotation as [ParagraphStyleType, string];
    if (val) {
      styles.push(getParagraphStyle(key));
    }
  });

  return styles.join(' ');
};

export const richTextRender = (text: RichTextItem) => {
  return text.map((richText) => {
    switch (richText.type) {
      case 'text':
        return <span className={`${getStyle(richText.annotations)}`}>{richText.text.link ? <Link href={richText.text.link.url}>{richText.text.content}</Link> : richText.text.content}</span>;

      default:
        break;
    }
  });
};
