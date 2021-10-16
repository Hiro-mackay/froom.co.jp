import { QuoteBlock } from '../types';
import { NotionComponentProps } from './Utiles/NotionComponentProps';
import { richTextRender } from './Utiles/richTextRender';

export const NotionBlockquote = ({ block }: NotionComponentProps<QuoteBlock>) => {
  return <p>{<blockquote>{richTextRender(block.quote.text)}</blockquote>}</p>;
};

/** 
.blockquote {
  padding: 60px 80px 40px;
  position: relative;
}
.blockquote p {
  font-family: "Utopia-italic";
  font-size: 35px;
  font-weight: 700px;
  text-align: center;
}

.blockquote:before {
position: absolute;
font-family: 'FontAwesome';
top: 0;

content:"\f10d";
font-size: 200px;
color: rgba(0,0,0,0.1);
 
}

.blockquote::after {
  content: "";
  top: 20px;
  left: 50%;
  margin-left: -100px;
  position: absolute;
  border-bottom: 3px solid #bf0024;
  height: 3px;
  width: 200px;
}

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic);
.otro-blockquote{
font-size: 1.4em;
width:60%;
margin:50px auto;
font-family:Open Sans;
font-style:italic;
color: #555555;
padding:1.2em 30px 1.2em 75px;
border-left:8px solid #78C0A8 ;
line-height:1.6;
position: relative;
background:#EDEDED;
}

.otro-blockquote::before{
font-family:Arial;
content: "\201C";
color:#78C0A8;
font-size:4em;
position: absolute;
left: 10px;
top:-10px;
}

.otro-blockquote::after{
content: '';
}

.otro-blockquote span{
display:block;
color:#333333;
font-style: normal;
font-weight: bold;
margin-top:1em;
}
*/
